var introState = {
    
    create: function() {
        
        //display the name of the game
        var nameLabel = game.add.text(80,80,'Intro',{font: '25px Arial',fill: '#ffffff'});
        
        game.add.sprite(0,0,'introPic');
        
        this.button = game.add.button(150, 520, 'start', this.actionOnClick, this, 2, 1, 0);
        
        this.startText = game.add.text(265, 530, "Click Here to Start", {
            font: "24px Courier",
            fill: "#157026",
            align: "center"
        });
        
    },
    
    actionOnClick: function(){
        game.state.start('park');
    }
    
}