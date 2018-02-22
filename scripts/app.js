var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    header = document.getElementById("header"),
    start = document.getElementById("start"),
    selLev = document.getElementById('selLev'),
    num = document.getElementsByClassName('num'),
    keys = [],
    platforms,
    iplatforms,
    bPlatforms,
    elevators,
    hazards,
    powerUp,
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
  if(levels[level].powerUp) {
    levels[level].setPowerUp();
  } else {
    powerUp = false;
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
  if(powerUp) {
    powerUp.render();
    if (player.colCheck(player, powerUp)) {
      powerUpSound.load();
      powerUpSound.play();
      player.flying = true;
      powerUp.x = -20;
    }
  }
  for(var i = 0; i < platforms.length; i++){
    if(platforms[i].type !== 'invisible') {
      platforms[i].render();
    }
    var dir = player.colCheck(player, platforms[i]);
    if ((dir === "l" || dir === "r") && platforms[i].type === 'elevator') {
      player.velX = 0;
      player.velY = 0;
      player.jumping = false;
    } else if(dir === "l" || dir === "r") {
      platforms[i].render();
      player.velX = 0;
    } else if (dir === "b" && platforms[i].type === 'bounce') {
      boingSound.load();
      boingSound.play();
      player.friction = 0.8;
      if(player.velY * 2 > 10) {
        player.velY = -10;
      } else {
        player.velY *= -2;
      }
    } else if (dir === "b" && platforms[i].type === 'ice') {
      player.velY = 0;
      player.jumping = false;
      player.friction = 0.98;
    } else if (dir === "b") {
      platforms[i].render();
      player.velY = 0;
      player.jumping = false;
      player.friction = 0.8;
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
      if(powerUp) {
        levels[level].setPowerUp();
      }
    }
  }
  for(var i = 0; i < enemies.length; i++){
    enemies[i].render();
    enemies[i].move();
    if (player.colCheck(player, enemies[i])) {
      swooshSound.load();
      swooshSound.play();
      levels[level].setPlayer();
      if(powerUp) {
        levels[level].setPowerUp();
      }
    }
  }
  player.move();
  if (player.colCheck(player, goal)) {
    if(level < levels.length - 2){
      level++;
      if(level === 11) {
        stop();
        worldTwoSound.load();
        worldTwoSound.play();
        worldTwoSound.loop();
        canvas.style.backgroundImage = "url('images/winter.jpg')";
      }
      if(level === 21) {
        stop();
        worldThreeSound.load();
        worldThreeSound.play();
        worldThreeSound.loop();
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
  if(level > 20) {
    stop();
    worldThreeSound.load();
    worldThreeSound.play();
    worldThreeSound.loop();
    canvas.style.backgroundImage = "url('images/sky.png')";
  } else if(level > 10) {
    stop();
    worldTwoSound.load();
    worldTwoSound.play();
    worldTwoSound.loop();
    canvas.style.backgroundImage = "url('images/winter.jpg')";
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
  levels.push(levelThirteen);
  levels.push(levelFourteen);
  levels.push(levelFifteen);
  levels.push(levelSixteen);
  levels.push(levelSeventeen);
  levels.push(levelEighteen);
  levels.push(levelNineteen);
  levels.push(levelTwenty);
  levels.push(levelTwentyOne);
  levels.push(levelTwentyTwo);
  levels.push(levelTwentyThree);
  levels.push(levelTwentyFour);
  levels.push(levelTwentyFive);
  levels.push(levelTwentySix);
  levels.push(levelTwentySeven);
  levels.push(levelTwentyEight);
  levels.push(levelTwentyNine);
  levels.push(levelThirty);
  levels.push(endGame);
  render();
  step();
};
