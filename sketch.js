//variables for snake
var snake,snakeX,snakeY,X,Y;
var dir,framecount;
var gamestate;

function setup(){
  createCanvas(400,400);
  gamestate = "-";

  //create new Snake
  snake = new Snake(snakeX,snakeY);
  //pick random location for food
  snake.locate();
  //location of head
  X = 200;
  Y = 200;

  //direction of movement
  dir = "up";
  framecount = 0;
}

function draw(){
  background(220);
  //framecount
  framecount = framecount + 1;

  snake.move.x = snakeX;
  snake.move.y = snakeY;

  if(gamestate === "-"){
    fill("green");
    rect(200,200,10,10);
  }

  //if( dir = ??) then this
  if (dir === "up"){
    snakeX = 0;
    snakeY = -10;
  }
  else if (dir === "down"){
    snakeX = 0;
    snakeY = 10;
  }
  else if (dir === "left"){
    snakeX = -10;
    snakeY = 0;
  }
  else if (dir === "right"){
    snakeX = 10;
    snakeY = 0;
  }

  //moves the snake
  if(framecount % 10 === 0 && gamestate === "play"){
    snake.move();
  }

  //if gamestate is dead
  if(gamestate === "dead"){
    textSize(30);
    fill("black");
    text("GAMEOVER",100,200);
  }

  //snake functions
  //sets head
  snake.head();
  //snake will die if..
  snake.dead();
  //creates food at random food location
  snake.food();
  //grows snake if food is eaten
  snake.grow();
  //deletes tail if longer than size
  snake.remove();

  //displays the snake
  for(var i = 0; i < snake.location.length; i++){
    snake.display(i);
  }
  
  //displays score
  textSize(15);
  fill("black");
  text("Score: "+ snake.score,320,20);
}

function keyPressed(){
  //if key is pressed
  if(gamestate === "-"){
    gamestate = "play";
  }

  //fun fact: the player can turn in all directions if it's size is equal to one
  if(keyCode === LEFT_ARROW){
    if(dir != "right" || snake.size === 1){
      dir = "left";
    }
  }
  else if(keyCode === RIGHT_ARROW ){
    if(dir != "left" || snake.size === 1){
      dir = "right";
    }
  }
  else if(keyCode === UP_ARROW){
    if(dir != "down" || snake.size === 1){
      dir = "up";
    }
  }
  else if(keyCode === DOWN_ARROW){
    if(dir != "up" || snake.size === 1){
      dir =  "down";
    }
  }
  else if(keyCode === 82 ){
    snake.location = [];
    X = 200;
    Y = 200;

    snake.x = 200;
    snake.y = 200;

    snake.move.x = snakeX;
    snake.move.y = snakeY;

    snake.location = [snake.x,snake.y];

    snake.size = 1;

    snake.headX = 200;
    snake.headY = 200;

    snake.score = 0;

    gamestate = "-";

    snake.locate();
  }
}
