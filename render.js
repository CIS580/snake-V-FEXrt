/**
 * @function drawSnake
 * Draws the snake to the backCtx
 */
function drawSnake(){
  backCtx.fillStyle = "black";
  // TODO: Draw the game objects into the backBuffer
  player.parts.forEach(function (item, index){
    backCtx.beginPath();
    backCtx.arc(item.cx, item.cy, item.r, 0, 2 * Math.PI);
    backCtx.stroke();
  });
}
/**
 * @function drawApple
 * Draws the apple to the backCtx
 */
function drawApple(){
  backCtx.beginPath();
  backCtx.arc(apple.cx, apple.cy, apple.r, 0, 2 * Math.PI);
  backCtx.fillStyle = "red";
  backCtx.fill();
}

function renderGamePlay(){
  drawSnake();
  drawApple();
}

function renderInstructions(){
}

function renderGameOver(){
}
