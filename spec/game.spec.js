// game.spec.js
import Game from "game";

// Every function in your application should have at least two tests
// All tests should pass

// the global Jasmine function describe
// 2 params: string, function. string = name or title for spec suite. usually what is being tested.

describe('Game', function() {
  var testGame; // stand for created test object
  // this creates a new Game object before each 'it' test.
  beforeEach(function(){
    testGame = new Game();
  });

  /// testing instance variables
  describe('instance variables', function() {

    it('Should create a new game object', function() {
      expect(testGame instanceof Game).toEqual(true);
    });

    it('board should be created.', function() {
      expect(testGame.board).toEqual([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]]);
      });

      it('The board length of each array row should not exceed 3.', function() {
        for(var i = 0; i < testGame.board.length; i++) {
          expect(testGame.board[i].length).toBe(3);
        }
      });

      it('Player 1 and 2 should have names, Frida and Harry (respectively)', function() {
        expect(testGame.playerX).toEqual("Frida");
        expect(testGame.playerO).toEqual("Harry");
      });

      // testing to make sure nextTurn counter is is one.
      it('test if nextTurn is working apropriatlely', function() {
        expect(testGame.nextTurn).toEqual(1);
      });

      it('should be initialized with pending status', function() {
        expect(testGame.status).toEqual("pending");
      });

      it('should be initialized with 0 score for both players', function() {
        expect(testGame.scorePlayerO).toEqual(0);
        expect(testGame.scorePlayerX).toEqual(0);
      });

      it('should be initialized with pointValues for magic square', function() {
        expect(testGame.pointValues).toEqual([
          [8,1,6],
          [3,5,7],
          [4,9,2]]);
      });

    });

  ///  testing helloworld function
  describe('test helloworld, just for funsies', function() {
    //
    it('should display hello world', function() {
      expect(testGame.helloWorld()).toEqual("hello world");
    });

    it('should return an instance of a string', function () {
      // console.log("this is the type of helloworld", typeof(testGame.helloWorld()));
      expect(typeof(testGame.helloWorld())).toEqual("string");
    });
  }); // end of helloworld describe

  describe('incrementTurn', function() {
    it('should increment nextTurn by 1 when it is called', function() {
      expect(testGame.nextTurn).toBe(1);
      testGame.incrementTurn();
      expect(testGame.nextTurn).toBe(2);
    });

    it('should be allowed to be up to 10', function() {
      expect(testGame.nextTurn).toBe(1);
      for (var i = 0; i < 9; i++) {
        // expect(testGame.nextTurn).toBe(i + 1)
        testGame.incrementTurn();
        expect(testGame.nextTurn).toBe(i + 2); // i starts at zero, and we're testing that nextTurn, which starts at 1, has been incremented to 2 (etc)
      }
    });

    it('should never be greater than 10', function() {
      expect(testGame.nextTurn).toBe(1);
      for (var i = 0; i < 15; i++) {
        testGame.incrementTurn();
      }
      expect(testGame.nextTurn).toBe(10);
    });
  });
  // testing isOccupied()
  describe('checkOccupied', function() {

    it('Function can detect if spot is not currently occupied. (as in false)', function() {
      expect(testGame.checkOccupied(0,0)).toEqual(false);
    });

    it('Function can detect if spot is currently occupied. (as it true)', function() {
      testGame.board[0][0] = "X";
      expect(testGame.checkOccupied(0,0)).toEqual(true);
    });
    // error is now created.
    it('Function will respond with error message when user attempts to make move outside of board. As in [3][3] (does not exist', function() {
    expect(
      function(){testGame.checkOccupied(3,3);}
      ).toThrow(TypeError());

    });
  });

  describe('play', function() {

    it('When a player tries to play a spot that is not free, should get message to try again.', function() {
      testGame.board[0][0] = "O";
      expect(testGame.play(0,0)).toEqual("Already been useed, please pick another spot.");
    });

    it('When a player plays a non-occupied spot. It will then hold that players symbol.', function() {

      testGame.play(0,0);
      expect(testGame.board[0][0]).toEqual("X");

      testGame.play(0,1);
      expect(testGame.board[0][1]).toEqual("O");

    });

    it('Ensure nextTurn is properly incrementing when we call play it should incrementTurn()', function() {
      testGame.play(0,0);
      expect(testGame.nextTurn).toEqual(2);
      testGame.play(0,1);
      expect(testGame.nextTurn).toEqual(3);

    });
    it('Test that board reflects correct arrangment when X and O play spots [0][0], [0][1] respectively', function() {

      testGame.play(0,0);
      testGame.play(0,1);
      expect(testGame.board).toEqual(
      [
        [ 'X', 'O', '' ],
        [ '', '', '' ],
        [ '', '', '' ]
      ]
      );
    });
  }); // end of play testing

  describe('findWinner', function() {
///////////// X testing winner
    it('should find that X is winner if X has 3 in a row vertically', function () {
      // this is X,X,X on the vertical on the left.
      // console.log("this is the board before we change it", testGame.board)
      testGame.board[0][0] = "X";
      testGame.board[1][0] = "X";
      testGame.board[2][0] = "X";
      // console.log("this is the board", testGame.board)
      expect(testGame.findWinner()).toEqual("X wins!");
    });
    it('should find that X is winner if X has 3 in a row horizontally', function() {
      // this is the X, X, X horizontal on the top row
      // console.log("this is the board before we change it", testGame.board)
      testGame.board[0][0] = "X";
      testGame.board[0][1] = "X";
      testGame.board[0][2] = "X";
      // console.log("this is the board", testGame.board)
      expect(testGame.findWinner()).toEqual("X wins!");
    });
    it('should find that X is winner if X has 3 in a row diagonally', function () {
      // this is X, X, X diagonal
      testGame.board[0][0] = "X";
      testGame.board[1][1] = "X";
      testGame.board[2][2] = "X";
      expect(testGame.findWinner()).toEqual("X wins!");
    });
/////////////////// O testing winner
    it('should find that O is winner if O has 3 in a row vertically', function () {
      // this is O,O,O on the vertical in the middle
      // console.log("this is the board before we change it", testGame.board)
      testGame.board[0][1] = "O";
      testGame.board[1][1] = "O";
      testGame.board[2][1] = "O";
      // console.log("this is the board", testGame.board)
      expect(testGame.findWinner()).toEqual("O wins!");
    });
    it('should find that O is winner if O has 3 in a row horizontally', function() {
      //this is O horizontally on the bottom
      // console.log("this is the board before we change it", testGame.board)
      testGame.board[2][0] = "O";
      testGame.board[2][1] = "O";
      testGame.board[2][2] = "O";
      // console.log("this is the board", testGame.board)
      expect(testGame.findWinner()).toEqual("O wins!");
    });
    it('should find that O is winner if O has 3 in a row diagonally', function () {
      // this is O, O, O diagonally from right to left
      testGame.board[0][2] = "O";
      testGame.board[1][1] = "O";
      testGame.board[2][0] = "O";
      expect(testGame.findWinner()).toEqual("O wins!");
    });
////////////// game is over, but there's no winner
    it('should be able to tell when the game is over but there\'s a tie', function () {
      testGame.board = [["O", "X", "X"],
                        ["X", "O", "O"],
                        ["X", "O", "X"]];
      expect(testGame.findWinner()).toEqual("tie");
      // this test won't pass if we don't check for the winner after each turn is played.
      expect(testGame.status).toEqual("tie");
    });
//////////// game is not yet over, and no one is a winner
    it('should be able to state status is still pending when there is no winner or tie yet', function () {
      testGame.board = [["O", "X", "X"],
                        ["", "", ""],
                        ["", "O", "X"]];
      expect(testGame.findWinner()).toEqual("pending");
      // this test won't pass if we don't check for the winner after each turn is played.
      expect(testGame.status).toEqual("pending");
    });

  }); // end of findwinner

















});// end of Game describe
