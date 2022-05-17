var loadState = {
    
    preload: function(){
        
        //add loading label to screen
        var loadingLabel = game.add.text(80,150,'loading...',{font: '30px Courier',fill:'#ffffff'});
        
        //load all assets
        game.load.image('player', 'assets/player.png');
        game.load.image('win', 'assets/win.png');
        
        game.load.image('exitno','assets/fenceoff.png');
        game.load.image('introPic','assets/jurassicParkIntro.png');
        
        game.load.image('background','assets/jurassicParkBG2.png');
        game.load.image('button1','assets/button1.png');   
        game.load.image('button12','assets/button12.png'); 
        game.load.image('feedingButton','assets/feedingButton.png'); 
        game.load.image('powerall','assets/allPower.png'); 
        game.load.image('warning','assets/warning.png'); 
        
        game.load.image('dino1','assets/dino1.png');
        game.load.image('dino2','assets/dino2.png');
        game.load.image('dino3','assets/dino3.png');
        game.load.image('dino4','assets/dino4.png');
        
        game.load.image('carButton','assets/carButton.png');
        game.load.image('carButton2','assets/carButton2.png');
        game.load.image('carButton3','assets/carButton3.png');
        game.load.image('carAll','assets/carAll.png');
        
        game.load.image('car1','assets/car.png');
        game.load.image('car2','assets/car2.png');
        game.load.image('car3','assets/car3.png');
        
        game.load.image('carsButton','assets/carButtonFinal.png');
        game.load.image('feedback','assets/feedback.png');
        game.load.image('exit','assets/exitButton.png');
        game.load.image('start','assets/startbutton.png');
    },
    
    
    create: function (){
        
        //call the menu state
        game.state.start('intro');
        //game.state.start('park');
        
    }
    
}