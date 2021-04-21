var wall,car1,speed,weight

function setup() {
  createCanvas(800,400);
  wall=createSprite(780,200,10,50);
  wall.shapeColor="brown";
  car1=createSprite(5,200,30,10);
  car1.shapeColor="white";

  head1= createSprite(5,200,10,120);
  speed=random(50,90);
  weight=random(400,1500);
  car1.velocityX = speed;
  
 wall1 =  createSprite(400,140,800,10);
 wall2 =  createSprite(400,260,800,10);
}

function draw() {
  background("black");  
  drawSprites();




  if(car1.collide(wall)){
    car1.velocityX = 0
    var deformation = 0.5*speed*weight/22509;

    if(deformation > 180){
      car1.shapeColor="red";
    }

    if(deformation >= 80 && deformation <= 180){
      car1.shapeColor="yellow";
    }

    if(deformation > 80){
      car1.shapeColor="green";
    }
    
  }

}