import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Game from '../models/game'

const APIGameView = Backbone.View.extend({
  initialize: function(game){
    this.element = $("#API-ref");
    this.gameTemplate = _.template($('#api-game-template').html())
    this.game = new Game(game);
    //
    // this.render(game);
  },

  render: function(){
    this.element.append(this.gameTemplate({game: this.model}))
  }
});

export default APIGameView;
