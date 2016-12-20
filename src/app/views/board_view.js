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
    let square = clickedSquare.model
    console.log("you clicked play!", square.get("xAxis"), square.get("yAxis"))
    if (square.get("contents") === "") {
      var board = this.collection;
      // Board collection stores the nextTurn now, instead of a model
      // collections can't really have .get and .set, so it's just stored as an instance var
      // in initialize. in this case we can't really save it to a database though.
      console.log("before", board.nextTurn)
      this.incrementTurn(board);
      console.log("after", board.nextTurn)
    } else {
      alert("That spot has already been played. Please pick another.")
    }
  },

  incrementTurn: function(board) {
    if (board.nextTurn <= 9) {
      board.nextTurn += 1;
    }
  }
}); // end of BoardView

export default BoardView;
