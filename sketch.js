
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

dustbin=new Dustbin(800,750,100,100)
paper=new Paper(100,790,50)
ground=new Ground(600,800,1200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

paper.display()
ground.display()
dustbin.display()

  drawSprites();
 

}

function keyPressed(){

if(keyDown === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

}

}

