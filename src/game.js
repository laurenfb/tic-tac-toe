// game.js
// constructor function
var Game = function() {
  this.board = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ];
  this.playerX = "Frida";
  this.playerO = "Harry";
  this.nextTurn = 1;
};

Game.prototype = {

helloWorld: function() {return "hello world";}

};




export default Game;
// module.exports = Game; // do we need this?
