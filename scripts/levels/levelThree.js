var levelThree = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(120, 460, 80, 10),
              new Platform(240, 440, 80, 10),
              new Platform(325, 250, 80, 10),
              new Platform(640, 300, 60, 10),
              new Platform(580, 110, 60, 10),
              new Platform(460, 110, 60, 10),
              new Platform(360, 90, 60, 10),
              new Platform(260, 70, 60, 10),
              new Platform(120, 460, 20, 10, 'invisible'),
              new Platform(405, 400, 180, 10, 'bounce'),
              new Platform(320, 250, 5, 200, 'elevator'),
              new Platform(695, 110, 5, 190, 'elevator')],
  hazards: [new Spike(405, 400, 410, 390, 415, 400),
            new Spike(415, 400, 420, 390, 425, 400),
            new Spike(425, 400, 430, 390, 435, 400),
            new Spike(555, 400, 560, 390, 565, 400),
            new Spike(565, 400, 570, 390, 575, 400),
            new Spike(575, 400, 580, 390, 585, 400),
            new Lava(80, 490, 620, 10)],
  enemies: [new BasicEnemy(150, 454, 12, 6, 200, 120),
            new FlyingEnemy(550, 110, 6, 12, 120, 60)],
  goal: new Goal(280, 50, 20, 8),
  setPlayer: function() {
    player = new Player(levelThree.x, levelThree.y, levelThree.width, levelThree.height);
  },
}
