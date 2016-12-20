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

    console.log("you clicked play!", square.get("xAxis"), square.get("yAxis"))

    if (square.get("contents") === "" && board.nextTurn <= 9) {
      square.set("contents", this.chooseSymbol(board.nextTurn))

      // Board collection stores the nextTurn now, instead of a model
      // collections can't really have .get and .set, so it's just stored as an instance var
      // in initialize. in this case we can't really save it to a database though.
      this.incrementTurn(board);
      this.findWinner();
    } else if (board.nextTurn === 10) {
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
  },

  findWinner: function() {
    console.log('inside findwinner')
    let possibleWins = [this.vertical(),
                        this.horizontal(),
                        this.diagonal()]
    for (var i = 0; i < possibleWins.length; i++) {
      if (possibleWins[i] !== "pending") {
        return possibleWins[i]
      }
    }
    console.log('they were all pending')
    // if we got here, that means we didn't return any of the above. check if the status is pending, and if it is, then return the winner.
    let board = this.collection;
    if (board.status === "pending" && board.nextTurn === 10) {
      board.status = "tie!"
      console.log('tie!')
    }
  },

  vertical: function() {
    var squares = this.collection.models
    // looks complicated but it's not. the three vertical wins are 0-3-6, 1-4-7, 2-5-8 (i, i + 3, i + 6)
    // this just checks all three of those to see if they correctly find the winner. it
    for (var i = 0; i < 3; i++) {
      if (squares[i].get("contents") == squares[i + 3].get("contents") && squares[i].get("contents") == squares[i + 6].get("contents") && squares[i].get("contents") != "") {
        this.collection.status = squares[i].get("contents") + " wins!";
      };
    }
    console.log(this.collection.status)
    return this.collection.status;
  },
  horizontal: function() {
    var squares = this.collection.models
    for (var i = 0; i < 9; (i += 3)) { // note the i + 3 instead of i++
      // same as above --> i, i + 1, i + 2
      if (squares[i].get("contents") == squares[i + 1].get("contents") && squares[i].get("contents") == squares[i + 2].get("contents") && squares[i].get("contents") != "") {
        this.collection.status = squares[i].get("contents") + " wins!";
      }
    }
    console.log(this.collection.status)
    return this.collection.status;
  },
  diagonal: function() {
    var squares = this.collection.models
    // // top left ---> bottom right
    if (squares[0].get("contents") == squares[4].get("contents") && squares[0].get("contents") == squares[8].get("contents") && squares[0].get("contents") != "") {
      this.collection.status = squares[4].get("contents") + " wins!"
    }
    // top right -----> bottom left
    else if (squares[2].get("contents") == squares[4].get("contents") && squares[2].get("contents") == squares[6].get("contents") && squares[2].get("contents") != "") {
      this.collection.status = squares[4].get("contents") + " wins!"
    }
    console.log(this.collection.status)
    return this.collection.status;
  }
}); // end of BoardView

export default BoardView;
