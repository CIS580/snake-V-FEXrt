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

  backCtx.fillStyle = "green";
  backCtx.beginPath();
  backCtx.moveTo(apple.cx, apple.cy - apple.r);
  backCtx.lineTo(apple.cx + 7, apple.cy - apple.r - 3);
  backCtx.lineTo(apple.cx + 7, apple.cy - apple.r);
  backCtx.fill();

}

/**
 * @function drawScore
 * Draws the player score to the screen
 */
function drawScore(){
  backCtx.font = "12px Helvetica";
  backCtx.fillStyle = "black";
  backCtx.textAlign = "center";
  backCtx.fillText(player.score, backBuffer.width/2, 20);
}

function renderGamePlay(){
  drawSnake();
  drawApple();
  drawScore();
}

function drawInstructions(){
  let messages = [
    "Welcome to snake! Rack up points by collecting as many red apples as",
    "possible! But be careful not to hit your head on the wall or bite your own tail!",
    "WASD or Arrow keys to move. Press space to begin!"
  ];
  drawFullScreenMessage(messages, 1, 20);
}

function renderInstructions(){
  drawInstructions();
}

function drawGameOverMessage() {
  let messages = ["Game Over!", "Score: " + player.score, "Press space to begin again."];
  drawFullScreenMessage(messages, 1, 45);
}

function renderGameOver(){
  drawGameOverMessage();
}

function drawFullScreenMessage(message, linesAboveCenter, fontSize){
  backCtx.font = fontSize + "px Helvetica";
  backCtx.fillStyle = "blue";
  backCtx.textAlign = "center";

  message.forEach(function (item, index){
    backCtx.fillText(item, backBuffer.width/2, (backBuffer.height/2 - ((fontSize + 5) * linesAboveCenter)) + (fontSize + 5) * index);
  })
}
