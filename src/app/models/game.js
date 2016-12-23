import Backbone from 'backbone';
import Board from '../collections/board'

const Game = Backbone.Model.extend({
  // we're connecting to the API here, using Backbone
  url: 'https://lauren-tic-tac-toe.herokuapp.com/api/v1/games',

  parse: function(gameData) {
    let parsedData = [];

    for (var i = 0; i < gameData.length; i++) {
      // console.log("we are calling parse")
      parsedData.push({
        outcome: gameData[i].outcome,
        playerX: gameData[i].players[0],
        playerO: gameData[i].players[1]

      })
      // console.log(gameData[i].players)
    }
    return parsedData
  },

  toJSON: function() {
    // write code here to save the game to the database
    let outcome = (this.board.status === "tie!"? "draw" : this.board.status[0]);
    let x = this.get("playerX");
    let o = this.get("playerO");
    let boardForAPI = [];
    for (var i = 0; i < this.board.models.length; i++) {
      if (this.board.models[i].get("contents") == "") {
        boardForAPI.push(" ")
      } else {
        boardForAPI.push(this.board.models[i].get("contents"))
      }
    }
    let gameToSave = {
      "board": boardForAPI,
      "players": [x, o],
      "outcome": outcome
    };
    // console.log(gameToSave)
    return gameToSave;
  },

  initialize: function(options) {
    this.set("playerX", "player X");
    this.set("playerO", "player O");

    this.board = new Board(options.squares);
  },

  resetBoard: function() {
    let squares = [
      {contents: "", xAxis: 0, yAxis: 0},
      {contents: "", xAxis: 0, yAxis: 1},
      {contents: "", xAxis: 0, yAxis: 2},
      {contents: "", xAxis: 1, yAxis: 0},
      {contents: "", xAxis: 1, yAxis: 1},
      {contents: "", xAxis: 1, yAxis: 2},
      {contents: "", xAxis: 2, yAxis: 0},
      {contents: "", xAxis: 2, yAxis: 1},
      {contents: "", xAxis: 2, yAxis: 2}
    ];
    this.board = new Board(squares);
  }


})

export default Game;
