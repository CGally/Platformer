var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    header = document.getElementById("header"),
    menu = document.getElementById("menuBtn"),
    start = document.getElementById("start"),
    num = document.getElementsByClassName('num'),
    keys = [],
    platforms,
    iplatforms,
    bPlatforms,
    elevators,
    hazards,
    powerUps,
    levels = [],
    enemies,
    level = 0,
    currentLevel = 1,
    player,
    goal,
    g,
    swooshSound = new buzz.sound("/sounds/swoosh.mp3", { volume: 70 }),
    powerUpSound = new buzz.sound("/sounds/powerup.wav", { volume: 70 }),
    boingSound = new buzz.sound("/sounds/boing.mp3", { volume: 70 }),
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
  powerUpSound.setVolume(percent);
  boingSound.setVolume(percent);
  gameSound.setVolume(percent / 2);
  winnerSound.setVolume(percent / 2);
};

function setLevel() {
  for(var i = 0; i < document.levelSelect.selectedLevel.length; i++){
    if(document.levelSelect.selectedLevel[i].checked === true) {
      level = i + 1;
    }
  }
};

function setLevelSelect() {
  for(var i = 0; i < document.levelSelect.selectedLevel.length; i++){
    if(g < i) {
      document.levelSelect.selectedLevel[i].style.display = 'none'
    } else if(g > i) {
      num[i].style.display = 'inline-block';
      document.levelSelect.selectedLevel[i].style.display = 'inline-block'
    }
  }
};

function render() {
  platforms = levels[level].platforms;
  if(levels[level].iPlatforms) {
    iPlatforms = levels[level].iPlatforms;
  } else {
    iPlatforms = [];
  }
  if(levels[level].bPlatforms) {
    bPlatforms = levels[level].bPlatforms;
  } else {
    bPlatforms = [];
  }
  if(levels[level].elevators) {
    elevators = levels[level].elevators;
  } else {
    elevators = [];
  }
  if(levels[level].powerUps) {
    powerUps = levels[level].powerUps;
  } else {
    powerUps = [];
  }
  hazards = levels[level].hazards;
  enemies = levels[level].enemies;
  goal = levels[level].goal;
  levels[level].setPlayer();
};

function step() {
  ctx.clearRect(0, 0, 1100, 700);
  player.render();
  goal.render();
  if(bPlatforms !== []) {
    for(var i = 0; i < bPlatforms.length; i++){
      bPlatforms[i].render();
      var dir = player.colCheck(player, bPlatforms[i]);
      if (dir === "l" || dir === "r") {
        player.velX = 0;
      } else if (dir === "b") {
        boingSound.load();
        boingSound.play();
        if(player.velY * 2 > 10) {
          player.velY = -10;
        } else {
          player.velY *= -2;
        }
      } else if (dir === "t") {
        player.velY *= -1;
      }
    }
  }
  if(iPlatforms !== []) {
    for(var i = 0; i < iPlatforms.length; i++){
      var dir = player.colCheck(player, iPlatforms[i]);
      if (dir === "l" || dir === "r") {
        iPlatforms[i].render();
        player.velX = 0;
      } else if (dir === "b") {
        iPlatforms[i].render();
        player.velY = 0;
        player.jumping = false;
      } else if (dir === "t") {
        iPlatforms[i].render();
        player.velY *= -1;
      }
    }
  }
  for(var i = 0; i < platforms.length; i++){
    platforms[i].render();
    var dir = player.colCheck(player, platforms[i]);
    if (dir === "l" || dir === "r") {
      player.velX = 0;
    } else if (dir === "b") {
      player.velY = 0;
      player.jumping = false;
    } else if (dir === "t") {
      player.velY *= -1;
    }
  }
  if(elevators !== []) {
    for(var i = 0; i < elevators.length; i++){
      elevators[i].render();
      var dir = player.colCheck(player, elevators[i]);
      if (dir === "l" || dir === "r") {
        player.velX = 0;
        player.velY = 0;
        player.jumping = false;
      }
    }
  }
  for(var i = 0; i < hazards.length; i++){
    hazards[i].render();
    if (player.colCheck(player, hazards[i])) {
      swooshSound.load();
      swooshSound.play();
      levels[level].setPlayer();
    }
  }
  for(var i = 0; i < enemies.length; i++){
    enemies[i].render();
    if (player.colCheck(player, enemies[i])) {
      swooshSound.load();
      swooshSound.play();
      levels[level].setPlayer();
    }
  }
  for(var i = 0; i < powerUps.length; i++){
    powerUps[i].render();
    if (player.colCheck(player, powerUps[i])) {
      powerUpSound.load();
      powerUpSound.play();
      player.flying = true;
    }
  }
  player.move();
  for(var i = 0; i < enemies.length; i++){
    enemies[i].move();
  }
  if (player.colCheck(player, goal)) {
    if(level < levels.length - 2){
      level++;
      saveProgress(uid, level);
      currentLevel = level + 1;
      header.textContent = 'Level ' + currentLevel;
      render();
    } else {
      level++;
      render();
      header.textContent = 'Congratulations! You won!';
      gameSound.stop();
      winnerSound.load();
      winnerSound.play();
      start.style.display = 'block';
      menu.style.display = 'none';
      cancelBtn[2].style.display = 'none'
    }
  }
  requestAnimationFrame(step);
}

function gameStart() {
  winnerSound.stop();
  gameSound.load();
  gameSound.play();
  gameSound.loop()
  setLevel();
  currentLevel = level;
  header.textContent = 'Level ' + currentLevel;
  render();
  start.style.display = 'none';
  menu.style.display = 'inline-block';
  cancelBtn[2].style.display = 'inline-block'
};

function loadData() {
  startBtn.style.display = 'inline-block';
  g = f;
  setLevelSelect();
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

cancelBtn[2].addEventListener('click', function() {
  start.style.display = 'none';
  menu.style.display = 'inline-block';
});

menu.addEventListener('click', function() {
  start.style.display = 'block';
  menu.style.display = 'none';
});

window.onload = function() {
  startBtn.style.display = 'none'
  cancelBtn[2].style.display = 'none'
  header.textContent = 'Level ' + currentLevel;
  levels.push(endGame);
  levels.push(levelOne);
  levels.push(levelTwo);
  levels.push(levelThree);
  levels.push(levelFour);
  levels.push(levelFive);
  levels.push(levelSix);
  levels.push(levelSeven);
  levels.push(levelEight);
  levels.push(levelNine);
  levels.push(levelTen);
  levels.push(levelEleven);
  levels.push(endGame);
  render();
  step();
};
