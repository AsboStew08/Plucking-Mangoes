
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeImg;
var boyImg;
var mango1,mango2,mango3,mango4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1 = new Mango(760,80,10,10);
mango2 = new Mango(770,80,10,10);
mango3 = new Mango(780,80,10,10);
mango4 = new Mango(790,80,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

  drawSprites();
 
}



