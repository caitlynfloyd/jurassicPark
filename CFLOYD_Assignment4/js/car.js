class Car {
    
    constructor (name,x,y,image1){
        this.name = name;
        this.inMotion = true;
        
        this.car1 = game.add.sprite(x,y,image1);
        game.physics.enable(this.car1, Phaser.Physics.ARCADE);
    
    }
    
    circleTrack(){
        
        if(this.car1.body.x >= 210 && this.car1.body.x<565 && this.car1.body.y == 160){
            this.car1.body.velocity.x = 45;
        } else if(this.car1.body.y >= 160 && this.car1.body.y <410 && this.car1.body.x == 565){
            this.car1.body.velocity.y = 45;
        } else if(this.car1.body.x > 210 && this.car1.body.x <=565 && this.car1.body.y == 410){
            this.car1.body.velocity.x = -45;
        } else if(this.car1.body.y >= 160 && this.car1.body.y <=410 && this.car1.body.x == 210){
            this.car1.body.velocity.y = -45;
        } else {
            this.car1.body.velocity.x = 0;
            this.car1.body.velocity.y = 0;
        }
        
        if(this.car1.body.x >=565){
            this.car1.body.x = 565;
        }
        if(this.car1.body.y >= 410){
            this.car1.body.y = 410;
        }
        if(this.car1.body.x <= 210){
            this.car1.body.x = 210;
        }
        if(this.car1.body.y <= 160){
            this.car1.body.y = 160;
        }
    }
    

    
    stop(){
        this.car1.body.velocity.x = 0;
        this.car1.body.velocity.y = 0;
    }
    
    changeStatus(){
        if(this.inMotion){
            this.inMotion = false;
        } else{
            this.inMotion = true;
        }
    }
    
}