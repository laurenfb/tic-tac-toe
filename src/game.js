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
                    [4,9,2]];
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
    else if (this.diagonal() != "pending") {
      return this.diagonal();
    }
  },

  vertical: function () {
    var scoreX = 0;
    var scoreO = 0;
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if (this.board[col][row] == "X") {
          scoreX += this.pointValues[col][row];
          // console.log("element is X", scoreX)
        } else if (this.board[col][row] == "O") {
          scoreO += this.pointValues[col][row];
          // console.log("element is O", scoreO)
        }
      }
      var winner = this.checkScore(scoreX,scoreO);
      // console.log(this.checkScore(scoreX, scoreO))
      if (winner) {
        this.status = winner;
      } else {
        //reset scores
        scoreX = 0;
        scoreO = 0;
      }
    }
    return this.status;
  },

  horizontal: function () {
    var scoreX = 0;
    var scoreO = 0;
    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        if (hoBoard[row][col] == "X") {
          scoreX += pointValues[row][col];
          console.log("element is X");
        } else if (hoBoard[row][col] == "O") {
          scoreO += pointValues[row][col];
          console.log("element is O");
        }
      }
    }
    var winner = this.checkScore(scoreX,scoreO);
    // console.log(this.checkScore(scoreX, scoreO))
    if (winner) {
      this.status = winner;
    } else {
      //reset scores
      scoreX = 0;
      scoreO = 0;
    }
  return this.status;
  },

  checkScore: function(scoreX, scoreO) {
    if (scoreX == 15) {
      return("X wins!");
    } else if (scoreO == 15) {
      return("O wins!");
    }
  },


  diagonal: function () {
    // init starting value of count
    var scoreX = 0;
    var scoreO = 0;
    // from function(play)

    for (var row = 0; row < 3; row++) {

      for (var col = 2; col < ; col--) {

        if (this.board[row][col] == "X") {
          scoreX += this.pointValues[row][col];
          // console.log("element is X", scoreX)
        } else if (this.board[row][col] == "O") {
          scoreO += this.pointValues[row][col];
          // console.log("element is O", scoreO)
        }
      }
      var winner = this.checkScore(scoreX,scoreO);
      // console.log(this.checkScore(scoreX, scoreO))
      if (winner) {
        this.status = winner;
      } else {
        //reset scores
        scoreX = 0;
        scoreO = 0;
      }
    }
    return this.status;
  },
};





// Get the current outcome of the game (X win, O win, tie, or undecided)
// row 0
    //      |     |
    // [0,0]|[0,1]||[0,2],
    // -----+-----+------
    // [1,0]|[1,1]|[1,2],
    // -----+-----+-------
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
