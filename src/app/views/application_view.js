import Backbone from 'backbone';
import $ from 'jquery';
import Game from '../models/game';
import BoardView from '../views/board_view';
import _ from 'underscore';
import APIGameView from '../views/api_game_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.winnerModalTemplate = _.template($('#winner-modal-template').html())
    this.formModalTemplate = _.template($('#form-modal-template').html())
    this.turnModalTemplate = _.template($('#turn-modal-template').html())
  },

  render: function(){
    // console.log('rendering ApplicationView');
    const board = new BoardView({
      collection: this.model.board,
      el: this.$("#board-holder")
    })
    $("#modal").html(this.formModalTemplate())
    this.listenTo(board, 'finishGame', this.gameOver)
    this.listenTo(board, 'switchPlayer', this.nameInModal)

    board.render();
    return this;
  },

  events: {
    'click .btn-begin': 'startGame',
    'click .btn-restart': 'clearOldGame',
    'click .btn-cancel': 'clearForm',
    'click .btn-fetch': 'getAPIHistory'
  },

  startGame: function(event) {
    event.preventDefault();
    let players = this.getNames();
    // players have default names if names are not entered.
    if (players.playerX != "") {
      this.model.set("playerX", players.playerX);
    }
    if (players.playerO != "") {
      this.model.set("playerO", players.playerO)
    }
    // console.log(this.model)
    // $('#modal').empty();
    this.nameInModal();
  },

  getNames: function(event) {
    let players = {
        playerX: this.$('input[name="playerX"]').val(),
        playerO: this.$('input[name="playerO"]').val()
      };
    return players;
  },

  gameOver: function(event) {
    // call saveGameToAPI() here to save the game to API.
    // make sure to account for errors (did not in trek and got dinged for it)
    this.saveGameToAPI(this.model);
    let winner;
    if (this.model.board.status === 'tie!') {
      winner = "it's a tie!";
    } else {
      winner = this.model.get("player" + this.model.board.status[0]) + " wins!"
    }
    $('#modal').html(this.winnerModalTemplate({winStatus: winner}));
  },

  clearOldGame: function(event) {
    // console.log('yo you clicked new game')
    this.model.resetBoard();
    // re-render the board
    this.render();
  },

  nameInModal: function(event) {
    let nextPlayer;
    if (this.model.board.nextTurn % 2 === 0) {
      nextPlayer = this.model.get("playerO")
    } else {
      nextPlayer = this.model.get("playerX")
    }
    // grab the next player and put them into the turn modal
    $('#modal').html(this.turnModalTemplate({turn: nextPlayer + "'s turn!"}))

  },

  clearForm: function(event) {
    $('input[name="playerX"]').val("");
    $('input[name="playerO"]').val("")
  },

  saveGameToAPI: function(game) {
    game.save();
  },

  getAPIHistory: function() {
    this.model.fetch().done( function(list){
      for (var i = 0; i < list.length; i++) {
        let newAPIGameView = new APIGameView({model: list[i]});
        newAPIGameView.render();
      }

    });

  }

})

export default ApplicationView;
