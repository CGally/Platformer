(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    keys = [],
    platforms = [],
    levels = [],
    level = 0,
    player,
    goal;

function paintBoard() {
  platforms = [];
  levels[level].setPlatforms();
  levels[level].setPlayer();
  levels[level].setGoal();
};

function render() {
  player.render();
  goal.render();
  for(var i = 0; i < platforms.length; i++){
    platforms[i].render();
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
};

function step() {
  if (player.colCheck(player, goal)) {
    level++;
    paintBoard();
  }
  player.move();
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

window.addEventListener("load", function () {
    paintBoard();
    render();
    step();
});
