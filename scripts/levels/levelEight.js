var levelEight = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(160, 480, 80, 20),
              new Platform(320, 480, 80, 20),
              new Platform(460, 360, 40, 110),
              new Platform(440, 495, 80, 5),
              new Platform(560, 460, 80, 10),
              new Platform(80, 380, 380, 20),
              new Platform(390, 340, 30, 10),
              new Platform(280, 340, 30, 10),
              new Platform(170, 340, 30, 10),
              new Platform(80, 360, 30, 20),
              new Platform(60, 70, 100, 10),
              new Platform(220, 240, 80, 10),
              new Platform(340, 220, 80, 10),
              new Platform(460, 200, 80, 10),
              new Platform(620, 360, 40, 10)],
  elevators: [new Elevator(500, 360, 5, 70),
              new Elevator(0, 30, 5, 320),
              new Elevator(60, 80, 5, 220)],
  hazards: [new Spike(400, 500, 405, 490, 410, 500),
            new Spike(410, 500, 415, 490, 420, 500),
            new Spike(420, 500, 425, 490, 430, 500),
            new Spike(430, 500, 435, 490, 440, 500),
            new Spike(460, 470, 465, 480, 470, 470),
            new Spike(470, 470, 475, 480, 480, 470),
            new Spike(480, 470, 485, 480, 490, 470),
            new Spike(490, 470, 495, 480, 500, 470),
            new Spike(5, 190, 15, 195, 5, 200),
            new Lava(80, 495, 80, 5),
            new Lava(240, 495, 80, 5),
            new Lava(520, 495, 180, 5),
            new Lava(110, 370, 350, 10)],
  enemies: [new BasicEnemy(590, 454, 12, 6, 640, 560, 80, 10),
            new BasicEnemy(90, 64, 12, 6, 160, 60),
            new BasicEnemy(370, 214, 12, 6, 420, 340),
            new FlyingEnemy(120, 450, 6, 12, 480, 420),
            new FlyingEnemy(200, 70, 6, 12, 120, 20)],
  goal: new Goal(630, 340, 20, 8),
  setPlayer: function() {
    player = new Player(levelEight.x, levelEight.y, levelEight.width, levelEight.height);
  },
}
