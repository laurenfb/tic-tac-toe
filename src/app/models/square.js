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
  },

  checkOccupied: function() {
    var occupied;
    (this.contents != "") ? (occupied = true) : (occupied = false);
    return occupied;
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
