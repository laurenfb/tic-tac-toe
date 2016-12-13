
Hwk1: // write constructor function. board, playerX, playerO, next turn.

### Initial Building on game constructor
 When attempting to start writing my game constructor function. I wasn't sure where stuff should go.

 - I knew  functions should be verbs:
```JavaScript
Game.prototype = {
  helloWorld: function()
  {return "hello world"},
}
/// helloWord could be like previous examples seen in scrabble.js. Like: score, highestScoreFrom,
```
 - I knew from our test that we built earlier today. What I ultimately wanted at each stage/step.  I know each new game object created...

  - it should be created with a board object? entity? (
  9 spots in array, or array of arrays (3x3))
  - playerX, playerO,
```javascript
 var game = new Game();
```
what else?

#### Resources for learning how to properly write Js constructor (w/ prototyping)

1. > "style of object-oriented programming that uses functions as constructors for classes. Although Javascript has a keyword class, it has no class statement. This distinction is important when comparing JavaScript to other OOP languages."
"Although Javascript has a keyword class, it has no class statement. This distinction is important" [found here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)

2. > It sets up the object to delegate to Vehicle.prototype.  function is just a special kind of object, and like any object a function can have properties. Functions automatically get a property called prototype, which is just an empty object. This object gets some special treatment."
```JavaScript
Vehicle.prototype.wheelCount = 4;
var vehicle = new Vehicle;
vehicle.wheelCount;   // 4
```
The Vehicle instance picked up the wheelCount from Vehicle‘s prototype
Now this “inheritance” is more than simply copying properties to the new objects.
```JavaScript
// Class definition / constructor
// Class definition / constructor
var Vehicle = function Vehicle(color) {
  // Initialization
  this.color = color;
}

// Instance methods
Vehicle.prototype = {
  go: function go() {
    return "Vroom!";
  }
}
```

[https://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword] (https://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword)

3.
