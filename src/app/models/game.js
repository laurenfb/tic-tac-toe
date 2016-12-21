import Backbone from 'backbone';
import Board from '../collections/board'

const Game = Backbone.Model.extend({
  defaults: {
  },

  initialize: function(options) {
    this.set("playerX", "Player X");
    this.set("playerO", "Player O");

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
