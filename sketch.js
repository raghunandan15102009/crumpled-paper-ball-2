
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,gd,box1,box,box2,dust;

function preload (){
  dustImg=loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;
  dust=createSprite(1000,325,50,50);
  dust.addImage(dustImg); 
  dust.scale=0.5;
  ball=new Paper(100,0,70);
  gd=new Ground(600,400,1200,20);
  box1=new Box(1000,400,140,20);
  box=new Box(944,320,20,160);
  box2=new Box(1054,320,20,160);
	Engine.run(engine);
  
}


function draw() {
  background(255);
  dust.display();
  ball.display();
  gd.display();
  box1.display();
  box.display();
  box2.display();
  if(keyDown("UP_ARROW")){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
  }
  drawSprites();
}



