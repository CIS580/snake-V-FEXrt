# Snake Game
An implementation of the classic [Snake game](https://en.wikipedia.org/wiki/Snake_(video_game)) in HTML5,
created for the Fall 2016 class of CIS 580 at Kansas State University.

## Requirements
The game is implemented in JavaScript using the HTML5 canvas element using the provided game framework.

1. The snake consists of a head and multiple body segments which always follow behind it and are rendered on-screen. The segments _should not be fixed in position_, i.e. the tail should move around the screen.  The head and body segments can be composed of rectangles, arcs, or images (10 points)
2. The snake's head can move left, right, up, and down. Optionally you may prevent the snake from turning back upon its own body (10 points)
3. Moving the snake's head off-screen (out of the rectangle between 0, 0, and the canvas width and height) loses the game (10 points)
4. Colliding the snake's head with a body segment loses the game (10 points)
5. When the game is lost, a message to that effect should be displayed to the players.  This can be done with the canvas' drawText method or an HTML element overlaying the canvas.  It should _not_ be done with the _alert()_ function (10 points)
6. When the game is lost, the snake should no longer move (10 points)
7. Periodically, an apple (image or arc) appears on-screen.  If the snake's head collides with it, the user gains points in their score (10 points)
8. The player's current score appears on-screen (this can be done with the canvas's draw-text method, or with an html element overlaying the canvas) (10 points)
9. Periodically, the snake grows an extra segment.  This can either be timed, or triggered by eating an apple, or similar mechanism.  The segment should appear at the end of the snake and behave like the existing segments (10 points)
10. Instructions for playing the made should be made available to the player. At a minimum, these should be incorporated into the webpage below the canvas, though they could also be displayed within the canvas using the drawText method or an HTML element overlaying the canvas.  If either of the latter is done, the game should pause while they are displayed (10 points)

## Extra Credit
1. You may optionally implement obstacles within the game's area.  Should the snake collide with one, the game should end. (10)
2. A bonus of 10 points is available for exceptionally polished game implementations.
