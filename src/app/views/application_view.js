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
    alert(this)
    alert('clicked it!')
  }
})


export default ApplicationView;
