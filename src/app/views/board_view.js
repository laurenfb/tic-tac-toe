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

    this.collection.forEach(function(square) {
      const newSquare = new SquareView({
        model: square
      });
      // listen to the custom event in Square View that is called "squareClicked", which will tell us where to play.
      this.listenTo(newSquare, 'squareClicked', this.play);
      newSquareList.append(newSquare.render().$el);
    }, this);
    return this;
  },

  play: function(clickedSquare) {
    console.log("you clicked play!", clickedSquare.model.get("xAxis"), clickedSquare.model.get("yAxis"))
  }
}); // end of BoardView

export default BoardView;
