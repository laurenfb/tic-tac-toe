import $ from 'jquery';
import Backbone from 'backbone';
import SquareView from 'app/views/square_view'

const BoardView = Backbone.View.extend({
  initialize: function(){
    // this.template = _.template($('#board-template'))
  },

  render: function() {
    // console.log("rendering boardView")
    const newSquareList = this.$el;
    // console.log("this is the new square list", newSquareList)
    newSquareList.empty();

    const self = this;

    this.collection.forEach(function(square) {
      const newSquare = new SquareView({
        model: square
      });
      //  self.listenTo(card, 'select', self.showCard);
      newSquareList.append(newSquare.render().$el);
    }, this);
    return this;
  },

  events: {
    'click .square': 'play'
  },

  play: function() {
    console.log("you clicked play!")
  }
}); // end of BoardView

export default BoardView;
