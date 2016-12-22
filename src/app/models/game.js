import Backbone from 'backbone';
import Board from '../collections/board'

const Game = Backbone.Model.extend({
  defaults: {
  },

  // we're connecting to the API here, using Backbone
  url: 'https://lauren-tic-tac-toe.herokuapp.com/api/v1/games',

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
