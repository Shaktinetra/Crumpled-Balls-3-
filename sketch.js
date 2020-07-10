var paper, trash, ground, world, engine, launcher;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1000, 700);

	ellipseMode(CENTER);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper (50, 500);
	ground = new Ground();
	trash = new Trash();	
	launcher = new Launcher(paper.body, {x: 150, y: 300});
	
	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(255);
   	paper.display();
	ground.display();
	trash.display();
	launcher.display();
	Engine.update(engine);
}

function mouseDragged() {
	Matter.Body.setPosition(paper.body, {x:mouseX, y: mouseY});
 }
 
 function mouseReleased() {
	 launcher.fly();
 }
