var levelSix = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(50, 50, 80, 10),
              new Platform(190, 0, 5, 150),
              new Platform(130, 140, 60, 10),
              new Platform(50, 60, 5, 240),
              new Platform(50, 230, 80, 10),
              new Platform(190, 230, 30, 10),
              new Platform(270, 230, 30, 10),
              new Platform(425, 80, 30, 10),
              new Platform(505, 80, 5, 280),
              new Platform(50, 300, 455, 20),
              new Platform(570, 80, 5, 100),
              new Platform(510, 240, 115, 10),
              new Platform(620, 300, 80, 10),
              new Platform(510, 350, 80, 10),
              new Platform(620, 400, 80, 10),
              new Platform(500, 450, 90, 10),
              new Platform(430, 420, 40, 10),
              new Platform(360, 390, 40, 10),
              new Platform(200, 450, 100, 10),
              new Platform(120, 460, 20, 10, 'invisible'),
              new Platform(0, 0, 5, 480, 'elevator'),
              new Platform(360, 50, 5, 190, 'elevator'),
              new Platform(620, 80, 5, 160, 'elevator')],
  hazards: [new Spike(130, 140, 135, 130, 140, 140),
            new Spike(140, 140, 145, 130, 150, 140),
            new Spike(150, 140, 155, 130, 160, 140),
            new Spike(160, 140, 165, 130, 170, 140),
            new Spike(170, 140, 175, 130, 180, 140),
            new Spike(180, 140, 185, 130, 190, 140),
            new Spike(510, 80, 520, 85, 510, 90),
            new Spike(510, 90, 520, 95, 510, 100),
            new Spike(510, 100, 520, 105, 510, 110),
            new Spike(510, 110, 520, 115, 510, 120),
            new Spike(510, 120, 520, 125, 510, 130),
            new Spike(510, 130, 520, 135, 510, 140),
            new Spike(510, 140, 520, 145, 510, 150),
            new Spike(510, 150, 520, 155, 510, 160),
            new Spike(510, 160, 520, 165, 510, 170),
            new Spike(510, 170, 520, 175, 510, 180),
            new Spike(570, 80, 560, 85, 570, 90),
            new Spike(570, 90, 560, 95, 570, 100),
            new Spike(570, 100, 560, 105, 570, 110),
            new Spike(570, 110, 560, 115, 570, 120),
            new Spike(570, 120, 560, 125, 570, 130),
            new Spike(570, 130, 560, 135, 570, 140),
            new Spike(570, 140, 560, 145, 570, 150),
            new Spike(570, 150, 560, 155, 570, 160),
            new Spike(570, 160, 560, 165, 570, 170),
            new Spike(570, 170, 560, 175, 570, 180),
            new Lava(80, 490, 620, 10),
            new Lava(55, 290, 450, 10)],
  enemies: [new BasicEnemy(80, 44, 12, 6, 130, 50),
            new BasicEnemy(670, 294, 12, 6, 700, 620),
            new BasicEnemy(510, 344, 12, 6, 590, 510),
            new BasicEnemy(640, 394, 12, 6, 700, 620),
            new FlyingEnemy(330, 400, 6, 12, 448, 350)],
  goal: new Goal(240, 430, 20, 8),
  setPlayer: function() {
    player = new Player(levelSix.x, levelSix.y, levelSix.width, levelSix.height);
  },
}
