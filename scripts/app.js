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
    firebaseLevel,
    level = 0,
    player,
    goal,
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                            window.requestAnimationFrame = requestAnimationFrame;

function setLevel() {
  for(var i = 0; i < document.levelSelect.selectedLevel.length; i++){
    if(document.levelSelect.selectedLevel[i].checked === true) {
      level = i + 1;
    }
  }
};

function setLevelSelect() {
  for(var i = 0; i < document.levelSelect.selectedLevel.length; i++){
    if(firebaseLevel < i) {
      document.levelSelect.selectedLevel[i].style.display = 'none'
    } else if(firebaseLevel > i) {
      num[i].style.display = 'inline-block';
      document.levelSelect.selectedLevel[i].style.display = 'inline-block'
    }
  }
};

function render() {
  platforms = levels[level].platforms;
  if(levels[level].powerUps) {
    powerUps = levels[level].powerUps;
  } else {
    powerUps = [];
  }
  if(levels[level].hazards) {
    hazards = levels[level].hazards;
  } else {
    hazards = [];
  }
  if(levels[level].enemies) {
    enemies = levels[level].enemies;
  } else {
    enemies = [];
  }
  goal = levels[level].goal;
  levels[level].setPlayer();
};

function step() {
  ctx.clearRect(0, 0, 1100, 700);
  player.render();
  goal.render();
  for(var i = 0; i < platforms.length; i++){
    if(platforms[i].type !== 'invisible') {
      platforms[i].render();
    }
    var dir = player.colCheck(player, platforms[i]);
    if (dir === "l" || dir === "r" && platforms[i].type === 'elevator') {
      player.velX = 0;
      player.velY = 0;
      player.jumping = false;
    } else if(dir === "l" || dir === "r") {
      platforms[i].render();
      player.velX = 0;
    } else if (dir === "b" && platforms[i].type === 'bounce') {
      boingSound.load();
      boingSound.play();
      if(player.velY * 2 > 10) {
        player.velY = -10;
      } else {
        player.velY *= -2;
      }
    } else if (dir === "b") {
      platforms[i].render();
      player.velY = 0;
      player.jumping = false;
    } else if (dir === "t") {
      platforms[i].render();
      player.velY = 0;
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
      if(level > 10) {
        stop();
        worldTwoSound.load();
        worldTwoSound.play();
        worldTwoSound.loop();
        canvas.style.backgroundImage = "url('images/sky.png')";
      }
      saveProgress(uid, level);
      header.textContent = 'Level ' + level;
      render();
    } else {
      setLevelSelect();
      level++;
      render();
      header.textContent = 'Congratulations! You won!';
      stop();
      winnerSound.load();
      winnerSound.play();
      start.style.display = 'block';
      startBtn.style.display = 'inline-block';
      menu.style.display = 'none';
      cancelBtn[2].style.display = 'none'
    }
  }
  requestAnimationFrame(step);
}

function gameStart() {
  setLevel();
  if(level > 10) {
    stop();
    worldTwoSound.load();
    worldTwoSound.play();
    worldTwoSound.loop();
    canvas.style.backgroundImage = "url('images/sky.png')";
  } else {
    stop();
    worldOneSound.load();
    worldOneSound.play();
    worldOneSound.loop()
    canvas.style.backgroundImage = "url('images/desert.jpg')";
  }
  header.textContent = 'Level ' + level;
  render();
  start.style.display = 'none';
  menu.style.display = 'inline-block';
  cancelBtn[2].style.display = 'inline-block'
};

function loadData() {
  startBtn.style.display = 'inline-block';
  loadBtn.style.display = 'none';
  firebaseLevel = firebaseSnapShot;
  setLevelSelect();
}

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
});

cancelBtn[2].addEventListener('click', function() {
  start.style.display = 'none';
  menu.style.display = 'inline-block';
});

menu.addEventListener('click', function() {
  start.style.display = 'block';
  menu.style.display = 'none';
  setLevelSelect();
});

window.onload = function() {
  cancelBtn[2].style.display = 'none'
  header.textContent = 'Start Game';
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
  levels.push(levelTwelve);
  levels.push(endGame);
  render();
  step();
};
