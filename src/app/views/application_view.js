import Backbone from 'backbone';
import $ from 'jquery';
import Game from '../models/game';
import BoardView from '../views/board_view';
import _ from 'underscore';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.winnerModalTemplate = _.template($('#winner-modal-template').html())
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
    'click .btn-begin': 'startGame',
    'click .btn-restart': 'clearOldGame'
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
    // CURRENTLY ONLY WORKS FOR X OR O WINS
    var winner = this.model.get("player" + this.model.board.status[0])
    console.log("the game is over")
    console.log(winner)
    $('#winner-modal').html(this.winnerModalTemplate({winStatus: winner}));
    $('#winner-modal').show();
  },

  clearOldGame: function(event) {
    this.model.clear();
  }



})

export default ApplicationView;
