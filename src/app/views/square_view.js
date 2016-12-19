import Backbone from 'backbone';
import _ from 'underscore';

const SquareView = Backbone.View.extend({
  tagName: 'div',
  className: 'square',

  initialize: function() {
    this.template = _.template(Backbone.$('#square-template').html());
  },

  render: function() {
    console.log('rendering squareview')
    console.log('this.model.attributes', this.model.attributes)

    this.$el.html(this.template(this.model.attributes));
    console.log('this.$el', this.$el)
   return this;
 }
}); // end of SquareView

export default SquareView;
