var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var down,downIMG;
var people,peopleIMG;
var ground2;
var lander1,lander2,lander3;
var cloud1,cloudIMG1,cloud2,cloudIMG2;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	downIMG=loadImage("down.jpg");
	peopleIMG=loadImage("people.png");
	cloudIMG1=loadImage("cloud.jpg");
	cloudIMG2=loadImage("cloud.jpg");
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
lander1=createSprite(450,610,20,100);
lander1.shapeColor="red";

lander2=createSprite(360,650,200,20);
lander2.shapeColor="red";

cloud1=createSprite(100,100,10,10);
cloud1.addImage(cloudIMG1);
cloud1.scale=0.2;

cloud2=createSprite(620,120,10,10);
cloud2.addImage(cloudIMG2);
cloud2.scale=0.2;


lander3=createSprite(270,610,20,100);
lander3.shapeColor="red";

    packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6 ;

	people=createSprite(620,600,10,10);
	people.addImage(peopleIMG);
	people.scale=0.3;

	groundSprite=createSprite(width/2, height-35,width,10);
	groundSprite.shapeColor="darkGreen";

	ground2=createSprite(width/2,height-10,width,50);
	ground2.shapeColor="green";

	down=createSprite(400,350,10,10);
    down.addImage(downIMG)
	down.scale=0.5;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue")
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(packageSprite.y>600) {
	  textSize(30);
	  fill("black");
	text("MISSION ACCOMPLISHED!!!!!",230,350);
  }
 
  drawSprites();
  textSize(60);
  fill("brown");
  text("SUPPLY MISSION",150,50)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	down.visible=false;
	}
}