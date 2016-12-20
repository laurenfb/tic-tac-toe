import Backbone from 'backbone';
import Board from '../collections/board'

const Game = Backbone.Model.extend({
  defaults: {
  },

  initialize: function(options) {
    this.set("playerX", "Player X");
    this.set("playerO", "Player O");

    this.board = new Board(options.squares);
  }


})

export default Game;
