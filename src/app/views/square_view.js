import Backbone from 'backbone';
import _ from 'underscore';

const SquareView = Backbone.View.extend({
  tagName: 'div',
  className: 'square',

  initialize: function() {
    this.template = _.template(Backbone.$('#square-template').html());
  },

  render: function() {
    // take the current element and give it the following html:
    // use the template, and give it the attributes of the model.
    this.$el.html(this.template(this.model.attributes));
   return this;
  }

}); // end of SquareView

export default SquareView;
