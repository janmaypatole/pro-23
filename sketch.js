
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,garbage;
var ground;

function setup() {
	createCanvas(800, 500);
   
	
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(200,200,30,30)
    garbage = new Garbage(100,390,25,25)
	ground = new Ground(790,450,50,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  garbage.display();
 
 
}



