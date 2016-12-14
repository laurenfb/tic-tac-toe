// game.js
// constructor function
var Game = function() {
  this.board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  this.playerX = "Frida";
  this.playerO = "Harry";
  this.nextTurn = 1;
  this.status = "pending";
};

Game.prototype = {

  helloWorld: function() {
    return "hello world";
  },

  incrementTurn: function() {
    if (this.nextTurn < 9) {
      this.nextTurn += 1;
    }
  },

  checkOccupied: function(row, column) {
    // essentially checks if the spot can exist at all.
    if (row > 2 || column > 2 || row < 0 || column < 0) {
      throw new TypeError();
    }
    if (this.board[row][column] !== "" ) {
      // its occupied,
      return true;
    } else {
      // as in, it isn't occupied.
      return false;
    }

  },

  play: function(row, column) {
    if (this.checkOccupied(row, column) === true) {
      return "Already been useed, please pick another spot.";
    } else {
      if (this.nextTurn % 2 === 0) {
        // if its even play O
        this.board[row][column] = "O";

      } else {
        //else play X
        this.board[row][column] = "X";
      }
      // increment turn everytime
      this.incrementTurn();
    }
    // console.log("board:", this.board);
    return this.board;
  },

// special stupid function to get board at desired result of a winner.
  makeWin: function() {
    game.play(0,0);
    game.play(0,1);
    game.play(1,0);
    game.play(1,1);
    game.play(2,0);
  },


     // check vertical
      // check horizontal
      // check diagonal
  findWinner: function() {
    var row1 = this.board[0][0];
    var row2 = this.board[0][1];
    var row3 = this.board [0][2];

    for(var i = 0; i < row1.length; i++) {

      if(row1[i] == "X" || row[i] == "Y") {
        console.log("we have a winner in row 1!!");
        this.status = "winner";
        return this.board[row][column] + "is the winner!";

      }
    }
    for(var j = 0; j < row2.length; j++) {

    }
  }

};
// Get the current outcome of the game (X win, O win, tie, or undecided)
// row 0
    //      |     |
    // [0,0]|[0,1]||[0,2],
    // ------------------
    // [1,0]|[1,1]|[1,2],
    // -------------------
    // [2,0]|[2,1]|[2,2],
    //      |     |
// must run this var Game = require('game').default;
// then var game = new Game();
// game.play(0,0)
// game.play(0,1)
// game.play(1,0)
// game.play(1,1)
// game.play(2,0)









// testingGame = new Game();
//
// testGame.findWinner(); // should call function.


export default Game;
// module.exports = Game; // do we need this?
