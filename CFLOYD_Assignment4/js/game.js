//The first two integers are the dimensiona of the game screen as x and y values 
var game = new Phaser .Game(800,600,Phaser.AUTO,'gameDiv');

//Adding game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('intro', introState);
game.state.add('park', parkState);

//Start game by calling boot state
game.state.start('boot');