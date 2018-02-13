var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    keys = [],
    platforms = [],
    spikes = [],
    levels = [],
    enemies = [],
    level = 0,
    player,
    goal,
    swooshSound = new buzz.sound("/sounds/swoosh.mp3", { volume: 70 }),
    gameSound = new buzz.sound("/sounds/game.mp3", { volume: 35 }),
    currentVolume = 70

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                            window.requestAnimationFrame = requestAnimationFrame;

function setVolume(percent) {
  if(percent > 0) {
    currentVolume = percent;
  }
  beepSound.setVolume(percent);
  gameSound.setVolume(percent / 2);
};

function paintBoard() {
  platforms = [];
  spikes = [],
  enemies = [],
  levels[level].setPlatforms();
  levels[level].setSpikes();
  levels[level].setEnemies();
  levels[level].setPlayer();
  levels[level].setGoal();
};

function render() {
  player.render();
  goal.render();
  for(var i = 0; i < platforms.length; i++){
    platforms[i].render();
  }
  for(var i = 0; i < spikes.length; i++){
    spikes[i].render();
  }
  for(var i = 0; i < enemies.length; i++){
    enemies[i].render();
  }
};

function step() {
  player.move();
  for(var i = 0; i < enemies.length; i++){
    enemies[i].move();
  }
  if (player.colCheck(player, goal)) {
    level++;
    paintBoard();
  }
  for(var i = 0; i < platforms.length; i++){
    var dir = player.colCheck(player, platforms[i]);
    if (dir === "l" || dir === "r") {
      player.velX = 0;
      player.velY = 0;
      player.jumping = false;
    } else if (dir === "b") {
      player.velY = 0;
      player.jumping = false;
    } else if (dir === "t") {
      player.velY *= -1;
    }
  }
  for(var i = 0; i < spikes.length; i++){
    if (player.colCheck(player, spikes[i])) {
      swooshSound.load();
      swooshSound.play();
      paintBoard();
    }
  }
  for(var i = 0; i < enemies.length; i++){
    if (player.colCheck(player, enemies[i])) {
      swooshSound.load();
      swooshSound.play();
      paintBoard();
    }
  }
  ctx.clearRect(0, 0, 1100, 700);
  render();
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
  paintBoard();
  render();
  gameSound.load();
  gameSound.play();
  gameSound.loop()
  step();
};
