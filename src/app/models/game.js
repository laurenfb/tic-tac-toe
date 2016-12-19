import Backbone from 'backbone';
import Board from '../collections/board'

const Game = Backbone.Model.extend({
  defaults: {
  },

  initialize: function(options) {
    // this.set("playerX", formInput.playerX);
    // this.set("playerO", formInput.playerO);
    this.set("nextTurn", 1);
    this.set("status", "pending");

    this.board = new Board(options.squares);
  }


})

export default Game;
