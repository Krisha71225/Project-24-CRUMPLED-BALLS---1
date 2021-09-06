
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, height, 1200, 20);
	paper = new Paper(200, 200, 30);

	Box1 = new Dustbin(490, 630, 20, 100);
	Box2 = new Dustbin(700, 630, 20, 100);
	Box3 = new Dustbin(600, 680, 200, 20);

	Engine.run(engine);

}



function draw() {
	ellipseMode(CENTER);
	background(0);

	ground.display();
	paper.display();
	Box1.display();
	Box2.display();
	Box3.display();



	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 50, y: -60 })
	}
}


