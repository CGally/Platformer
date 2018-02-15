var levelOne = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platform1: new Platform(0, 480, 300, 20),
  platform2: new Platform(360, 480, 340, 20),
  platform3: new Platform(555, 340, 90, 10),
  platform4: new Platform(485, 340, 30, 10),
  platform5: new Platform(415, 340, 30, 10),
  platform6: new Platform(345, 340, 30, 10),
  platform7: new Platform(95, 370, 210, 20),
  platform8: new Platform(275, 340, 30, 30),
  platform9: new Platform(95, 340, 30, 30),
  platform10: new Platform(145, 180, 200, 10),
  platform11: new Platform(395, 60, 110, 10),
  platform12: new Platform(205, 90, 150, 20),
  platform13: new Platform(335, 60, 20, 30),
  platform14: new Platform(270, 60, 20, 10),
  platform15: new Platform(205, 60, 20, 30),
  platform16: new Platform(95, 80, 60, 10),
  platform17: new Platform(25, 380, 40, 10),
  elevator1: new Elevator(695, 260, 5, 220),
  elevator2: new Elevator(195, 280, 5, 50),
  elevator3: new Elevator(95, 90, 5, 250),
  elevator4: new Elevator(435, 180, 5, 90),
  elevator5: new Elevator(485, 120, 5, 90),
  elevator6: new Elevator(545, 60, 5, 90),
  spike1: new Spike(300, 500, 305, 490, 310, 500),
  spike2: new Spike(310, 500, 315, 490, 320, 500),
  spike3: new Spike(320, 500, 325, 490, 330, 500),
  spike4: new Spike(330, 500, 335, 490, 340, 500),
  spike5: new Spike(340, 500, 345, 490, 350, 500),
  spike6: new Spike(350, 500, 355, 490, 360, 500),
  spike7: new Spike(695, 290, 685, 295, 695, 300),
  spike8: new Spike(695, 280, 685, 285, 695, 290),
  spike9: new Spike(695, 270, 685, 275, 695, 280),
  spike10: new Spike(695, 260, 685, 265, 695, 270),
  lava1: new Lava(125, 360, 150, 10),
  lava2: new Lava(225, 80, 110, 10),
  basicEnemy1: new BasicEnemy(390, 474, 12, 6, new Platform(360, 480, 340, 20)),
  basicEnemy2: new BasicEnemy(175, 174, 12, 6, new Platform(145, 180, 200, 10)),
  basicEnemy3: new BasicEnemy(425, 54, 12, 6, new Platform(395, 60, 110, 10)),
  flyingEnemy1: new FlyingEnemy(385, 180, 6, 12, 230, 130),
  goal: new Goal(35, 360, 20, 8),
  // goal: new Goal(35, 460, 20, 8),
  setPlatforms: function() {
    platforms.push(levelOne.platform1);
    platforms.push(levelOne.platform2);
    platforms.push(levelOne.platform3);
    platforms.push(levelOne.platform4);
    platforms.push(levelOne.platform5);
    platforms.push(levelOne.platform6);
    platforms.push(levelOne.platform7);
    platforms.push(levelOne.platform8);
    platforms.push(levelOne.platform9);
    platforms.push(levelOne.platform10);
    platforms.push(levelOne.platform11);
    platforms.push(levelOne.platform12);
    platforms.push(levelOne.platform13);
    platforms.push(levelOne.platform14);
    platforms.push(levelOne.platform15);
    platforms.push(levelOne.platform16);
    platforms.push(levelOne.platform17);
  },
  setElevators: function() {
    elevators.push(levelOne.elevator1);
    elevators.push(levelOne.elevator2);
    elevators.push(levelOne.elevator3);
    elevators.push(levelOne.elevator4);
    elevators.push(levelOne.elevator5);
    elevators.push(levelOne.elevator6);
  },
  setHazards: function() {
    hazards.push(levelOne.spike1);
    hazards.push(levelOne.spike2);
    hazards.push(levelOne.spike3);
    hazards.push(levelOne.spike4);
    hazards.push(levelOne.spike5);
    hazards.push(levelOne.spike6);
    hazards.push(levelOne.spike7);
    hazards.push(levelOne.spike8);
    hazards.push(levelOne.spike9);
    hazards.push(levelOne.spike10);
    hazards.push(levelOne.lava1);
    hazards.push(levelOne.lava2);
  },
  setEnemies: function() {
    enemies.push(levelOne.basicEnemy1);
    enemies.push(levelOne.basicEnemy2);
    enemies.push(levelOne.basicEnemy3);
    enemies.push(levelOne.flyingEnemy1);
  },
  setPlayer: function() {
    player = new Player(levelOne.x, levelOne.y, levelOne.width, levelOne.height);
  },
  setGoal: function() {
    goal = levelOne.goal;
  }
}
