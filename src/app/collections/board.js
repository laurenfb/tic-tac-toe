import Backbone from 'backbone';
import Square from 'app/models/square'

const Board = Backbone.Collection.extend({
  model: Square
});

export default Board;
