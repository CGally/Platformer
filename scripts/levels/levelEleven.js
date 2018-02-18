var levelEleven = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(610, 150, 50, 10)],
  hazards: [new Lava(80, 150, 10, 350),
            new Lava(240, 0, 10, 350),
            new Lava(400, 150, 10, 350),
            new Lava(560, 0, 10, 350),
            new Lava(0, 0, 700, 10),
            new Lava(0, 490, 700, 10)],
  enemies: [new FlyingEnemy(403, 100, 6, 12, 138, 10)],
  powerUps: [new FlyingPowerUp(20, 470, 10, 10)],
  goal: new Goal(625, 130, 20, 8),
  setPlayer: function() {
    player = new Player(levelEleven.x, levelEleven.y, levelEleven.width, levelEleven.height);
  },
}
