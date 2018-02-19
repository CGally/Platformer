var levelFive = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(180, 440, 60, 10),
              new Platform(0, 290, 145, 10),
              new Platform(240, 270, 60, 10),
              new Platform(640, 290, 60, 10),
              new Platform(540, 260, 60, 10),
              new Platform(640, 230, 60, 10),
              new Platform(540, 200, 60, 10),
              new Platform(640, 170, 60, 10),
              new Platform(540, 140, 60, 10),
              new Platform(120, 460, 20, 10, 'invisible'),
              new Platform(180, 290, 20, 10, 'invisible'),
              new Platform(350, 440, 250, 10, 'bounce'),
              new Platform(140, 300, 5, 110, 'elevator')],
  hazards: [new Lava(80, 490, 620, 10)],
  enemies: [new BasicEnemy(30, 284, 12, 6, 145, 0),
            new FlyingEnemy(615, 200, 6, 12, 300, 120)],
  goal: new Goal(560, 120, 20, 8),
  setPlayer: function() {
    player = new Player(levelFive.x, levelFive.y, levelFive.width, levelFive.height);
  },
}
