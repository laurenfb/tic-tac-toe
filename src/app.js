import ApplicationView from 'app/views/application_view'
import $ from 'jquery';
import Game from 'app/models/game'

let game = new Game({
  squares: [
    {contents: "", xAxis: 0, yAxis: 0},
    {contents: "X", xAxis: 0, yAxis: 1},
    {contents: "", xAxis: 0, yAxis: 2},
    {contents: "", xAxis: 1, yAxis: 0},
    {contents: "", xAxis: 1, yAxis: 1},
    {contents: "", xAxis: 1, yAxis: 2},
    {contents: "", xAxis: 2, yAxis: 0},
    {contents: "", xAxis: 2, yAxis: 1},
    {contents: "", xAxis: 2, yAxis: 2}
  ]
})

$(document).ready(function() {
  var application = new ApplicationView({
    el: $('body'),
    model: game
  })

  application.render();
});
