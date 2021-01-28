const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	chhat =new Roof(400,30,600,40)
	impr1 = new Roof(305,15,150, 30)
	impr2 = new Roof(200,15,150, 30)
	impr3 =new Roof(495, 15, 150, 30)
	impr4 =new Roof(600, 15, 150, 30)
	bob1 =new Bob(400, 380, 100)
	bob2 =new Bob(300, 380, 100)
	bob3 =new Bob(200, 380, 100)
	bob4 =new Bob(500, 380, 100)
	bob5 =new Bob(600, 380, 100)
	zameen= new Roof(400, 530, 600, 40)
	rassi1 = new Rope(bob1.body, chhat.body, 0, 0)
	rassi2 = new Rope(bob2.body, impr1.body, 0, 0)
	rassi3= new Rope(bob3.body, impr2.body, 0, 0)
	rassi4= new Rope(bob4.body, impr3.body, 0, 0)
	rassi5= new Rope(bob5.body, impr4.body, 0, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  chhat.display();
  impr1.display();
  impr2.display();
  impr3.display();
  impr4.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  zameen.display();
  rassi1.display();
  rassi2.display();
  rassi3.display();
  rassi4.display();
  rassi5.display();

  drawSprites();
 
}



