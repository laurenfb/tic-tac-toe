import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const APIGameView = Backbone.View.extend({
  initialize: function(game){
    this.element = $("#API-ref");
    this.gameTemplate = _.template($('#api-game-template').html())

    this.render(game);
  },

  render: function(game){
    this.element.append(this.gameTemplate("hi"))
  }
});

export default APIGameView;
