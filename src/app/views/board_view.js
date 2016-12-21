import $ from 'jquery';
import Backbone from 'backbone';
import SquareView from 'app/views/square_view'

const BoardView = Backbone.View.extend({
  initialize: function(){
    // this.template = _.template($('#board-template'))
  },

  render: function() {
    // console.log("rendering boardView")
    const newSquareList = this.$el;
    // console.log("this is the new square list", newSquareList)
    newSquareList.empty();

    this.collection.forEach(function(square) {
      const newSquare = new SquareView({
        model: square
      });
      // listen to the custom event in Square View that is called "squareClicked", which will tell us where to play.
      this.listenTo(newSquare, 'squareClicked', this.play);
      newSquareList.append(newSquare.render().$el);
    }, this);
    return this;
  },

  play: function(clickedSquare) {
    let square = clickedSquare.model;
    let board = this.collection;

    if (square.get("contents") === "" && board.nextTurn <= 9 && board.status === "pending") {
      // if the square is empty, there have been fewer than 9 turns, and no one has won yet,
      // place the appropriate symbol in the square.
      square.set("contents", this.chooseSymbol(board.nextTurn))

      // Board collection stores the nextTurn now, instead of a model
      // collections can't really have .get and .set, so it's just stored as an instance var
      // in initialize. in this case we can't really save it to a database though.
      this.incrementTurn(board);

      // trigger an event if the game has been won or is tied (aka is not pending)
      let win = board.findWinner();
      if (win !== "pending") {
        this.trigger('finishGame', this)
      }
    } else if (board.nextTurn === 10 || board.status != "pending") {
      alert("The game is over. Please begin a new game!")
    } else {
      alert("That spot has already been played. Please pick another.")
    }
  },

  incrementTurn: function(board) {
    if (board.nextTurn <= 9) {
      board.nextTurn += 1;
    }
  },

  chooseSymbol: function(nextTurn) {
    if (nextTurn % 2 === 0) {
      return "O"
    } else {
      return "X"
    }
  }
}); // end of BoardView

export default BoardView;
