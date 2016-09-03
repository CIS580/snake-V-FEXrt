/* Global variables */
var frontBuffer = document.getElementById('snake');
var frontCtx = frontBuffer.getContext('2d');
var backBuffer = document.createElement('canvas');
backBuffer.width = frontBuffer.width;
backBuffer.height = frontBuffer.height;
var backCtx = backBuffer.getContext('2d');
var oldTime = performance.now();

var Direction = {
  Up: 0,
  Down: 1, 
  Left: 2,
  Right: 3
}

var player = {
  direction: Direction.Right,
  isMoving: false,
  head: {
    cx: 30,
    cy: 30,
    r: 5
  },
  parts: [] 
}

player.parts.push(player.head);

window.onkeydown = function(event) {
  event.preventDefault();
  player.isMoving = true;
  switch(event.keyCode) {
      case 38:
      case 87:
        player.direction = Direction.Up;
        break;
  
      case 37:
      case 65:
        player.direction = Direction.Left;      
        break;
  
      case 39:
      case 68:
        player.direction = Direction.Right;
        break;
  
      case 40:
      case 83:
        player.direction = Direction.Down;
        break; 
    }

  addSnakePart();

  return false;
}


/**
 * @function loop
 * The main game loop.
 * @param{time} the current time as a DOMHighResTimeStamp
 */
function loop(newTime) {
  var elapsedTime = newTime - oldTime;
  oldTime = newTime;

  update(elapsedTime);
  render(elapsedTime);

  // Flip the back buffer
  frontCtx.clearRect(0, 0, frontBuffer.width, frontBuffer.height);
  frontCtx.drawImage(backBuffer, 0, 0);

  // Run the next loop
  window.requestAnimationFrame(loop);
}

/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {elapsedTime} A DOMHighResTimeStamp indicting
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {

  // TODO: Spawn an apple periodically
  // TODO: Grow the snake periodically
  // TODO: Move the snake
  moveSnake(elapsedTime);
  // TODO: Determine if the snake has moved out-of-bounds (offscreen)
  // TODO: Determine if the snake has eaten an apple
  // TODO: Determine if the snake has eaten its tail
  // TODO: [Extra Credit] Determine if the snake has run into an obstacle

}

/**
 * @function moveSnake
 * Moves the snake based on the input direction
 */
function moveSnake(elapsedTime){
  if(!player.isMoving){
    return;
  }

  player.parts.reverse().forEach(function(item, index){
    if(index == player.parts.length - 1){
      return;
    }

    item.cx = player.parts[index + 1].cx;
    item.cy = player.parts[index + 1].cy;
  });

  switch(player.direction){
    case Direction.Up:
      player.head.cy -= 10; 
      break;
    case Direction.Down:
      player.head.cy += 10;
      break;
    case Direction.Left:
      player.head.cx -= 10; 
      break;
    case Direction.Right:
      player.head.cx += 10; 
      break;
  }
}

/**
 * @ addSnakePart
 * Adds another section to the front of the snake.
 */
function addSnakePart(){

  var x = player.head.cx;
  var y = player.head.cy;

  switch(player.direction){
  
    case Direction.Up:
      y = y - 10;
      break;
    case Direction.Down:
      y = y + 10;
      break;
    case Direction.Left:
      x = x - 10;
      break;
    case Direction.Right:
      x = x + 10;
      break;
  }

  player.head = {
    cx: x,
    cy: y,
    r: 5
  };
  player.parts.unshift(player.head);
}
/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {elapsedTime} A DOMHighResTimeStamp indicting
  * the number of milliseconds passed since the last frame.
  */
function render(elapsedTime) {
  backCtx.clearRect(0, 0, backBuffer.width, backBuffer.height);

  // TODO: Draw the game objects into the backBuffer 
  player.parts.reverse().forEach(function (item, index){
    backCtx.beginPath();
    backCtx.arc(item.cx, item.cy, item.r, 0, 2 * Math.PI);
    backCtx.stroke();
  });
  
}

/* Launch the game */
window.requestAnimationFrame(loop);
