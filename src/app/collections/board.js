import Backbone from 'backbone';
import Square from 'app/models/square'

const Board = Backbone.Collection.extend({
  model: Square,

  initialize: function(){
    this.nextTurn = 1;
    this.status = "pending"
  }
});

export default Board;
