var score=0;

var spaceship,alien,ground,space;

var spaceshipImg,alienImg,groundImg,spaceImg;

var laser,blast;
var laserImg,blastImg;

var alienGroup;

var life = 3;
var gamestate=1;

function preload() {
  spaceshipImg=loadImage("spaceship.png");
  alienImg=loadImage("alien.png");
  groundImg=loadImage("ground.png");;
  laserImg=loadImage("laser.png");
  blast=loadImage("blast.png");
  spaceImg=loadImage("space.png");
}
function setup() {
  createCanvas(1200,800);

  ground=createSprite(600,800,1200,50)
  ground.addImage(groundImg);
  ground.scale=4

  spaceship=createSprite(600,700,50,50);
  spaceship.addImage(spaceshipImg);
  spaceship.scale=0.4;

  Scoreboard=createElement();
  LifeCount=createElement();
}

function draw() {
  background(spaceImg);  


  drawSprites();
}