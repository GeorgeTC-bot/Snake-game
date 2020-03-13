class Snake{
    constructor(x,y){
        //position of player
        this.x = 200;
        this.y = 200;

        //move by?
        this.move.x = x;
        this.move.y = y;

        //location of other squares
        this.location = [this.x,this.y];

        //size of player
        this.size = 1;

        //head location
        this.headX = 200;
        this.headY = 200;

        this.score = 0;
    }
    //display snake
    display(x){
        fill("green");
        noStroke();
        rect(this.location[x][0],this.location[x][1],10,10);
    }
    //move snake
    move(){
        this.x = this.x + this.move.x;
        this.y = this.y + this.move.y;
        X = X + this.move.x;
        Y = Y + this.move.y;
        this.location.push([this.x,this.y]);
    }

    //remove extras
    remove(){
        if(this.location.length > this.size){
            this.location.splice(0,1);
        }
    }

    //locate head
    head(){
        this.headX = X;
        this.headY = Y;
    }

    //dead
    dead(){
        for(var i = 0; i < this.location.length - 1; i++){
            var bod = this.location[i];
            var x = bod[0];
            var y = bod[1];
            if(this.headX === x && this.headY === y){
                gamestate = "dead";
            }
        }
        if(this.headX >= 400 || this.headY >= 400 || this.headX < 0 || this.headY < 0){
            gamestate = "dead";
        }
    }

    //locate location for food
    locate(){
        var rX = Math.round(random(0,390));
        var rY = Math.round(random(0,390));
        rX = Math.round((rX/10))*10;
        rY = Math.round((rY/10))*10;
        this.foodX = rX;
        this.foodY = rY;
    }

    //create food
    food(){
        fill("red");
        rect(this.foodX,this.foodY,10,10);
    }
 
    //grow the snake
    grow(){
        for(var i = 0; i < this.location.length - 1; i++){

            if(this.headX === this.foodX && this.headY === this.foodY){
                this.size = this.size + 1;
                this.locate();
                this.score += 1;
            }
        }
    }
}