
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ground;
let tree;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(450,690,900,20);
	tree = new Tree(600,410,500,600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(215);

  ground.display();
  tree.display();
  
  drawSprites();
 
}



