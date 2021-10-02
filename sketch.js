const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  playerBase = Bodies.rectangle(250,300,100, 200);
  //create player body
  player = Bodies.rectangle(270, playerBase.position.y -140, 100, 180);


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(playerimage, player.position.x, player.position.y, 100, 150);
  //show the playerbase image using image() function
  image(baseimage, playerBase.position.x, playerBase.position.y, 200, 100)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
