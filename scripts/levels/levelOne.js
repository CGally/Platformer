var levelOne = {
  player: new Player(60, 685, 5, 8),
  platform1: new Platform(10, 300, 5, 400),
  platform2: new Platform(190, 320, 50, 5),
  platform3: new Platform(425, 220, 50, 5),
  platform4: new Platform(725, 320, 50, 5),
  platform5: new Platform(1000, 450, 50, 5),
  goal: new Goal(1015, 430, 25, 8),
  setPlatforms: function() {
    platforms.push(levelOne.platform1);
    platforms.push(levelOne.platform2);
    platforms.push(levelOne.platform3);
    platforms.push(levelOne.platform4);
    platforms.push(levelOne.platform5);
  },
  setPlayer: function() {
    player = levelOne.player;
  },
  setGoal: function() {
    goal = levelOne.goal;
  }
}
levels.push(levelOne);
