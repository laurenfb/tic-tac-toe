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
  this.scorePlayerX = 0;
  this.scorePlayerO = 0;
  // pointValues assigns a magic square point value to each spot on this.board. ie, this.board[0][0] has the point value of this.pointValues[0][0]
  this.pointValues = [[8,1,6],
                    [3,5,7],
                    [4,9,2]]
};

Game.prototype = {

  helloWorld: function() {
    return "hello world";
  },

  incrementTurn: function() {
    if (this.nextTurn <= 9) {
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

  findWinner: function() {
    // check vertical
    if (this.vertical() != "pending") {
      return this.vertical();
    }
    // check horizontal
    else if (this.horizontal() != "pending") {
      return this.horizontal();
    }
    // check diagonal
  }





};




export default Game;
// module.exports = Game; // do we need this?
