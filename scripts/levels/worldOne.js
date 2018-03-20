var levelOne = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(140, 480, 80, 20),
              new Platform(280, 480, 80, 20),
              new Platform(420, 480, 80, 20),
              new Platform(560, 480, 140, 20),
              new Platform(500, 100, 140, 10),
              new Platform(500, 110, 5, 150),
              new Platform(345, 110, 5, 150),
              new Platform(210, 100, 140, 10),
              new Platform(75, 250, 80, 10),
              new Platform(345, 250, 160, 10, 'bounce'),
              new Platform(695, 0, 5, 480, 'elevator')],
  hazards: [new Spike(285, 100, 290, 90, 295, 100),
            new Spike(275, 100, 280, 90, 285, 100),
            new Spike(265, 100, 270, 90, 275, 100),
            new Lava(80, 490, 60, 10),
            new Lava(220, 490, 60, 10),
            new Lava(360, 490, 60, 10),
            new Lava(500, 490, 60, 10)],
  enemies: [new BasicEnemy(300, 474, 12, 6, 360, 280),
            new BasicEnemy(420, 100, 6, 12, 420, 420, 160, 50, 'flying')],
  goal: new Goal(105, 230, 20, 8),
  setPlayer: function() {
    player = new Player(levelOne.x, levelOne.y, levelOne.width, levelOne.height);
  },
}
var levelTwo = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(580, 150, 80, 10),
              new Platform(580, 50, 80, 10),
              new Platform(110, 480, 100, 20, 'bounce'),
              new Platform(280, 370, 80, 10, 'bounce'),
              new Platform(430, 260, 80, 10, 'bounce'),
              new Platform(695, 0, 5, 160, 'elevator')],
  hazards: [new Spike(80, 500, 85, 490, 90, 500),
            new Spike(90, 500, 95, 490, 100, 500),
            new Spike(100, 500, 105, 490, 110, 500),
            new Spike(695, 0, 685, 5, 695, 10),
            new Lava(210, 490, 490, 10)],
  enemies: [new BasicEnemy(130, 474, 12, 6, 210, 110),
            new BasicEnemy(600, 144, 12, 6, 660, 580),
            new BasicEnemy(390, 260, 6, 12, 390, 390, 310, 200, 'flying')],
  goal: new Goal(610, 30, 20, 8),
  setPlayer: function() {
    player = new Player(levelTwo.x, levelTwo.y, levelTwo.width, levelTwo.height);
  },
}
var levelThree = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(120, 460, 80, 10),
              new Platform(240, 440, 80, 10),
              new Platform(325, 250, 80, 10),
              new Platform(640, 300, 60, 10),
              new Platform(580, 110, 60, 10),
              new Platform(460, 110, 60, 10),
              new Platform(360, 90, 60, 10),
              new Platform(260, 70, 60, 10),
              new Platform(405, 400, 180, 10, 'bounce'),
              new Platform(320, 250, 5, 200, 'elevator'),
              new Platform(695, 110, 5, 190, 'elevator')],
  hazards: [new Spike(405, 400, 410, 390, 415, 400),
            new Spike(415, 400, 420, 390, 425, 400),
            new Spike(425, 400, 430, 390, 435, 400),
            new Spike(555, 400, 560, 390, 565, 400),
            new Spike(565, 400, 570, 390, 575, 400),
            new Spike(575, 400, 580, 390, 585, 400),
            new Lava(80, 490, 620, 10)],
  enemies: [new BasicEnemy(150, 454, 12, 6, 200, 120),
            new BasicEnemy(550, 110, 6, 12, 550, 550, 130, 60, 'flying')],
  goal: new Goal(280, 50, 20, 8),
  setPlayer: function() {
    player = new Player(levelThree.x, levelThree.y, levelThree.width, levelThree.height);
  },
}
var levelFour = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(35, 260, 60, 10),
              new Platform(250, 120, 80, 10),
              new Platform(330, 480, 120, 20),
              new Platform(480, 450, 60, 10),
              new Platform(570, 420, 60, 10),
              new Platform(575, 110, 60, 10),
              new Platform(0, 260, 5, 220, 'elevator'),
              new Platform(145, 200, 5, 70, 'elevator'),
              new Platform(195, 120, 5, 70, 'elevator'),
              new Platform(695, 0, 5, 490, 'elevator'),
              new Platform(630, 120, 5, 250, 'elevator')],
  hazards: [new Spike(695, 280, 685, 285, 695, 290),
            new Spike(695, 290, 685, 295, 695, 300),
            new Spike(635, 130, 645, 135, 635, 140),
            new Spike(635, 140, 645, 145, 635, 150),
            new Lava(80, 490, 250, 10),
            new Lava(450, 490, 250, 10)],
  enemies: [new BasicEnemy(370, 474, 12, 6, 450, 330),
            new BasicEnemy(550, 440, 6, 12, 550, 550, 460, 370, 'flying')],
  goal: new Goal(595, 90, 20, 8),
  setPlayer: function() {
    player = new Player(levelFour.x, levelFour.y, levelFour.width, levelFour.height);
  },
}
var levelFive = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(180, 440, 60, 10),
              new Platform(0, 290, 145, 10),
              new Platform(640, 290, 60, 10),
              new Platform(540, 260, 60, 10),
              new Platform(640, 230, 60, 10),
              new Platform(540, 200, 60, 10),
              new Platform(640, 170, 60, 10),
              new Platform(540, 140, 60, 10),
              new Platform(120, 460, 20, 10),
              new Platform(210, 290, 20, 10, 'bounce'),
              new Platform(350, 440, 250, 10, 'bounce'),
              new Platform(140, 300, 5, 110, 'elevator')],
  hazards: [new Lava(80, 490, 620, 10)],
  enemies: [new BasicEnemy(30, 284, 12, 6, 145, 0),
            new BasicEnemy(615, 200, 6, 12, 615, 615, 310, 120, 'flying')],
  goal: new Goal(560, 120, 20, 8),
  setPlayer: function() {
    player = new Player(levelFive.x, levelFive.y, levelFive.width, levelFive.height);
  },
}
var levelSix = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(50, 50, 80, 10),
              new Platform(190, 0, 10, 150),
              new Platform(130, 140, 60, 10),
              new Platform(45, 50, 10, 270),
              new Platform(50, 230, 80, 10),
              new Platform(190, 230, 30, 10),
              new Platform(270, 230, 30, 10),
              new Platform(425, 80, 30, 10),
              new Platform(500, 80, 10, 280),
              new Platform(50, 300, 455, 20),
              new Platform(570, 80, 5, 100),
              new Platform(510, 240, 115, 10),
              new Platform(620, 300, 80, 10),
              new Platform(510, 350, 80, 10),
              new Platform(620, 400, 80, 10),
              new Platform(500, 450, 90, 10),
              new Platform(430, 420, 40, 10),
              new Platform(360, 390, 40, 10),
              new Platform(200, 450, 100, 10),
              new Platform(120, 460, 20, 10, 'invisible'),
              new Platform(0, 0, 5, 480, 'elevator'),
              new Platform(360, 50, 5, 190, 'elevator'),
              new Platform(620, 80, 5, 160, 'elevator')],
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
            new Lava(55, 290, 445, 10)],
  enemies: [new BasicEnemy(80, 44, 12, 6, 130, 50, 44, 44),
            new BasicEnemy(670, 294, 12, 6, 700, 620),
            new BasicEnemy(510, 344, 12, 6, 590, 510),
            new BasicEnemy(640, 394, 12, 6, 700, 620),
            new BasicEnemy(330, 400, 6, 12, 330, 330, 460, 350, 'flying')],
  goal: new Goal(240, 430, 20, 8),
  setPlayer: function() {
    player = new Player(levelSix.x, levelSix.y, levelSix.width, levelSix.height);
  },
}
var levelSeven = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 80, 20),
              new Platform(160, 480, 80, 20),
              new Platform(320, 480, 80, 20),
              new Platform(460, 360, 40, 110),
              new Platform(440, 495, 80, 5),
              new Platform(560, 460, 80, 10),
              new Platform(80, 380, 380, 20),
              new Platform(390, 340, 30, 10),
              new Platform(280, 340, 30, 10),
              new Platform(170, 340, 30, 10),
              new Platform(80, 360, 30, 20),
              new Platform(60, 70, 100, 10),
              new Platform(220, 240, 80, 10),
              new Platform(340, 220, 80, 10),
              new Platform(460, 200, 80, 10),
              new Platform(620, 360, 40, 10),
              new Platform(500, 360, 5, 70, 'elevator'),
              new Platform(0, 30, 5, 320, 'elevator'),
              new Platform(60, 80, 5, 220, 'elevator')],
  hazards: [new Spike(400, 500, 405, 490, 410, 500),
            new Spike(410, 500, 415, 490, 420, 500),
            new Spike(420, 500, 425, 490, 430, 500),
            new Spike(430, 500, 435, 490, 440, 500),
            new Spike(460, 470, 465, 480, 470, 470),
            new Spike(470, 470, 475, 480, 480, 470),
            new Spike(480, 470, 485, 480, 490, 470),
            new Spike(490, 470, 495, 480, 500, 470),
            new Spike(5, 190, 15, 195, 5, 200),
            new Lava(80, 495, 80, 5),
            new Lava(240, 495, 80, 5),
            new Lava(520, 495, 180, 5),
            new Lava(110, 370, 350, 10)],
  enemies: [new BasicEnemy(590, 454, 12, 6, 640, 560),
            new BasicEnemy(90, 64, 12, 6, 160, 60),
            new BasicEnemy(370, 214, 12, 6, 420, 340),
            new BasicEnemy(120, 450, 6, 12, 120, 120, 480, 420, 'flying'),
            new BasicEnemy(200, 70, 6, 12, 200, 200, 130, 20, 'flying')],
  goal: new Goal(630, 340, 20, 8),
  setPlayer: function() {
    player = new Player(levelSeven.x, levelSeven.y, levelSeven.width, levelSeven.height);
  },
}
var levelEight = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 140, 20),
              new Platform(0, 450, 60, 10),
              new Platform(80, 420, 60, 10),
              new Platform(0, 390, 60, 10),
              new Platform(80, 360, 60, 10),
              new Platform(0, 330, 60, 10),
              new Platform(80, 300, 60, 10),
              new Platform(0, 270, 60, 10),
              new Platform(80, 240, 60, 10),
              new Platform(0, 210, 60, 10),
              new Platform(80, 180, 60, 10),
              new Platform(140, 180, 5, 320),
              new Platform(170, 200, 30, 20),
              new Platform(170, 220, 200, 20),
              new Platform(340, 200, 30, 20),
              new Platform(550, 120, 80, 10),
              new Platform(500, 450, 100, 10, 'bounce'),
              new Platform(270, 150, 5, 50, 'elevator'),
              new Platform(695, 60, 5, 300, 'elevator')],
  hazards: [new Spike(500, 450, 505, 440, 510, 450),
            new Spike(510, 450, 515, 440, 520, 450),
            new Spike(520, 450, 525, 440, 530, 450),
            new Spike(570, 450, 575, 440, 580, 450),
            new Spike(580, 450, 585, 440, 590, 450),
            new Spike(590, 450, 595, 440, 600, 450),
            new Spike(695, 60, 685, 65, 695, 70),
            new Spike(695, 70, 685, 75, 695, 80),
            new Lava(200, 210, 140, 10),
            new Lava(145, 490, 555, 10)],
  enemies: [new BasicEnemy(30, 384, 12, 6, 60, 0),
            new BasicEnemy(90, 294, 12, 6, 140, 80),
            new BasicEnemy(0, 204, 12, 6, 60, 0),
            new BasicEnemy(410, 200, 6, 12, 410, 410, 260, 150, 'flying')],
  goal: new Goal(580, 100, 20, 8),
  setPlayer: function() {
    player = new Player(levelEight.x, levelEight.y, levelEight.width, levelEight.height);
  },
}
var levelNine = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(0, 480, 300, 20),
              new Platform(360, 480, 340, 20),
              new Platform(555, 340, 90, 10),
              new Platform(485, 340, 30, 10),
              new Platform(415, 340, 30, 10),
              new Platform(345, 340, 30, 10),
              new Platform(95, 370, 210, 20),
              new Platform(275, 340, 30, 30),
              new Platform(95, 340, 30, 30),
              new Platform(145, 180, 200, 10),
              new Platform(395, 60, 110, 10),
              new Platform(205, 90, 150, 20),
              new Platform(335, 60, 20, 30),
              new Platform(270, 60, 20, 10),
              new Platform(205, 60, 20, 30),
              new Platform(95, 80, 60, 10),
              new Platform(25, 380, 40, 10),
              new Platform(695, 260, 5, 220, 'elevator'),
              new Platform(195, 280, 5, 50, 'elevator'),
              new Platform(95, 90, 5, 250, 'elevator'),
              new Platform(435, 180, 5, 90, 'elevator'),
              new Platform(485, 120, 5, 90, 'elevator'),
              new Platform(545, 60, 5, 90, 'elevator')],
  hazards: [new Spike(300, 500, 305, 490, 310, 500),
            new Spike(310, 500, 315, 490, 320, 500),
            new Spike(320, 500, 325, 490, 330, 500),
            new Spike(330, 500, 335, 490, 340, 500),
            new Spike(340, 500, 345, 490, 350, 500),
            new Spike(350, 500, 355, 490, 360, 500),
            new Spike(695, 290, 685, 295, 695, 300),
            new Spike(695, 280, 685, 285, 695, 290),
            new Spike(695, 270, 685, 275, 695, 280),
            new Spike(695, 260, 685, 265, 695, 270),
            new Lava(125, 360, 150, 10),
            new Lava(225, 80, 110, 10)],
  enemies: [new BasicEnemy(390, 474, 12, 6, 695, 360),
            new BasicEnemy(175, 174, 12, 6, 345, 145),
            new BasicEnemy(425, 54, 12, 6, 505, 395),
            new BasicEnemy(385, 180, 6, 12, 385, 385, 240, 130, 'flying')],
  goal: new Goal(35, 360, 20, 8),
  setPlayer: function() {
    player = new Player(levelNine.x, levelNine.y, levelNine.width, levelNine.height);
  },
}
var levelTen = {
  x: 60,
  y: 469,
  width: 6,
  height: 11,
  powerUp: false,
  platforms: [new Platform(40, 480, 40, 20),
              new Platform(45, 80, 5, 180),
              new Platform(0, 60, 20, 10),
              new Platform(430, 210, 60, 10),
              new Platform(350, 150, 300, 20),
              new Platform(630, 130, 20, 20),
              new Platform(540, 430, 80, 10),
              new Platform(350, 130, 20, 20),
              new Platform(490, 130, 20, 5),
              new Platform(300, 110, 40, 5),
              new Platform(100, 60, 20, 10),
              new Platform(-10, 490, 90, 10, 'bounce'),
              new Platform(290, 350, 40, 10, 'bounce'),
              new Platform(0, 260, 5, 80, 'elevator'),
              new Platform(40, 200, 5, 60, 'elevator'),
              new Platform(0, 140, 5, 60, 'elevator'),
              new Platform(40, 80, 5, 60, 'elevator'),
              new Platform(695, 0, 5, 430, 'elevator'),
              new Platform(575, 80, 5, 40, 'elevator'),
              new Platform(420, 80, 5, 40, 'elevator')],
  hazards: [new Spike(0, 225, 10, 230, 0, 235),
            new Spike(45, 165, 35, 170, 45, 175),
            new Spike(0, 95, 10, 100, 0, 105),
            new Spike(430, 170, 435, 180, 440, 170),
            new Spike(440, 170, 445, 180, 450, 170),
            new Spike(450, 170, 455, 180, 460, 170),
            new Spike(460, 170, 465, 180, 470, 170),
            new Spike(470, 170, 475, 180, 480, 170),
            new Spike(480, 170, 485, 180, 490, 170),
            new Spike(695, 0, 685, 5, 695, 10),
            new Spike(695, 10, 685, 15, 695, 20),
            new Spike(695, 20, 685, 25, 695, 30),
            new Spike(695, 30, 685, 35, 695, 40),
            new Spike(695, 40, 685, 45, 695, 50),
            new Lava(80, 490, 620, 10),
            new Lava(370, 140, 260, 10)],
  enemies: [new BasicEnemy(560, 424, 12, 6, 620, 540),
            new BasicEnemy(310, 104, 12, 6, 340, 300),
            new BasicEnemy(160, 80, 6, 12, 160, 160, 130, 20, 'flying')],
  goal: new Goal(250, 70, 20, 8),
  setPlayer: function() {
    player = new Player(levelTen.x, levelTen.y, levelTen.width, levelTen.height);
  },
}