var levelTwo = {
  x: 60,
  y: 690,
  width: 7,
  height: 10,
  platform1: new Platform(1000, 580, 60, 10),
  platform2: new Platform(900, 450, 60, 10),
  platform3: new Platform(1000, 320, 60, 10),
  platform4: new Platform(700, 210, 60, 10),
  platform5: new Platform(450, 320, 60, 10),
  platform6: new Platform(250, 420, 60, 10),
  spike1: new Spike(80, 700, 85, 690, 90, 700),
  enemy1: new BasicEnemy(920, 442, 5, 8, new Platform(900, 450, 60, 10)),
  goal: new Goal(275, 400, 15, 10),
  setPlatforms: function() {
    platforms.push(levelTwo.platform1);
    platforms.push(levelTwo.platform2);
    platforms.push(levelTwo.platform3);
    platforms.push(levelTwo.platform4);
    platforms.push(levelTwo.platform5);
    platforms.push(levelTwo.platform6);
  },
  setSpikes: function() {
    spikes.push(levelTwo.spike1);
  },
  setEnemies: function() {
    enemies.push(levelTwo.enemy1);
  },
  setPlayer: function() {
    player = new Player(levelTwo.x, levelTwo.y, levelTwo.width, levelTwo.height);
  },
  setGoal: function() {
    goal = levelTwo.goal;
  }
}
levels.push(levelTwo);
