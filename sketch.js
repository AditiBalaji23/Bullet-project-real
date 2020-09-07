var bullet,wall ; 
var thickness,speed,weight ; 

function setup() {
 var canvas =  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);

 bullet =  createSprite(50,200,50,50);
 bullet.shapeColor = color(0,0,0);
 
 wall = createSprite(1000,200,thickness,height/2);
 wall.shapeColor = color (0,0,0);
}

function hasCollided(bullet,wall) {
  bulletRightEdge=bullet.x + bullet.width ; 
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true ; 
  }
return false ; 
}

function draw() {
  background(80,80,80); 
  bullet.velocityX = speed ;  
if(hasCollided(bullet,wall)) {


 
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness); 

if(damage>10) {
  wall.shapeColor = color(255,0,0);
  //red.
}
if(damage<10) { 
  wall.shapeColor = color(0,255,0);
  //green.
}

}

drawSprites();
}