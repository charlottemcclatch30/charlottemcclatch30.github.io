let l = 5;
let rectX1 = 1;
let rectY1 = 10;
let startY1 = 0;
let Ystep1 = 120;

let m = 5;
let rectY2 = 200;
let rectX2 = 1;
let startY2 = 90;
let Ystep2 = 100;

let n = 6;
let rectY3 = 10;
let rectX3 = 1;
let startY3 = 30;
let Ystep3 = 95;

let BarWidth = 80;
let BarHeight = 20;

let circleX = 300;
let circleY = 0;

let GameOver = false;
let Won = false;
let HighScore;
let score = 0;
function setup() {
  createCanvas(600, 600);
  HighScore = JSON.parse(localStorage.getItem("HighScore"));
  if (HighScore === null) {
    HighScore = [];
  }
}

function draw() {
  if (!GameOver && !Won) {
    background(144, 213, 255);
    fill("white");
    stroke("white");

    for (let i = 1; i < l; i++) {
      let rectY1 = startY1 + Ystep1 * i;
      rect(rectX1, rectY1, BarWidth, BarHeight);
      circle(rectX1 + 15, rectY1 + 4, 30);
      circle(rectX1 + 40, rectY1, 35);
      circle(rectX1 + 65, rectY1 + 4, 30);
      let collides1 =
        circleY + 12.5 >= rectY1 &&
        circleY - 12.5 <= rectY1 + BarHeight &&
        circleX + 12.5 >= rectX1 &&
        circleX - 12.5 <= rectX1 + BarWidth;
      if (collides1) {
        circleY = 0;
        circleY = 300;
        GameOver = true;
      }
    }
    rectX1 = rectX1 + 1.25;
    if (rectX1 > 600) {
      rectX1 = 0;
    }

    if (circleY >= 555) {
      Won = true;
    }

    for (let i = 1; i < m; i++) {
      let rectY2 = startY2 + Ystep2 * i;
      rect(rectX2, rectY2, BarWidth, BarHeight);
      circle(rectX2 + 15, rectY2 + 4, 30);
      circle(rectX2 + 40, rectY2, 35);
      circle(rectX2 + 65, rectY2 + 4, 30);
      let collides2 =
        circleY + 12.5 >= rectY2 &&
        circleY - 12.5 <= rectY2 + BarHeight &&
        circleX + 12.5 >= rectX2 &&
        circleX - 12.5 <= rectX2 + BarWidth;
      if (collides2) {
        circleY = 0;
        circleX = 300;
        GameOver = true;
      }
    }
    if (rectX2 < 600) {
      rectX2 = rectX2 + 2;
    }
    if (rectX2 > 600) {
      rectX2 = 1;
    }

    for (let i = 1; i < n; i++) {
      let rectY3 = startY3 + Ystep3 * i;
      rect(rectX3, rectY3, BarWidth, BarHeight);
      circle(rectX3 + 15, rectY3 + 4, 30);
      circle(rectX3 + 40, rectY3, 35);
      circle(rectX3 + 65, rectY3 + 4, 30);
      let collides3 =
        circleY + 12.5 >= rectY3 &&
        circleY - 12.5 <= rectY3 + BarHeight &&
        circleX + 12.5 >= rectX3 &&
        circleX - 12.5 <= rectX3 + BarWidth;
      if (collides3) {
        circleY = 0;
        circleX = 300;
        GameOver = true;
      }
    }
    rectX3 = rectX3 + 1;
    if (rectX3 >= 600) {
      rectX3 = 0.75;
    }

    stroke("blue");
    fill("blue");
    circle(circleX, circleY, 25);
    //circleY = circleY + 1;

    if (circleY > 599) {
      circleY = 5;
    }

    if (keyIsDown(UP_ARROW)) {
      circleY = circleY - 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      circleX = circleX + 1;
    }
    if (keyIsDown(LEFT_ARROW)) {
      circleX = circleX - 1;
    }
    if (keyIsDown(DOWN_ARROW)) {
      circleY = circleY + 1;
    }
    if (circleY == 0) {
      circleY = 0;
    }
    if (circleY >= 8) {
      circleY = circleY + 1;
    }
    stroke("blue");
    fill("blue");
    rect(0, 550, 600, 50);
    stroke("blue");
  } else {
    background("red");
    fill("white");
    textAlign(CENTER, CENTER);
    textSize(50);
    text("Game Over", 300, 270);

    textSize(25);
    text("Press ENTER to restart", 300, 330);

    if (keyIsDown(ENTER)) {
      GameOver = false;
    }

    if (Won) {
      background(144, 213, 255);
      fill("blue");
      textAlign(CENTER, CENTER);
      textSize(50);
      text("You Won!", 300, 290);
      textSize(25);
      text("Press ENTER to restart", 300, 350);

      if (keyIsDown(ENTER)) {
        Won = false;
      }
    }
    if (keyIsDown(ENTER)) {
      score += 2;
    }

    circleX = 300;
    circleY = 0;

    rectX1 = 1;
    rectX2 = 1;
    rectX3 = 1;
  }
  fill("black");
  textSize(20);
  text("score: " + score, 30, 40);
}

