var levelEleven = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(140, 480, 80, 20, 'ice'),
              new Platform(280, 480, 80, 20),
              new Platform(420, 480, 80, 20, 'ice'),
              new Platform(560, 480, 140, 20),
              new Platform(500, 100, 140, 10),
              new Platform(300, 100, 140, 10),
              new Platform(75, 250, 80, 10),
              new Platform(695, 0, 5, 480, 'elevator')],
  hazards: [new Spike(565, 100, 570, 90, 575, 100),
            new Spike(365, 100, 370, 90, 375, 100),
            new Lava(80, 490, 60, 10),
            new Lava(220, 490, 60, 10),
            new Lava(360, 490, 60, 10),
            new Lava(500, 490, 60, 10)],
  enemies: [new BasicEnemy(580, 474, 12, 6, 695, 560)],
  goal: new Goal(105, 230, 20, 8),
  setPlayer: function() {
    player = new Player(levelEleven.x, levelEleven.y, levelEleven.width, levelEleven.height);
  },
}
var levelTwelve = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 700, 20, 'ice'),
              new Platform(550, 250, 80, 10),
              new Platform(420, 230, 80, 10, 'ice'),
              new Platform(290, 210, 80, 10),
              new Platform(160, 190, 80, 10, 'ice'),
              new Platform(30, 170, 80, 10, 'ice'),
              new Platform(695, 200, 5, 280, 'elevator')],
  hazards: [new Spike(160, 480, 165, 470, 170, 480),
            new Spike(360, 480, 365, 470, 370, 480),
            new Spike(560, 480, 565, 470, 570, 480)],
  enemies: [new BasicEnemy(180, 184, 12, 6, 240, 160),
            new BasicEnemy(520, 230, 6, 12, 520, 520, 270, 200, 'flying'),
            new BasicEnemy(390, 210, 6, 12, 390, 390, 250, 180, 'flying')],
  goal: new Goal(60, 150, 20, 8),
  setPlayer: function() {
    player = new Player(levelTwelve.x, levelTwelve.y, levelTwelve.width, levelTwelve.height);
  },
}
var levelThirteen = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20, 'ice'),
              new Platform(70, 100, 130, 10, 'ice'),
              new Platform(70, 110, 10, 370),
              new Platform(280, 0, 10, 360),
              new Platform(170, 200, 110, 10, 'ice'),
              new Platform(80, 300, 110, 10, 'ice'),
              new Platform(635, 450, 40, 10),
              new Platform(250, 450, 60, 10, 'bounce'),
              new Platform(400, 340, 60, 10, 'bounce'),
              new Platform(550, 230, 60, 10, 'bounce'),
              new Platform(0, 0, 5, 480, 'elevator')],
  hazards: [new Spike(5, 0, 15, 5, 5, 10),
            new Spike(70, 100, 75, 90, 80, 100),
            new Spike(190, 100, 195, 90, 200, 100),
            new Spike(170, 200, 175, 190, 180, 200),
            new Spike(270, 200, 275, 190, 280, 200),
            new Spike(80, 300, 85, 290, 90, 300),
            new Spike(180, 300, 185, 290, 190, 300),
            new Lava(80, 490, 620, 10)],
  enemies: [new BasicEnemy(355, 390, 6, 12, 355, 355, 410, 320, 'flying'),
            new BasicEnemy(505, 280, 6, 12, 505, 505, 300, 210, 'flying')],
  goal: new Goal(645, 430, 20, 8),
  setPlayer: function() {
    player = new Player(levelThirteen.x, levelThirteen.y, levelThirteen.width, levelThirteen.height);
  },
}
var levelFourteen = {
  x: 40,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 60, 20, 'ice'),
              new Platform(55, 90, 80, 10, 'ice'),
              new Platform(315, 120, 10, 380),
              new Platform(395, 260, 80, 10, 'ice'),
              new Platform(640, 330, 60, 10),
              new Platform(645, 100, 40, 10),
              new Platform(200, 260, 80, 10, 'bounce'),
              new Platform(540, 460, 80, 10, 'bounce'),
              new Platform(0, 0, 5, 480, 'elevator'),
              new Platform(55, 100, 5, 380, 'elevator'),
              new Platform(620, 0, 5, 300, 'elevator')],
  hazards: [new Spike(5, 400, 15, 405, 5, 410),
            new Spike(5, 250, 15, 255, 5, 260),
            new Spike(5, 100, 15, 105, 5, 110),
            new Spike(5, 0, 15, 5, 5, 10),
            new Spike(55, 325, 45, 330, 55, 335),
            new Spike(55, 175, 45, 180, 55, 185),
            new Spike(315, 120, 320, 110, 325, 120),
            new Spike(645, 110, 650, 120, 655, 110),
            new Spike(655, 110, 660, 120, 665, 110),
            new Spike(665, 110, 670, 120, 675, 110),
            new Spike(675, 110, 680, 120, 685, 110),
            new Lava(60, 490, 640, 10)],
  enemies: [new BasicEnemy(640, 254, 12, 6, 700, 625),
            new BasicEnemy(640, 154, 12, 6, 700, 625)],
  goal: new Goal(655, 80, 20, 8),
  setPlayer: function() {
    player = new Player(levelFourteen.x, levelFourteen.y, levelFourteen.width, levelFourteen.height);
  },
}
var levelFifteen = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 80, 20, 'ice'),
              new Platform(50, 50, 80, 10),
              new Platform(130, 140, 60, 10),
              new Platform(50, 280, 5, 20),
              new Platform(210, 230, 100, 10, 'ice'),
              new Platform(405, 80, 60, 10, 'ice'),
              new Platform(505, 80, 5, 100),
              new Platform(505, 280, 5, 80),
              new Platform(50, 300, 455, 20),
              new Platform(570, 80, 5, 100),
              new Platform(510, 240, 60, 10),
              new Platform(510, 350, 80, 10, 'ice'),
              new Platform(620, 400, 80, 10, 'ice'),
              new Platform(500, 450, 90, 10),
              new Platform(420, 420, 60, 10, 'ice'),
              new Platform(330, 390, 60, 10),
              new Platform(220, 450, 60, 10, 'ice'),
              new Platform(0, 0, 5, 480, 'elevator'),
              new Platform(360, 50, 5, 190, 'elevator')],
  hazards: [new Spike(130, 140, 135, 130, 140, 140),
            new Spike(140, 140, 145, 130, 150, 140),
            new Spike(150, 140, 155, 130, 160, 140),
            new Spike(160, 140, 165, 130, 170, 140),
            new Spike(170, 140, 175, 130, 180, 140),
            new Spike(180, 140, 185, 130, 190, 140),
            new Spike(510, 80, 520, 85, 510, 90),
            new Spike(510, 90, 520, 95, 510, 100),
            new Spike(510, 100, 520, 105, 510, 110),
            new Spike(510, 110, 520, 115, 510, 120),
            new Spike(510, 120, 520, 125, 510, 130),
            new Spike(510, 130, 520, 135, 510, 140),
            new Spike(510, 140, 520, 145, 510, 150),
            new Spike(510, 150, 520, 155, 510, 160),
            new Spike(510, 160, 520, 165, 510, 170),
            new Spike(510, 170, 520, 175, 510, 180),
            new Spike(570, 80, 560, 85, 570, 90),
            new Spike(570, 90, 560, 95, 570, 100),
            new Spike(570, 100, 560, 105, 570, 110),
            new Spike(570, 110, 560, 115, 570, 120),
            new Spike(570, 120, 560, 125, 570, 130),
            new Spike(570, 130, 560, 135, 570, 140),
            new Spike(570, 140, 560, 145, 570, 150),
            new Spike(570, 150, 560, 155, 570, 160),
            new Spike(570, 160, 560, 165, 570, 170),
            new Spike(570, 170, 560, 175, 570, 180),
            new Lava(80, 490, 620, 10),
            new Lava(55, 290, 450, 10)],
  enemies: [new BasicEnemy(80, 44, 12, 6, 130, 50, 44, 44),
            new BasicEnemy(510, 344, 12, 6, 590, 510),
            new BasicEnemy(640, 394, 12, 6, 700, 620)],
  goal: new Goal(240, 430, 20, 8),
  setPlayer: function() {
    player = new Player(levelFifteen.x, levelFifteen.y, levelFifteen.width, levelFifteen.height);
  },
}
var levelSixteen = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20, 'ice'),
              new Platform(235, 320, 10, 180),
              new Platform(395, 320, 10, 180),
              new Platform(555, 320, 10, 180),
              new Platform(440, 250, 80, 10),
              new Platform(320, 230, 80, 10, 'ice'),
              new Platform(200, 210, 80, 10),
              new Platform(80, 190, 80, 10, 'ice'),
              new Platform(80, 100, 605, 10, 'ice'),
              new Platform(120, 460, 80, 10, 'bounce'),
              new Platform(280, 460, 80, 10, 'bounce'),
              new Platform(440, 460, 80, 10, 'bounce'),
              new Platform(590, 330, 80, 10, 'bounce'),
              new Platform(0, 0, 5, 250, 'elevator')],
  hazards: [new Spike(235, 320, 240, 310, 245, 320),
            new Spike(395, 320, 400, 310, 405, 320),
            new Spike(555, 320, 560, 310, 565, 320),
            new Spike(160, 100, 165, 90, 170, 100),
            new Spike(260, 100, 265, 90, 270, 100),
            new Spike(360, 100, 365, 90, 370, 100),
            new Spike(460, 100, 465, 90, 470, 100),
            new Spike(560, 100, 565, 90, 570, 100),
            new Lava(80, 490, 620, 10)],
  enemies: [new BasicEnemy(300, 454, 12, 6, 360, 280),
            new BasicEnemy(460, 244, 12, 6, 520, 440),
            new BasicEnemy(220, 204, 12, 6, 280, 200)],
  goal: new Goal(655, 80, 20, 8),
  setPlayer: function() {
    player = new Player(levelSixteen.x, levelSixteen.y, levelSixteen.width, levelSixteen.height);
  },
}
var levelSeventeen = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20, 'ice'),
              new Platform(120, 450, 80, 10, 'ice'),
              new Platform(0, 420, 80, 10, 'ice'),
              new Platform(120, 390, 80, 10, 'ice'),
              new Platform(0, 360, 80, 10, 'ice'),
              new Platform(120, 330, 80, 10, 'ice'),
              new Platform(0, 300, 80, 10, 'ice'),
              new Platform(70, 100, 130, 10),
              new Platform(200, 100, 10, 360),
              new Platform(600, 210, 10, 290),
              new Platform(635, 450, 40, 10),
              new Platform(270, 200, 30, 10, 'bounce'),
              new Platform(420, 200, 30, 10, 'bounce'),
              new Platform(570, 200, 40, 10, 'bounce'),
              new Platform(0, 0, 5, 270, 'elevator')],
  hazards: [new Spike(5, 0, 15, 5, 5, 10),
            new Lava(80, 490, 620, 10)],
  enemies: [new BasicEnemy(140, 384, 12, 6, 200, 128),
            new BasicEnemy(620, 220, 12, 6, 700, 610),
            new BasicEnemy(635, 280, 12, 6, 700, 610),
            new BasicEnemy(650, 340, 12, 6, 700, 610),
            new BasicEnemy(665, 400, 12, 6, 700, 610),
            new BasicEnemy(360, 100, 6, 12, 360, 360, 120, 30, 'flying'),
            new BasicEnemy(510, 100, 6, 12, 510, 510, 120, 30, 'flying')],
  goal: new Goal(645, 430, 20, 8),
  setPlayer: function() {
    player = new Player(levelSeventeen.x, levelSeventeen.y, levelSeventeen.width, levelSeventeen.height);
  },
}
var levelEighteen = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20, 'ice'),
              new Platform(140, 480, 80, 10),
              new Platform(280, 480, 80, 10, 'ice'),
              new Platform(420, 480, 80, 10),
              new Platform(560, 480, 80, 10, 'ice'),
              new Platform(560, 80, 80, 10, 'ice'),
              new Platform(560, 90, 10, 280),
              new Platform(480, 0, 10, 310),
              new Platform(420, 370, 150, 10, 'ice'),
              new Platform(320, 50, 60, 10, 'ice'),
              new Platform(150, 200, 60, 10, 'ice'),
              new Platform(340, 350, 40, 10, 'bounce'),
              new Platform(420, 200, 40, 10, 'bounce'),
              new Platform(695, 0, 5, 490, 'elevator')],
  hazards: [new Spike(695, 0, 685, 5, 695, 10),
            new Lava(80, 490, 620, 10)],
  enemies: [new BasicEnemy(160, 474, 12, 6, 220, 140),
            new BasicEnemy(440, 474, 12, 6, 500, 420),
            new BasicEnemy(500, 90, 12, 6, 560, 490),
            new BasicEnemy(500, 190, 12, 6, 560, 490),
            new BasicEnemy(500, 290, 12, 6, 560, 490),
            new BasicEnemy(340, 44, 12, 6, 380, 320)],
  goal: new Goal(170, 180, 20, 8),
  setPlayer: function() {
    player = new Player(levelEighteen.x, levelEighteen.y, levelEighteen.width, levelEighteen.height);
  },
}
var levelNineteen = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20, 'ice'),
              new Platform(120, 450, 80, 10, 'ice'),
              new Platform(240, 420, 80, 10),
              new Platform(120, 390, 80, 10, 'ice'),
              new Platform(0, 360, 80, 10),
              new Platform(120, 330, 80, 10, 'ice'),
              new Platform(240, 300, 80, 10),
              new Platform(120, 270, 80, 10, 'ice'),
              new Platform(0, 240, 80, 10),
              new Platform(120, 210, 80, 10, 'ice'),
              new Platform(240, 180, 90, 10, 'ice'),
              new Platform(320, 190, 10, 300),
              new Platform(0, 80, 600, 10, 'ice'),
              new Platform(440, 450, 40, 10, 'bounce'),
              new Platform(540, 300, 40, 10, 'bounce'),
              new Platform(640, 150, 40, 10, 'bounce')],
  hazards: [new Lava(80, 490, 620, 10)],
  enemies: [new BasicEnemy(260, 414, 12, 6, 320, 240),
            new BasicEnemy(20, 354, 12, 6, 80, 0),
            new BasicEnemy(260, 294, 12, 6, 320, 240),
            new BasicEnemy(20, 234, 12, 6, 80, 0),
            new BasicEnemy(80, 74, 12, 6, 160, 60),
            new BasicEnemy(300, 74, 12, 6, 360, 260),
            new BasicEnemy(520, 74, 12, 6, 560, 460)],
  goal: new Goal(20, 60, 20, 8),
  setPlayer: function() {
    player = new Player(levelNineteen.x, levelNineteen.y, levelNineteen.width, levelNineteen.height);
  },
}
var levelTwenty = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  platforms: [new Platform(0, 480, 80, 20, 'ice'),
              new Platform(120, 450, 80, 10, 'ice'),
              new Platform(240, 420, 80, 10, 'ice'),
              new Platform(380, 450, 80, 10, 'ice'),
              new Platform(0, 290, 600, 10),
              new Platform(580, 270, 20, 20),
              new Platform(460, 250, 80, 10, 'ice'),
              new Platform(460, 130, 80, 10, 'ice'),
              new Platform(340, 110, 80, 10, 'ice'),
              new Platform(340, 120, 10, 160),
              new Platform(20, 60, 40, 10, 'ice'),
              new Platform(520, 450, 60, 10, 'bounce'),
              new Platform(360, 250, 40, 10, 'bounce'),
              new Platform(220, 250, 30, 10, 'bounce'),
              new Platform(70, 170, 30, 10, 'bounce'),
              new Platform(695, 150, 5, 340, 'elevator')],
  hazards: [new Spike(695, 150, 685, 155, 695, 160),
            new Lava(80, 490, 620, 10),
            new Lava(0, 280, 580, 10)],
  enemies: [new BasicEnemy(260, 414, 12, 6, 320, 240),
            new BasicEnemy(480, 244, 12, 6, 540, 460),
            new BasicEnemy(360, 104, 12, 6, 420, 340),
            new BasicEnemy(300, 130, 6, 12, 300, 300, 180, 80, 'flying'),
            new BasicEnemy(160, 130, 6, 12, 300, 300, 180, 80, 'flying')],
  goal: new Goal(30, 40, 20, 8),
  setPlayer: function() {
    player = new Player(levelTwenty.x, levelTwenty.y, levelTwenty.width, levelTwenty.height);
  },
}