var levelNine = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 300, 20),
              new Platform(360, 480, 340, 20),
              new Platform(555, 340, 90, 10),
              new Platform(485, 340, 30, 10),
              new Platform(415, 340, 30, 10),
              new Platform(345, 340, 30, 10),
              new Platform(95, 370, 210, 20),
              new Platform(275, 340, 30, 30),
              new Platform(95, 340, 30, 30),
              new Platform(145, 180, 200, 10),
              new Platform(395, 60, 110, 10),
              new Platform(205, 90, 150, 20),
              new Platform(335, 60, 20, 30),
              new Platform(270, 60, 20, 10),
              new Platform(205, 60, 20, 30),
              new Platform(95, 80, 60, 10),
              new Platform(25, 380, 40, 10),
              new Platform(695, 260, 5, 220, 'elevator'),
              new Platform(195, 280, 5, 50, 'elevator'),
              new Platform(95, 90, 5, 250, 'elevator'),
              new Platform(435, 180, 5, 90, 'elevator'),
              new Platform(485, 120, 5, 90, 'elevator'),
              new Platform(545, 60, 5, 90, 'elevator')],
  hazards: [new Spike(300, 500, 305, 490, 310, 500),
            new Spike(310, 500, 315, 490, 320, 500),
            new Spike(320, 500, 325, 490, 330, 500),
            new Spike(330, 500, 335, 490, 340, 500),
            new Spike(340, 500, 345, 490, 350, 500),
            new Spike(350, 500, 355, 490, 360, 500),
            new Spike(695, 290, 685, 295, 695, 300),
            new Spike(695, 280, 685, 285, 695, 290),
            new Spike(695, 270, 685, 275, 695, 280),
            new Spike(695, 260, 685, 265, 695, 270),
            new Lava(125, 360, 150, 10),
            new Lava(225, 80, 110, 10)],
  enemies: [new BasicEnemy(390, 474, 12, 6, 695, 360),
            new BasicEnemy(175, 174, 12, 6, 345, 145),
            new BasicEnemy(425, 54, 12, 6, 505, 395),
            new FlyingEnemy(385, 180, 6, 12, 230, 130)],
  goal: new Goal(35, 360, 20, 8),
  setPlayer: function() {
    player = new Player(levelNine.x, levelNine.y, levelNine.width, levelNine.height);
  },
}
