/**
 * @function spawnApple
 * spawns a new apple if the current apple has been consumed
 */
function spawnApple(){
  if(!apple.isEaten){
    return;
  }

  apple.isEaten = false;
  apple.cx = Math.floor((Math.random() * (backBuffer.width - 40))) + 20;
  apple.cy = Math.floor((Math.random() * (backBuffer.height - 40))) + 20;

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

  var last = player.parts[player.parts.length - 1];
  var x = last.cx;
  var y = last.cy;

  if(player.parts.length == 1){
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
  }

  var part = {
    cx: x,
    cy: y,
    r: 5
  };

  player.parts.push(part);
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
  return hasCollidedWithHead(apple);
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
        if(hasCollidedWithHead(player.parts[i])){
          return true;
        }
    }
    return false;
}

/**
 * @function hasCollidedWithHead
 * Determine if item has collided with snake head
 * @param{item} collision item
 * @returns Boolean indicating if collision
 */
function hasCollidedWithHead(item){
  return haveItemsCollided(item, player.head);
}

/**
 * @function haveItemsCollided
 * Determine if the items have collided
 * @param{item1} collision item
 * @param{item2} other collision item
 * @returns Boolean indicating if collision
 */
function haveItemsCollided(item1, item2){
  var dist2 = Math.pow(item2.cx - item1.cx, 2) + Math.pow(item2.cy - item1.cy, 2);
  if(dist2 < Math.pow(item2.r + item1.r, 2)) return true;
  return false;
}

/**
 * @function endGame
 * Change game state to game over
 */
function endGame(){
  gameState = GameState.GameOver;
}

function resetGameDefaults(){
  player.isMoving = false;
  player.score = 0;
  player.head = {
      cx: 30,
      cy: 30,
      r: 5
    };
  player.parts = [];

  player.parts.push(player.head);
  apple.isEaten = true;
}

/**
 * @function increasePlayerScore
 * Increase the player score by amount
 * @param{amount} amount to increase score by
 */
function increasePlayerScore(amount){
  player.score += amount;
}
