var levelFour = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platform1: new Platform(0, 480, 140, 20),
  platform2: new Platform(0, 450, 60, 10),
  platform3: new Platform(80, 420, 60, 10),
  platform4: new Platform(0, 390, 60, 10),
  platform5: new Platform(80, 360, 60, 10),
  platform6: new Platform(0, 330, 60, 10),
  platform7: new Platform(80, 300, 60, 10),
  platform8: new Platform(0, 270, 60, 10),
  platform9: new Platform(80, 240, 60, 10),
  platform10: new Platform(0, 210, 60, 10),
  platform11: new Platform(80, 180, 60, 10),
  platform12: new Platform(140, 180, 5, 320),
  platform13: new Platform(170, 200, 30, 20),
  platform14: new Platform(170, 220, 200, 20),
  platform15: new Platform(340, 200, 30, 20),
  platform16: new Platform(500, 450, 140, 10),
  platform17: new Platform(550, 120, 80, 10),
  elevator1: new Elevator(270, 150, 5, 50),
  elevator2: new Elevator(695, 60, 5, 440),
  spike1: new Spike(500, 450, 505, 440, 510, 450),
  spike2: new Spike(510, 450, 515, 440, 520, 450),
  spike3: new Spike(520, 450, 525, 440, 530, 450),
  spike4: new Spike(570, 450, 575, 440, 580, 450),
  spike5: new Spike(580, 450, 585, 440, 590, 450),
  spike6: new Spike(590, 450, 595, 440, 600, 450),
  spike7: new Spike(695, 60, 685, 65, 695, 70),
  spike8: new Spike(695, 70, 685, 75, 695, 80),
  lava1: new Lava(200, 210, 140, 10),
  lava2: new Lava(145, 490, 555, 10),
  basicEnemy1: new BasicEnemy(30, 384, 12, 6, new Platform(0, 390, 60, 10)),
  basicEnemy2: new BasicEnemy(90, 294, 12, 6, new Platform(80, 300, 60, 10)),
  basicEnemy3: new BasicEnemy(0, 204, 12, 6, new Platform(0, 210, 60, 10)),
  flyingEnemy1: new FlyingEnemy(410, 200, 6, 12, 250, 150),
  // goal: new Goal(35, 460, 20, 8),
  goal: new Goal(580, 100, 20, 8),
  setPlatforms: function() {
    platforms.push(levelFour.platform1);
    platforms.push(levelFour.platform2);
    platforms.push(levelFour.platform3);
    platforms.push(levelFour.platform4);
    platforms.push(levelFour.platform5);
    platforms.push(levelFour.platform6);
    platforms.push(levelFour.platform7);
    platforms.push(levelFour.platform8);
    platforms.push(levelFour.platform9);
    platforms.push(levelFour.platform10);
    platforms.push(levelFour.platform11);
    platforms.push(levelFour.platform12);
    platforms.push(levelFour.platform13);
    platforms.push(levelFour.platform14);
    platforms.push(levelFour.platform15);
    platforms.push(levelFour.platform16);
    platforms.push(levelFour.platform17);
  },
  setElevators: function() {
    elevators.push(levelFour.elevator1);
    elevators.push(levelFour.elevator2);
  },
  setHazards: function() {
    hazards.push(levelFour.spike1);
    hazards.push(levelFour.spike2);
    hazards.push(levelFour.spike3);
    hazards.push(levelFour.spike4);
    hazards.push(levelFour.spike5);
    hazards.push(levelFour.spike6);
    hazards.push(levelFour.spike7);
    hazards.push(levelFour.spike8);
    hazards.push(levelFour.lava1);
    hazards.push(levelFour.lava2);
  },
  setEnemies: function() {
    enemies.push(levelFour.basicEnemy1);
    enemies.push(levelFour.basicEnemy2);
    enemies.push(levelFour.basicEnemy3);
    enemies.push(levelFour.flyingEnemy1);
  },
  setPlayer: function() {
    player = new Player(levelFour.x, levelFour.y, levelFour.width, levelFour.height);
  },
  setGoal: function() {
    goal = levelFour.goal;
  }
}
