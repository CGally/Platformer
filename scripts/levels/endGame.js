var endGame = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 700, 20)],
  hazards: [new Lava(0, 0, 0, 0)],
  enemies: [new BasicEnemy(0, 0, 0, 0, 0, 0)],
  goal: new Goal(0, 0, 0, 0),
  setPlayer: function() {
    player = new Player(endGame.x, endGame.y, endGame.width, endGame.height);
  },
}
