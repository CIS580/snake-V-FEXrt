window.onkeydown = function(event) {
  event.preventDefault();

  switch (gameState) {
    case GameState.Instructions:
      inputInstructions(event);
      break;
    case GameState.Playing:
      inputGameplay(event);
      break;
    case GameState.GameOver:
      inputGameOver(event);
      break;
  }

  return false;
}

function inputInstructions(event){
  if(event.keyCode == 32){
    gameState = GameState.Playing;
  }
}

function inputGameOver(event) {
  if(event.keyCode == 32){
    resetGameDefaults();
    gameState = GameState.Playing;
  }
}

function inputGameplay(event) {
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

      case 80: // P for pause
        debug.pause();
        break;

      case 82: // R for resume
        debug.play();
        break;
    }
}
