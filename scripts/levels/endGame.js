var endGame = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 700, 20)],
  goal: new Goal(0, 0, 0, 0),
  setPlayer: function() {
    player = new Player(endGame.x, endGame.y, endGame.width, endGame.height);
  },
}
