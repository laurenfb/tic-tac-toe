import Backbone from 'backbone';
import Square from 'app/models/square'

const Board = Backbone.Collection.extend({
  model: Square,

  initialize: function(){
    this.nextTurn = 1;
    this.status = "pending"
  },

  findWinner: function() {
    // console.log('inside findwinner')
    let possibleWins = [this.vertical(),
                        this.horizontal(),
                        this.diagonal()]
    for (var i = 0; i < possibleWins.length; i++) {
      if (possibleWins[i] !== "pending") {
        // console.log(this.status)
        return possibleWins[i]
      }
    }
    // console.log('they were all pending')
    // if we got here, that means we didn't return any of the above. check if the status is pending, and if it is, then return the winner.
    // let board = this;
    if (this.status === "pending" && this.nextTurn === 10) {
      this.status = "tie!"
      console.log('tie!')
    }
  },

  vertical: function() {
    var squares = this.models
    // looks complicated but it's not. the three vertical wins are 0-3-6, 1-4-7, 2-5-8 (i, i + 3, i + 6)
    // this just checks all three of those to see if they correctly find the winner. it
    for (var i = 0; i < 3; i++) {
      if (squares[i].get("contents") == squares[i + 3].get("contents") && squares[i].get("contents") == squares[i + 6].get("contents") && squares[i].get("contents") != "") {
        this.status = squares[i].get("contents") + " wins!";
      };
    }
    // console.log(this.status)
    return this.status;
  },

  horizontal: function() {
    var squares = this.models
    for (var i = 0; i < 9; (i += 3)) { // note the i + 3 instead of i++
      // same as above --> i, i + 1, i + 2
      if (squares[i].get("contents") == squares[i + 1].get("contents") && squares[i].get("contents") == squares[i + 2].get("contents") && squares[i].get("contents") != "") {
        this.status = squares[i].get("contents") + " wins!";
      }
    }
    // console.log(this.status)
    return this.status;
  },

  diagonal: function() {
    var squares = this.models
    // // top left ---> bottom right
    if (squares[0].get("contents") == squares[4].get("contents") && squares[0].get("contents") == squares[8].get("contents") && squares[0].get("contents") != "") {
      this.status = squares[4].get("contents") + " wins!"
    }
    // top right -----> bottom left
    else if (squares[2].get("contents") == squares[4].get("contents") && squares[2].get("contents") == squares[6].get("contents") && squares[2].get("contents") != "") {
      this.status = squares[4].get("contents") + " wins!"
    }
    // console.log(this.status)
    return this.status;
  }
});

export default Board;
