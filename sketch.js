const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var paper_ball;
var dustbin1,dustbin2,dustbin3;
var dustbin_IMG;
var ground;

function setup() {
	createCanvas(800,400);
	background("black");

	engine = Engine.create();
	world = engine.world;
  ground = new Ground(600,height,1200,20);
  paper_ball = new PaperBall(200,300);
  dustbin_IMG = new DustbinImg(590,315);
  dustbin1 = new Dustbin(590,382,83,15);
	dustbin2 = new Dustbin(541,315,15,149);
  dustbin3 = new Dustbin(639,315,15,149);
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  paper_ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin_IMG.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:108,y:-323});
  }
}



