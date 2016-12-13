// game.spec.js
import Game from "game";

// Every function in your application should have at least two tests
// All tests should pass

// the global Jasmine function describe
// 2 params: string, function. string = name or title for spec suite. usually what is being tested.

describe('Game', function() {
  var testGame; // stand for created test object
// create this thing each time.
  beforeEach(function(){
    testGame = new Game();
  });

/// testing instance variables
  describe('instance variables', function() {

    it('Should create a new game object', function() {
    expect(testGame instanceof Game).toEqual(true);
    });

    it('board should be created.', function() {
    expect(testGame.board).toEqual([[undefined, undefined, undefined],[undefined, undefined, undefined],[undefined, undefined, undefined]]);
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

    });


});// end of Game describe
