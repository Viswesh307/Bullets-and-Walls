var bullet,wall;
var thickness;
var speed,weight;
var bulletRightEdge;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,50,10);


  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=80,80,80;

  bullet.velocityX=speed; 
  //bullet.weight=weight;

  thickness=random(22,83);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(wall.x-bullet.x < (bullet.width+wall.width)/3){
    bullet.velocityX=0
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (deformation>10)
    {
      wall.shapeColor=color(255,0,0);
    
    }
    
    if (deformation<10)
    {
      wall.shapeColor=color(0,255,0);
    
    }

  if(bullet.collide(wall)){
    bullet.velocityX=0;
    bullet.velocityY=0;
  }
  
}


  
}
