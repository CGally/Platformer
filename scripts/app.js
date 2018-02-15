var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    keys = [],
    platforms = [],
    elevators = [],
    spikes = [],
    lavas = [],
    levels = [],
    enemies = [],
    level = 0,
    player,
    goal,
    swooshSound = new buzz.sound("/sounds/swoosh.mp3", { volume: 70 }),
    gameSound = new buzz.sound("/sounds/game.mp3", { volume: 35 }),
    winnerSound = new buzz.sound("/sounds/FFI.mp3", { volume: 35 }),
    currentVolume = 70,
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                            window.requestAnimationFrame = requestAnimationFrame;

function setVolume(percent) {
  if(percent > 0) {
    currentVolume = percent;
  }
  swooshSound.setVolume(percent);
  gameSound.setVolume(percent / 2);
  winnerSound.setVolume(percent / 2);
};

function render() {
  platforms = [];
  elevators = [];
  spikes = [];
  enemies = [];
  lavas = [];
  levels[level].setPlatforms();
  levels[level].setElevators();
  levels[level].setSpikes();
  levels[level].setLavas();
  levels[level].setEnemies();
  levels[level].setPlayer();
  levels[level].setGoal();
};

function step() {
  ctx.clearRect(0, 0, 1100, 700);
  player.render();
  goal.render();
  for(var i = 0; i < platforms.length; i++){
    platforms[i].render();
    var dir = player.colCheck(player, platforms[i]);
    if (dir === "l" || dir === "r") {
      player.velX = 0;
      player.velY = 0;
    } else if (dir === "b") {
      player.velY = 0;
      player.jumping = false;
    } else if (dir === "t") {
      player.velY *= -1;
    }
  }
  for(var i = 0; i < elevators.length; i++){
    elevators[i].render();
    var dir = player.colCheck(player, elevators[i]);
    if (dir === "l" || dir === "r") {
      player.velX = 0;
      player.velY = 0;
      player.jumping = false;
    }
  }
  for(var i = 0; i < spikes.length; i++){
    spikes[i].render();
    if (player.colCheck(player, spikes[i])) {
      swooshSound.load();
      swooshSound.play();
      render();
    }
  }
  for(var i = 0; i < lavas.length; i++){
    lavas[i].render();
    if (player.colCheck(player, lavas[i])) {
      swooshSound.load();
      swooshSound.play();
      render();
    }
  }
  for(var i = 0; i < enemies.length; i++){
    enemies[i].render();
    if (player.colCheck(player, enemies[i])) {
      swooshSound.load();
      swooshSound.play();
      render();
    }
  }
  player.move();
  for(var i = 0; i < enemies.length; i++){
    enemies[i].move();
  }
  if (player.colCheck(player, goal)) {
    if(level < levels.length - 1){
      level++;
      render();
    } else {
      gameSound.stop();
      winnerSound.load();
      winnerSound.play();
      winner.style.display = 'block';
    }
  }
  requestAnimationFrame(step);
}

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

volume.addEventListener('input', function(event) {
  setVolume(event.target.value);
  if(event.target.value < 1) {
    mute.style.display = 'inline-block';
    vol.style.display = 'none';
  } else {
    mute.style.display = 'none';
    vol.style.display = 'inline-block';
  }
});

vol.addEventListener('click', function(event) {
  setVolume(0);
  mute.style.display = 'inline-block';
  vol.style.display = 'none';
});

mute.addEventListener('click', function(event) {
  setVolume(currentVolume);
  mute.style.display = 'none';
  vol.style.display = 'inline-block';
});

window.onload = function() {
  levels.push(levelOne);
  levels.push(levelTwo);
  gameSound.load();
  gameSound.play();
  gameSound.loop()
  render();
  step();
};
