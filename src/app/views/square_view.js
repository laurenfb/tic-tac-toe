import Backbone from 'backbone';
import _ from 'underscore';

const SquareView = Backbone.View.extend({
  tagName: 'div',
  className: 'square',

  initialize: function() {
    this.template = _.template(Backbone.$('#square-template').html());
    this.listenTo(this.model, "change", this.render)
  },

  events: {
    'click': 'selectSquare'
  },

  render: function() {
    // take the current element and give it the following html:
    // use the template, and give it the attributes of the model.
    this.$el.html(this.template(this.model.attributes));
   return this;
  },

  selectSquare: function() {
    // console.log('selectSquare is firing')
    this.trigger('squareClicked', this)

    // jeannie says to do this and rolodex told her to do this
    return false
  }



}); // end of SquareView

export default SquareView;
