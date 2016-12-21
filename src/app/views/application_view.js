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
    console.log("board", board)
    this.listenTo(board, 'finishGame', this.gameOver)

    board.render();
    return this;
  },

  events: {
    'click .btn-begin': 'startGame'
  },

  startGame: function(event) {
    event.preventDefault();
    let players = this.getNames();
    this.model.set("playerX", players.playerX);
    this.model.set("playerO", players.playerO)
    console.log(this.model)
    $('#form-modal').hide();
  },

  getNames: function(event) {
    let players = {
        playerX: this.$('input[name="playerX"]').val(),
        playerO: this.$('input[name="playerO"]').val()
      };
    return players;
  },

  gameOver: function(event) {
    console.log("the game is over")
  }

})

export default ApplicationView;
