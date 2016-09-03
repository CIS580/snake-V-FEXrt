/**
 * @function spawnApple
 * spawns a new apple if the current apple has been consumed
 */
function spawnApple(){
  if(!apple.isEaten){
    return;
  }

  apple.isEaten = false;
  apple.cx = Math.floor((Math.random() * backBuffer.width));
  apple.cy = Math.floor((Math.random() * backBuffer.height));

}

/**
 * @function moveSnake
 * Moves the snake based on the input direction
 */
function moveSnake(elapsedTime){
  if(!player.isMoving){
    return;
  }

  var change = Math.round(player.speed * elapsedTime / 10) * 10;

  player.parts.reverse().forEach(function(item, index){
    if(index == player.parts.length - 1){
      return;
    }

    var frontItem = player.parts[index + 1];

    var frontIsLeft = frontItem.cx > item.cx;
    var frontIsAbove = frontItem.cy < item.cy

    item.cx = frontItem.cx;
    item.cy = frontItem.cy;
  });

  player.parts.reverse();

  switch(player.direction){
    case Direction.Up:
      player.head.cy -= change;
      break;
    case Direction.Down:
      player.head.cy += change;
      break;
    case Direction.Left:
      player.head.cx -= change;
      break;
    case Direction.Right:
      player.head.cx += change;
      break;
  }
}

/**
 * @function addSnakePart
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
 * @function isOutOfBounds
 * Determines if the snake is out-of-bounds
 * @returns Boolean indicating out-of-bounds status
 */
function isOutOfBounds(){
  if(player.head.cx - player.head.r < 0) return true;
  if(player.head.cx + player.head.r > backBuffer.width) return true;
  if(player.head.cy - player.head.r < 0) return true;
  if(player.head.cy + player.head.r > backBuffer.height) return true;

  return false;
}

/**
 * @function hasAteApple
 * Determines if the snake has ate the apple
 * @returns Boolean indicating if apples has been ate
 */
function hasAteApple(){
  return hasCollidedWith(apple);
}

/**
 * @function eatApple
 * Marks apple as eaten
 */
function eatApple(){
  apple.isEaten = true;
}

/**
 * @function hasAteTail
 * Determine if snake has collided with its tail
 * @returns Boolean indicating if tail collision
 */
function hasAteTail(){
    for(i = 1; i < player.parts.length; i++){
        if(hasCollidedWith(player.parts[i])){
          return true;
        }
    }
    return false;
}

/**
 * @function hasCollidedWith
 * Determine if item has collided with snake head
 * @param{item} collision item
 * @returns Boolean indicating if collision
 */
function hasCollidedWith(item){
  var dist2 = Math.pow(player.head.cx - item.cx, 2) + Math.pow(player.head.cy - item.cy, 2);
  if(dist2 < Math.pow(player.head.r + item.r, 2)) return true;
  return false;
}

function endGame(){
  gameState = GameState.GameOver;
}
