var levelThree = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platform1: new Platform(0, 480, 80, 20),
  platform2: new Platform(160, 480, 80, 20),
  platform3: new Platform(320, 480, 80, 20),
  platform4: new Platform(460, 360, 40, 110),
  platform5: new Platform(440, 495, 80, 5),
  platform6: new Platform(560, 460, 80, 10),
  platform7: new Platform(80, 380, 380, 20),
  platform8: new Platform(390, 340, 30, 10),
  platform9: new Platform(280, 340, 30, 10),
  platform10: new Platform(170, 340, 30, 10),
  platform11: new Platform(80, 360, 30, 20),
  platform12: new Platform(60, 70, 100, 10),
  platform13: new Platform(220, 240, 80, 10),
  platform14: new Platform(340, 220, 80, 10),
  platform15: new Platform(460, 200, 80, 10),
  platform16: new Platform(620, 360, 40, 10),
  elevator1: new Elevator(500, 360, 5, 70),
  elevator2: new Elevator(0, 30, 5, 320),
  elevator3: new Elevator(60, 80, 5, 220),
  spike1: new Spike(400, 500, 405, 490, 410, 500),
  spike2: new Spike(410, 500, 415, 490, 420, 500),
  spike3: new Spike(420, 500, 425, 490, 430, 500),
  spike4: new Spike(430, 500, 435, 490, 440, 500),
  spike5: new Spike(460, 470, 465, 480, 470, 470),
  spike6: new Spike(470, 470, 475, 480, 480, 470),
  spike7: new Spike(480, 470, 485, 480, 490, 470),
  spike8: new Spike(490, 470, 495, 480, 500, 470),
  spike9: new Spike(5, 190, 15, 195, 5, 200),
  lava1: new Lava(80, 495, 80, 5),
  lava2: new Lava(240, 495, 80, 5),
  lava3: new Lava(520, 495, 180, 5),
  lava4: new Lava(110, 370, 350, 10),
  basicEnemy1: new BasicEnemy(590, 454, 12, 6, new Platform(560, 460, 80, 10)),
  basicEnemy2: new BasicEnemy(90, 64, 12, 6, new Platform(60, 70, 100, 10)),
  basicEnemy3: new BasicEnemy(370, 214, 12, 6, new Platform(340, 220, 80, 10)),
  flyingEnemy1: new FlyingEnemy(120, 450, 6, 12, 480, 420),
  flyingEnemy2: new FlyingEnemy(200, 70, 6, 12, 120, 20),
  // goal: new Goal(35, 460, 20, 8),
  goal: new Goal(630, 340, 20, 8),
  setPlatforms: function() {
    platforms.push(levelThree.platform1);
    platforms.push(levelThree.platform2);
    platforms.push(levelThree.platform3);
    platforms.push(levelThree.platform4);
    platforms.push(levelThree.platform5);
    platforms.push(levelThree.platform6);
    platforms.push(levelThree.platform7);
    platforms.push(levelThree.platform8);
    platforms.push(levelThree.platform9);
    platforms.push(levelThree.platform10);
    platforms.push(levelThree.platform11);
    platforms.push(levelThree.platform12);
    platforms.push(levelThree.platform13);
    platforms.push(levelThree.platform14);
    platforms.push(levelThree.platform15);
    platforms.push(levelThree.platform16);
  },
  setElevators: function() {
    elevators.push(levelThree.elevator1);
    elevators.push(levelThree.elevator2);
    elevators.push(levelThree.elevator3);
  },
  setHazards: function() {
    hazards.push(levelThree.spike1);
    hazards.push(levelThree.spike2);
    hazards.push(levelThree.spike3);
    hazards.push(levelThree.spike4);
    hazards.push(levelThree.spike5);
    hazards.push(levelThree.spike6);
    hazards.push(levelThree.spike7);
    hazards.push(levelThree.spike8);
    hazards.push(levelThree.spike9);
    hazards.push(levelThree.lava1);
    hazards.push(levelThree.lava2);
    hazards.push(levelThree.lava3);
    hazards.push(levelThree.lava4);
  },
  setEnemies: function() {
    enemies.push(levelThree.basicEnemy1);
    enemies.push(levelThree.basicEnemy2);
    enemies.push(levelThree.basicEnemy3);
    enemies.push(levelThree.flyingEnemy1);
    enemies.push(levelThree.flyingEnemy2);
  },
  setPlayer: function() {
    player = new Player(levelThree.x, levelThree.y, levelThree.width, levelThree.height);
  },
  setGoal: function() {
    goal = levelThree.goal;
  }
}
