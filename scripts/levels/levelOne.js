var levelOne = {
  x: 60,
  y: 662,
  width: 7,
  height: 10,
  platform1: new Platform(0, 670, 1100, 3000),
  platform2: new Platform(10, 300, 5, 400),
  platform3: new Platform(170, 320, 90, 5),
  platform4: new Platform(415, 240, 90, 5),
  platform5: new Platform(705, 320, 90, 5),
  platform6: new Platform(980, 450, 90, 5),
  platform7: new Platform(50, 395, 80, 5),
  spike1: new Spike(80, 670, 85, 660, 90, 670),
  spike2: new Spike(90, 670, 95, 660, 100, 670),
  spike3: new Spike(15, 300, 25, 305, 15, 310),
  spike4: new Spike(10, 300, 0, 305, 10, 310),
  spike5: new Spike(55, 400, 60, 410, 65, 400),
  enemy1: new BasicEnemy(200, 312, 5, 8, new Platform(170, 320, 90, 5)),
  enemy2: new BasicEnemy(70, 387, 5, 8, new Platform(50, 395, 80, 5)),
  goal: new Goal(1015, 430, 25, 8),
  setPlatforms: function() {
    platforms.push(levelOne.platform1);
    platforms.push(levelOne.platform2);
    platforms.push(levelOne.platform3);
    platforms.push(levelOne.platform4);
    platforms.push(levelOne.platform5);
    platforms.push(levelOne.platform6);
    platforms.push(levelOne.platform7);
  },
  setSpikes: function() {
    spikes.push(levelOne.spike1);
    spikes.push(levelOne.spike2);
    spikes.push(levelOne.spike3);
    spikes.push(levelOne.spike4);
    spikes.push(levelOne.spike5);
  },
  setEnemies: function() {
    enemies.push(levelOne.enemy1);
    enemies.push(levelOne.enemy2);
  },
  setPlayer: function() {
    player = new Player(levelOne.x, levelOne.y, levelOne.width, levelOne.height);
  },
  setGoal: function() {
    goal = levelOne.goal;
  }
}
levels.push(levelOne);
