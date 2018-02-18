var levelEight = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 140, 20),
              new Platform(0, 450, 60, 10),
              new Platform(80, 420, 60, 10),
              new Platform(0, 390, 60, 10),
              new Platform(80, 360, 60, 10),
              new Platform(0, 330, 60, 10),
              new Platform(80, 300, 60, 10),
              new Platform(0, 270, 60, 10),
              new Platform(80, 240, 60, 10),
              new Platform(0, 210, 60, 10),
              new Platform(80, 180, 60, 10),
              new Platform(140, 180, 5, 320),
              new Platform(170, 200, 30, 20),
              new Platform(170, 220, 200, 20),
              new Platform(340, 200, 30, 20),
              new Platform(550, 120, 80, 10)],
  bPlatforms: [new BouncePlatform(500, 450, 100, 10)],
  elevators: [new Elevator(270, 150, 5, 50),
              new Elevator(695, 60, 5, 300)],
  hazards: [new Spike(500, 450, 505, 440, 510, 450),
            new Spike(510, 450, 515, 440, 520, 450),
            new Spike(520, 450, 525, 440, 530, 450),
            new Spike(570, 450, 575, 440, 580, 450),
            new Spike(580, 450, 585, 440, 590, 450),
            new Spike(590, 450, 595, 440, 600, 450),
            new Spike(695, 60, 685, 65, 695, 70),
            new Spike(695, 70, 685, 75, 695, 80),
            new Lava(200, 210, 140, 10),
            new Lava(145, 490, 555, 10)],
  enemies: [new BasicEnemy(30, 384, 12, 6, 60, 0),
            new BasicEnemy(90, 294, 12, 6, 140, 80),
            new BasicEnemy(0, 204, 12, 6, 60, 0),
            new FlyingEnemy(410, 200, 6, 12, 250, 150)],
  goal: new Goal(580, 100, 20, 8),
  setPlayer: function() {
    player = new Player(levelEight.x, levelEight.y, levelEight.width, levelEight.height);
  },
}