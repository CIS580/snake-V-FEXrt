/* Global variables */
var frontBuffer = document.getElementById('snake');
var frontCtx = frontBuffer.getContext('2d');
var backBuffer = document.createElement('canvas');
backBuffer.width = frontBuffer.width;
backBuffer.height = frontBuffer.height;
var backCtx = backBuffer.getContext('2d');
var oldTime = performance.now();

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

  if(!debug.isPaused){
    // Run the next loop
    window.requestAnimationFrame(loop);
  }
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
  spawnApple();
  // TODO: Grow the snake periodically
  // Happens on apple consumption
  // TODO: Move the snake
  moveSnake(elapsedTime);
  // TODO: Determine if the snake has moved out-of-bounds (offscreen)
  if(isOutOfBounds()){
    endGame();
  }
  // TODO: Determine if the snake has eaten an apple
  if(hasAteApple()){
    // TODO: Increase score
    eatApple();
    addSnakePart();
  }
  // TODO: Determine if the snake has eaten its tail
  if(hasAteTail()){
    endGame();
  }
  // TODO: [Extra Credit] Determine if the snake has run into an obstacle
}

/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {elapsedTime} A DOMHighResTimeStamp indicting
  * the number of milliseconds passed since the last frame.
  */
function render(elapsedTime) {
  backCtx.clearRect(0, 0, backBuffer.width, backBuffer.height);

  switch (gameState) {
    case GameState.Instructions:
      renderInstructions();
      break;
    case GameState.Playing:
      renderGamePlay();
      break;
    case GameState.GameOver:
      renderGameOver();
      break;
  }

}

/* Launch the game */
window.requestAnimationFrame(loop);
