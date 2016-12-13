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

  }





};




export default Game;
// module.exports = Game; // do we need this?
