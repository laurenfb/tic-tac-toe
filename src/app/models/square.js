import Backbone from 'backbone';

const Square = Backbone.Model.extend({
  defaults: {
    contents: "",
    xAxis: 1,
    yAxis: 1,
  },

  initialize: function(options) {
    this.set("contents", options.contents);
    this.set("xAxis", options.xAxis);
    this.set("yAxis", options.yAxis)
  }

});

export default Square;
