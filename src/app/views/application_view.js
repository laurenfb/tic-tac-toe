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

  }
})


export default ApplicationView;
