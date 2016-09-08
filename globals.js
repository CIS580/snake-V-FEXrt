var Direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3
}

var GameState = {
  Instructions: 0,
  Playing: 1,
  GameOver: 2
}

var debug = {
  isPaused: false,
  pause: function(){
    this.isPaused = true;
    return this.isPaused;
  },
  play: function(){
    this.isPaused = false;
    oldTime = performance.now();
    window.requestAnimationFrame(loop);
  }
}

var apple = {
  isEaten: true,
  cx: 0,
  cy: 0,
  r: 4
}

var gameState = GameState.Instructions;

var player = {
  direction: Direction.Right,
  speed: 0.5,
  isMoving: false,
  score: 0,
  head: {
    cx: 30,
    cy: 30,
    r: 5
  },
  parts: []
}

player.parts.push(player.head);
