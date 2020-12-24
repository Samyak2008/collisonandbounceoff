var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30); 
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}
function draw() {
  background(0); 

  //add(8,6)

  console.log(movingRect.x-fixedRect.x);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
  }else{
     movingRect.shapeColor = "blue";
     gameObject2.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect);

 
  drawSprites();
}

