import Backbone from 'backbone';

const Game = Backbone.Model.extend({
  defaults: {
    board: new Board();
  },

  initialize: function(formInput) {
    this.set("playerX", formInput.playerX);
    this.set("playerO", formInput.playerO);
    this.set("nextTurn", 1);
    this.set("status", "pending")
  }


})
