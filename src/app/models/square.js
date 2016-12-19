import Backbone from 'backbone';

const Square = Backbone.Model.extend({
  defaults: {
    contents: "",
    xAxis: 1,
    yAxis: 1,
  },

  initialize: function(options) {
    this.set("contents", options.name);
    this.set("xAxis", options.xAxis);
    this.set("yAxis", options.yAxis)
  },

  checkOccupied: function() {
    this.contents != "" ? return true : return false;
  }

  // ,play: function() {
  //   if (!this.checkOccupied) {
  //     if () {
  //       this.set("contents", "X")
  //     } else {
  //       this.set("contents", "O")
  //     }
  //   }
  // }

});

export default Square;
