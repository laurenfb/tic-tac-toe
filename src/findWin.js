var hoBoard = [["X", "O", "O"],
                ["X", "X", "O"],
                ["X", "X", "X"]];

var vertBoard = [["O", "O", "X"],
                  ["X", "O", "O"],
                  ["X", "O", "X"]];

var tieBoard = [["O", "X", "O"],
                ["X", "O", "O"],
                ["X", "O", "X"]];

var diagBoard = [["O", "X", "O"],
                ["X", "O", "X"],
                ["X", "O", "O"]];
var pointValues = [
  [8,1,6],
  [3,5,7],
  [4,9,2]
];

var scoreX = 0;
var scoreO = 0;

var horizontal = function() {
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      if (hoBoard[row][col] == "X") {
        scoreX += pointValues[row][col];
        console.log("element is X");
      } else if (hoBoard[row][col] == "O") {
        scoreO += pointValues[row][col];
        console.log("element is O");
      }
    }
    if (scoreX == 15) {
      return("X wins!" + scoreX);
    } else if (scoreO == 15) {
      return("O wins!" +scoreO);
    } else {
      scoreX = 0;
      scoreO = 0;
    }
  }
  console.log("X score ", scoreX);
  console.log("O score ", scoreO);
};

var vertical = function() {
  console.log(vertBoard);
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      if (vertBoard[col][row] == "X") {
        scoreX += pointValues[col][row];
        console.log("element is X", scoreX);
      } else if (vertBoard[col][row] == "O"); {
        scoreO += pointValues[col][row];
        console.log("element is O", scoreO);
      }
    }
    winner = checkScore(scoreX,scoreO);
    if (winner) {
      return winner;
    } else {
      scoreX = 0;
      scoreO = 0;
    }
  }
};

var checkScore = function(scoreX, scoreO) {
  if (scoreX == 15) {
    return("X wins!", scoreX);
  } else if (scoreO == 15) {
    return("O wins!", scoreO);
  }
};

var diagonal = function() {

};
