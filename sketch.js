var player1_img_1, player1_img_2;
var player2_img_1, player2_img_2;
var football_img, background_img;
var canvas;
var timeoutHandle, counter;
var player1, player2, football;
var side1, side2, side3, side4;
var goal1, goal2;
var score = 0;

function preload() {
  player1_img_1 = loadImage("assets/player1(1).png");
  player1_img_2 = loadImage("assets/player1(2).png");
  player2_img_1 = loadImage("assets/player2(1).png");
  player2_img_2 = loadImage("assets/player2(2).png");
  football_img = loadImage("assets/football.png");
  background_img = loadImage("assets/Background.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  player1 = createSprite(180, 313, 20, 20);
  player1.addImage(player1_img_2);
  player1.scale = 1;
  player2 = createSprite(1200, 313, 20, 20);
  player2.scale = 1;
  player2.addImage(player2_img_2);
  football = createSprite(680, 304, 20, 20);
  football.addImage(football_img);
  football.scale = 0.2
  side1 = createSprite(680, 35, 1280, 5);
  side1.visible = false;
  side2 = createSprite(680, 590, 1280, 5);
  side2.visible = false;
  side3 = createSprite(45, 310, 5, 555);
  side3.visible = false;
  side4 = createSprite(1320, 310, 5, 555);
  side4.visible = false;
  goal1 = createSprite(46, 312, 5, 65);
  goal1.visible = false;
  goal2 = createSprite(1319, 312 , 5, 65);
  goal2.visible = false;
}

function draw() {
  background(180);
  image(background_img, 0, 0, width, height);
  time = counter.innerHTML;
  console.log(time);


  if(keyDown("space")) {
    football.velocityX = 5;
    football.velocityY = 5;
  }
   player2.y = football.y;
  
  if(keyDown("UP_ARROW")){
    player1.y = player1.y-30
  }

  if(keyDown("DOWN_ARROW")){
   player1.y = player1.y+30
  }
  

  if(keyDown("LEFT_ARROW")){
    player1.x = player1.x-30
  }

  if(keyDown("RIGHT_ARROW")){
   player1.x = player1.x+30
  }

  football.bounceOff(player1);
  football.bounceOff(player2);
  football.bounceOff(side1);
  football.bounceOff(side2);
  football.bounceOff(side3);
  football.bounceOff(side4);

  player1.collide(side1);
  player1.collide(side2);
  player1.collide(side3);
  player1.collide(side4);

  if(football.isTouching(goal2)) {
    score = score+1;
  }

  if(football.isTouching(goal1)) {
    score = score-1;
  }

  if(score ===(3)) {
    fill("cyan");
    textSize(75);
    text("You Win!", 550, 310);
    football.velocityX = 0;
    football.velocityY = 0;
    football(680, 304);
  }

  if(score ===(-3)) {
    fill("cyan");
    textSize(75);
    text("You Lose!", 550, 310);
    football.velocityX = 0;
    football.velocityY = 0;
    football(680, 304);
  }

  drawSprites();
  /*fill("red");
  textSize(25);
  text(mouseX+","+mouseY, mouseX, mouseY);*/

  fill("black");
  textSize(25);
  text("Score: "+score, 635, 25);
}

function countdown(minutes, seconds) {
  var seconds = 60;
  var mins = minutes

  function tick() {
    counter = document.getElementById("timer");
    counter.style.position="absolute"
    var current_minutes = mins - 1
    seconds--;
    counter.innerHTML =
      current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      timeoutHandle = setTimeout(tick, 1000);
    } else {

      if (mins > 1) {

        setTimeout(function() {
          countdown(mins - 1);
        }, 1000);

      }
    }
  }
 tick();
}
countdown(3);




