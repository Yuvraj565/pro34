const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;

var blower;
var ball;
var ground;
var ball_img;

function preload() {
  ball_img = loadImage("cannonball.png")
}

function setup() {
  createCanvas(600, 700);

  engine = Engine.create();
  world = engine.world;

  blower = createImg('fan.png');
  blower.position(20, 370);
  blower.size(120, 120);
  blower.mouseClicked(air_blow)

  ball = Bodies.circle(300, 300, 35)

  ground = new Ground(300, 690, 700 , 40);


}


function draw() {
  background(140)

  push();
  imageMode(CENTER);
  if (ball != null) {
    image(ball_img, ball.position.x, ball.position.y, 70, 70);
  }
  pop();

  if (ball != null && ball.position.y >= 630) {
    ball = null;
  }

  ground.show();

}

function air_blow() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -20 });
}