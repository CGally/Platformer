var levelTwo = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platform1: new Platform(0, 480, 80, 20),
  platform2: new Platform(50, 50, 80, 10),
  platform3: new Platform(190, 0, 5, 150),
  platform4: new Platform(130, 140, 60, 10),
  platform5: new Platform(50, 60, 5, 240),
  platform6: new Platform(50, 230, 80, 10),
  platform7: new Platform(190, 230, 30, 10),
  platform8: new Platform(270, 230, 30, 10),
  platform9: new Platform(425, 80, 30, 10),
  platform10: new Platform(505, 80, 5, 280),
  platform11: new Platform(50, 300, 455, 20),
  platform12: new Platform(570, 80, 5, 100),
  platform13: new Platform(510, 240, 115, 10),
  platform14: new Platform(620, 300, 80, 10),
  platform15: new Platform(510, 350, 80, 10),
  platform16: new Platform(620, 400, 80, 10),
  platform17: new Platform(500, 450, 90, 10),
  platform18: new Platform(430, 420, 40, 10),
  platform19: new Platform(360, 390, 40, 10),
  platform20: new Platform(200, 450, 100, 10),
  elevator1: new Elevator(0, 0, 5, 480),
  elevator2: new Elevator(360, 50, 5, 190),
  elevator3: new Elevator(620, 80, 5, 160),
  spike1: new Spike(130, 140, 135, 130, 140, 140),
  spike2: new Spike(140, 140, 145, 130, 150, 140),
  spike3: new Spike(150, 140, 155, 130, 160, 140),
  spike4: new Spike(160, 140, 165, 130, 170, 140),
  spike5: new Spike(170, 140, 175, 130, 180, 140),
  spike6: new Spike(180, 140, 185, 130, 190, 140),
  spike7: new Spike(510, 80, 520, 85, 510, 90),
  spike8: new Spike(510, 90, 520, 95, 510, 100),
  spike9: new Spike(510, 100, 520, 105, 510, 110),
  spike10: new Spike(510, 110, 520, 115, 510, 120),
  spike11: new Spike(510, 120, 520, 125, 510, 130),
  spike12: new Spike(510, 130, 520, 135, 510, 140),
  spike13: new Spike(510, 140, 520, 145, 510, 150),
  spike14: new Spike(510, 150, 520, 155, 510, 160),
  spike15: new Spike(510, 160, 520, 165, 510, 170),
  spike16: new Spike(510, 170, 520, 175, 510, 180),
  spike17: new Spike(570, 80, 560, 85, 570, 90),
  spike18: new Spike(570, 90, 560, 95, 570, 100),
  spike19: new Spike(570, 100, 560, 105, 570, 110),
  spike20: new Spike(570, 110, 560, 115, 570, 120),
  spike21: new Spike(570, 120, 560, 125, 570, 130),
  spike22: new Spike(570, 130, 560, 135, 570, 140),
  spike23: new Spike(570, 140, 560, 145, 570, 150),
  spike24: new Spike(570, 150, 560, 155, 570, 160),
  spike25: new Spike(570, 160, 560, 165, 570, 170),
  spike26: new Spike(570, 170, 560, 175, 570, 180),
  lava1: new Lava(80, 490, 620, 10),
  lava2: new Lava(55, 290, 450, 10),
  enemy1: new BasicEnemy(80, 44, 12, 6, new Platform(50, 50, 80, 10)),
  enemy2: new BasicEnemy(670, 294, 12, 6, new Platform(620, 300, 80, 10)),
  enemy3: new BasicEnemy(510, 344, 12, 6, new Platform(510, 350, 80, 10)),
  enemy4: new BasicEnemy(640, 394, 12, 6, new Platform(620, 400, 80, 10)),
  goal: new Goal(240, 430, 20, 8),
  // goal: new Goal(35, 460, 20, 8),
  setPlatforms: function() {
    platforms.push(levelTwo.platform1);
    platforms.push(levelTwo.platform2);
    platforms.push(levelTwo.platform3);
    platforms.push(levelTwo.platform4);
    platforms.push(levelTwo.platform5);
    platforms.push(levelTwo.platform6);
    platforms.push(levelTwo.platform7);
    platforms.push(levelTwo.platform8);
    platforms.push(levelTwo.platform9);
    platforms.push(levelTwo.platform10);
    platforms.push(levelTwo.platform11);
    platforms.push(levelTwo.platform12);
    platforms.push(levelTwo.platform13);
    platforms.push(levelTwo.platform14);
    platforms.push(levelTwo.platform15);
    platforms.push(levelTwo.platform16);
    platforms.push(levelTwo.platform17);
    platforms.push(levelTwo.platform18);
    platforms.push(levelTwo.platform19);
    platforms.push(levelTwo.platform20);
  },
  setElevators: function() {
    elevators.push(levelTwo.elevator1);
    elevators.push(levelTwo.elevator2);
    elevators.push(levelTwo.elevator3);
  },
  setSpikes: function() {
    spikes.push(levelTwo.spike1);
    spikes.push(levelTwo.spike2);
    spikes.push(levelTwo.spike3);
    spikes.push(levelTwo.spike4);
    spikes.push(levelTwo.spike5);
    spikes.push(levelTwo.spike6);
    spikes.push(levelTwo.spike7);
    spikes.push(levelTwo.spike8);
    spikes.push(levelTwo.spike9);
    spikes.push(levelTwo.spike10);
    spikes.push(levelTwo.spike11);
    spikes.push(levelTwo.spike12);
    spikes.push(levelTwo.spike13);
    spikes.push(levelTwo.spike14);
    spikes.push(levelTwo.spike15);
    spikes.push(levelTwo.spike16);
    spikes.push(levelTwo.spike17);
    spikes.push(levelTwo.spike18);
    spikes.push(levelTwo.spike19);
    spikes.push(levelTwo.spike20);
    spikes.push(levelTwo.spike21);
    spikes.push(levelTwo.spike22);
    spikes.push(levelTwo.spike23);
    spikes.push(levelTwo.spike24);
    spikes.push(levelTwo.spike25);
    spikes.push(levelTwo.spike26);
  },
  setLavas: function() {
    lavas.push(levelTwo.lava1);
    lavas.push(levelTwo.lava2);
  },
  setEnemies: function() {
    enemies.push(levelTwo.enemy1);
    enemies.push(levelTwo.enemy2);
    enemies.push(levelTwo.enemy3);
    enemies.push(levelTwo.enemy4);
  },
  setPlayer: function() {
    player = new Player(levelTwo.x, levelTwo.y, levelTwo.width, levelTwo.height);
  },
  setGoal: function() {
    goal = levelTwo.goal;
  }
}
