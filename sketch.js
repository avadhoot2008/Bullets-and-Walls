var wall,thickness;

var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = "white";
  wall = createSprite (1200, 200, 60, 100);
  
  speed = random(55,90);
  weight = random(400,1500);

  thickness = random(22,83);

  bullet.velocityX = speed;

  wall.width = thickness;
}

function draw() {

  background("black");  

  if (hasCollided(bullet, wall)) {
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed * speed/(thickness*thickness*thickness);
  if (deformation>10) {
  wall.shapeColor = "red";
  }
  if (deformation<10) {
  wall.shapeColor = "green";
  }
} 

  drawSprites();
}

function hasCollided(){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}