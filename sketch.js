var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var PLAY=1
var END=0
var gamestate=PLAY; 
var score=0


function preload(){
  
  
  monkey_running=
  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(900,400);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  
   obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  
}


function draw() {
background("white");
  text("Survival Time: " + score, 200, 50);

  if(gamestate===PLAY)
    {
  if(ground.x>0){
    ground.x=ground.width/2;
  }
score=score+Math.round(getFrameRate()/60);
  if(keyDown("space") && monkey.y >= 300)
 {
   monkey.velocityY=-17;
 }    
  monkey.velocityY=monkey.velocityY + 0.8;
  
      if(monkey.isTouching(FoodGroup))
        {
          FoodGroup.destroyEach();
        }
  
  spawnfood();
  spawnobstacles();
  //console.log(monkey);
    } 
  
  
  monkey.collide(ground);
 console.log(frameCount)
  drawSprites();
  
}

function spawnfood()
{
  if(frameCount % 140===0)
    {
      banana=createSprite(600,(random(120,200)));
      banana.addImage(bananaImage)       
      banana.scale = 0.1;
      banana.velocityX=-4
      banana.lifetime=200
      FoodGroup.add(banana)
    }
}
     

function spawnobstacles()
{
  if(frameCount % 300===0)
    {
      obstacle=createSprite((random(200,600)),325);
      obstacle.addImage(obstacleImage);       
      obstacle.scale = 0.150;
      obstacle.velocityX=-4
      obstacle.lifetime=200
      obstacleGroup.add(obstacle);
    }
}






