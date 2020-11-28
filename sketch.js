
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground, box1;

function preload()
{
	
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;



	ball = new Ball(200,590,70);
	
	ground = new Ground(600,height,1200,20)


	box1 = new Box(880,500,200, 200);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  box1.display();


ball.display();
ground.display();



keyPressed();
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body, ball.body.position ,{x:1.5, y:-1.5})


}

}


