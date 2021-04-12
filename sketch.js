
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let ground;
let tree;
let boy, boyImg;
let rock;
var slingshot;
var gameState = 'onSling';
let mango1, mango2, mango3, mango4;

function preload()
{
	boyImg = loadImage('Sprites/boy.png');
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(450,690,900,20);
	tree = new Tree(600,410,500,600);
	rock = new Rock(140,500,20);
	mango1 = new Mango(600, 330, 20, 20);
	mango2 = new Mango(660, 330, 20, 20);
	mango3 = new Mango(540, 330, 20, 20);
	mango4 = new Mango(600, 240, 20, 20);

	Engine.run(engine);

	slingshot = new Slingshot(rock.body, {x : 160, y : 560}); 
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(215);

  image(boyImg, 120, 600, 150, 300);

  detectCollisions(mango1);
  detectCollisions(mango2);
  detectCollisions(mango3);
  detectCollisions(mango4);

  ground.display();
  tree.display();
  rock.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  
  drawSprites();
 
}

function mouseDragged() {
    //if (!slingshot.isReleased && mouseIsPressed) {
    if (gameState == 'onSling') {
        Matter.Body.setPosition(rock.body, { x : mouseX, y : mouseY });
    }
  //}
}

function mouseReleased() {
    slingshot.release();
    gameState = 'launched';
    released = true;
}

function keyPressed() {
	if (keyCode == 32) {
		gameState = 'onSling';
		Matter.Body.setPosition(rock.body, { x : 50, y : 500 });
		slingshot.constraint.bodyA = (rock.body);
	}
}


function detectCollisions(mBody) {
	rBodyPos = rock.body.position;
	mBodyPos = mBody.body.position;

	var distance = dist(rBodyPos.x, rBodyPos.y, mBodyPos.x, mBodyPos.y);

	if (distance <= rock.radius + mBody.radius) {
		Matter.Body.setStatic(mBody.body, false);
	}
}


