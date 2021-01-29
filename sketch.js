
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var box;
var iron;
var rubber;
var Sand1,Sand2,Sand3,Sand4;




function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer = new Hammer(100,20);
ground = new Ground(700,height,1400,20);
box = new Box(700,320,70,70);
iron = new Iron(500,300,40,90);
rubber = new Rubber(600,340,50);
Sand1 = new sand(300,280,3);
Sand2 = new sand(200,240,3);
Sand3 = new sand(230,250,3);
Sand4 = new sand(120,300,3);

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(155);
  hammer.display();
  ground.display();
  box.display();
  iron.display();
  rubber.display();
  Sand1.display();
  Sand2.display();
  Sand3.display();
  Sand4.display();
  
  drawSprites();
 
}



