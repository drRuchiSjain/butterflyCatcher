
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImg;
var ground;
var butterfly=[];

function preload()
{
backgroundImg = loadImage("background.jpg");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600, 700, 1200, 20);
	
	girl = new Girl(400,600,150,200);
	
	for(i=0;i<5;i++){
    Butterflies[i] = Bodies.circle(random(400) , random(200) , 5 , {restitution:0.5});
	World.add(world, Butterflies[i]);
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
 ground.display(); 
  girl.display();

  

  drawSprites();
 
}
function keyPressed() {
  
	if(keyCode === RIGHT_ARROW){
		   girl.x = girl.x + 20;
	}
	
		if(keyCode === LEFT_ARROW){
		   girl.x = girl.x - 20;
	}
}


