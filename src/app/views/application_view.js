import Backbone from 'backbone';
import $ from 'jquery';
import Game from '../models/game';
import BoardView from '../views/board_view'

const ApplicationView = Backbone.View.extend({
  initialize: function() {
  },

  render: function(){
    // console.log('rendering ApplicationView');
    const board = new BoardView({
      collection: this.model.board,
      el: this.$("#board-holder")
    })
    board.render();
    return this;
  },

  events: {
    'click .btn-begin': 'startGame'
  },

  startGame: function(event) {
    event.preventDefault();
    let players = this.getNames();
    console.log(players)
    console.log('clicked it!')
    $('#form-modal').hide();
    console.log('got there')
  },

  getNames: function(event) {
    let players = {
        playerX: this.$('input[name="playerX"]').val(),
        playerO: this.$('input[name="playerX"]').val()
      };
    return players;
  }
})

export default ApplicationView;
