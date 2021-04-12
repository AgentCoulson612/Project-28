
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = 'onSling';
let projectile;

function preload()
{
	boyImg = loadImage('Sprites/boy.png');
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	projectile = new Projectile(400, 350, 20)

	Engine.run(engine);

	slingshot = new Slingshot(projectile.body, {x : 160, y : 560}); 
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(215);

  projectile.display()
  slingshot.display();

  Matter.Body.setStatic(projectile.body, false);
  
  drawSprites();
 
}

function mouseDragged() {
    //if (!slingshot.isReleased && mouseIsPressed) {
    if (gameState == 'onSling') {
        Matter.Body.setPosition(projectile.body, { x : mouseX, y : mouseY });
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
		Matter.Body.setPosition(projectile.body, { x : 50, y : 500 });
		slingshot.constraint.bodyA = (projectile.body);
		slingshot.catch();
	}
}


// function detectCollisions(mBody) {
// 	rBodyPos = rock.body.position;
// 	mBodyPos = mBody.body.position;

// 	var distance = dist(rBodyPos.x, rBodyPos.y, mBodyPos.x, mBodyPos.y);

// 	if (distance <= rock.radius + mBody.radius) {
// 		Matter.Body.setStatic(mBody.body, false);
// 	}
// }


