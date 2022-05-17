var parkState = {

    create: function () {

        // add background
        game.add.sprite(0, 0, 'background');

        //this.button1 = game.add.button(0, 0, 'pen', this.actionOnClick, this, 2, 1, 0);

        //red warning fence power
        this.feedback1 = game.add.sprite(-200, 0, 'feedback');
        this.feedback2 = game.add.sprite(800, 0, 'feedback');
        this.feedback3 = game.add.sprite(-200, 450, 'feedback');
        this.feedback4 = game.add.sprite(800, 450, 'feedback');

        game.add.sprite(60, 35, 'dino1');
        this.dino1Text = game.add.text(40, 10, "Brontosaurus", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        game.add.sprite(640, 35, 'dino2');
        this.dino2Text = game.add.text(640, 10, "Stegosaurus", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        game.add.sprite(60, 465, 'dino3');
        this.dino3Text = game.add.text(75, 570, "T-rex", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        game.add.sprite(645, 465, 'dino4');
        this.dino4Text = game.add.text(645, 570, "Triceratops", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        game.add.sprite(0, 250, 'warning');



        //give the player instructions
        //var startLabel = game.add.text(80,game.world.height-80,'press the "M" key for menu', {font: '25px Arial', fill: '#ffffff'});


        this.button = game.add.button(110, 155, 'button12', this.actionOnClick, this, 2, 1, 0);
        this.button2 = game.add.button(710, 155, 'button12', this.actionOnClick2, this, 2, 1, 0);
        this.button3 = game.add.button(110, 415, 'button12', this.actionOnClick3, this, 2, 1, 0);
        this.button4 = game.add.button(710, 415, 'button12', this.actionOnClick4, this, 2, 1, 0);
        this.allPower = game.add.button(737, 285, 'powerall', this.actionOnClick5, this, 2, 1, 0);

        //prep keyboard so player can move the sprite around
        this.keyboard = game.input.keyboard;

        this.fence1Text = game.add.text(40, 160, "Power:", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence1StatusText = game.add.text(115, 160, "ON", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence2Text = game.add.text(640, 160, "Power:", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence2StatusText = game.add.text(715, 160, "ON", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence3Text = game.add.text(40, 420, "Power:", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence3StatusText = game.add.text(115, 420, "ON", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence4Text = game.add.text(640, 420, "Power:", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence4StatusText = game.add.text(715, 420, "ON", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fenceAllText = game.add.text(615, 290, "Turn All Power:", {
            font: "13px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.powerAllStatus = game.add.text(740, 290, "ON", {
            font: "13px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence1HungerText = game.add.text(210, 35, "Feeding:", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence2HungerText = game.add.text(510, 35, "Feeding:", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence3HungerText = game.add.text(210, 485, "Feeding:", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.fence4HungerText = game.add.text(510, 485, "Feeding:", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });





        //define the w key
        var mkey = game.input.keyboard.addKey(Phaser.Keyboard.M);

        //when the player presses the W key, call start function
        mkey.onDown.addOnce(this.menu, this);

        this.akey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.skey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.ekey = game.input.keyboard.addKey(Phaser.Keyboard.E);

        this.canClick = true;

        this.fence1 = new Fence("trex");
        this.fence2 = new Fence("idk");
        this.fence3 = new Fence("a");
        this.fence4 = new Fence('b');


        this.car11 = new Car('one', 210, 160, 'car1');
        this.car2 = new Car('two', 565, 410, 'car2');
        this.car3 = new Car('three', 260, 410, 'car3');

        this.carButton = game.add.button(295, 275, 'carsButton', this.carAction, this, 2, 1, 0);
        this.carButton2 = game.add.button(425, 275, 'carsButton', this.carAction2, this, 2, 1, 0);
        this.carButton3 = game.add.button(295, 345, 'carsButton', this.carAction3, this, 2, 1, 0);
        this.carButton4 = game.add.button(425, 345, 'carsButton', this.carAllAction, this, 2, 1, 0);

        this.car1Label = game.add.text(310, 250, "Car 1", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.car2Label = game.add.text(435, 250, "Car 2", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.car3Label = game.add.text(310, 320, "Car 3", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.car4Label = game.add.text(450, 320, "All", {
            font: "18px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.car1Text = game.add.text(305, 280, "Stop", {
            font: "20px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.car2Text = game.add.text(435, 280, "Stop", {
            font: "20px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.car3Text = game.add.text(305, 350, "Stop", {
            font: "20px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.carAllText = game.add.text(430, 353, "  STOP ALL", {
            font: "13px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.exitButton = game.add.button(375, 10, 'exit', this.exitOnClick, this, 2, 1, 0);
        this.exitText = game.add.text(383, 17, "EXIT", {
            font: "13px Courier",
            //fill: "#ffffff",
            align: "center"
        });

        this.hunger1Button = game.add.button(205, 60, 'feedingButton', this.hunger1, this, 2, 1, 0);
        this.hunger2Button = game.add.button(505, 60, 'feedingButton', this.hunger2, this, 2, 1, 0);
        this.hunger3Button = game.add.button(205, 510, 'feedingButton', this.hunger3, this, 2, 1, 0);
        this.hunger4Button = game.add.button(505, 510, 'feedingButton', this.hunger4, this, 2, 1, 0);

        this.hunger1Text = game.add.text(215, 72, "Hungry", {
            font: "20px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.hunger2Text = game.add.text(515, 72, "Hungry", {
            font: "20px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.hunger3Text = game.add.text(215, 522, "Hungry", {
            font: "20px Courier",
            fill: "#ffffff",
            align: "center"
        });

        this.hunger4Text = game.add.text(515, 522, "Hungry", {
            font: "20px Courier",
            fill: "#ffffff",
            align: "center"
        });


        this.canClickH = true;
        this.canClickH2 = true;
        this.canClickH3 = true;
        this.canClickH4 = true;

        this.warningSprite = game.add.sprite(1500, 1200, 'exitno');

    },

    update: function () {


        if (this.car11.inMotion) {
            this.car11.circleTrack();
        } else {
            this.car11.stop();
        }

        if (this.car2.inMotion) {
            this.car2.circleTrack();
        } else {
            this.car2.stop();
        }

        if (this.car3.inMotion) {
            this.car3.circleTrack();
        } else {
            this.car3.stop();
        }

        if (this.fence1.power) {
            this.fence1StatusText.text = "ON"
            this.feedback1.x = -200;
        } else {
            this.fence1StatusText.text = "OFF"
            this.feedback1.x = 0;
        }

        if (this.fence2.power) {
            this.fence2StatusText.text = "ON"
            this.feedback2.x = 800;
        } else {
            this.fence2StatusText.text = "OFF"
            this.feedback2.x = 600;
        }

        if (this.fence3.power) {
            this.fence3StatusText.text = "ON"
            this.feedback3.x = -200;
        } else {
            this.fence3StatusText.text = "OFF"
            this.feedback3.x = 0;
        }

        if (this.fence4.power) {
            this.fence4StatusText.text = "ON"
            this.feedback4.x = 800;
        } else {
            this.fence4StatusText.text = "OFF"
            this.feedback4.x = 600;
        }

        if (this.fence1.power && this.fence2.power && this.fence3.power && this.fence4.power) {
            this.powerAllStatus.text = "OFF";
        } else {
            this.powerAllStatus.text = "ON";
        }

        if (this.car11.inMotion) {
            this.car1Text.text = "STOP";
        } else {
            this.car1Text.text = "START";
        }

        if (this.car2.inMotion) {
            this.car2Text.text = "STOP";
        } else {
            this.car2Text.text = "START";
        }

        if (this.car3.inMotion) {
            this.car3Text.text = "STOP";
        } else {
            this.car3Text.text = "START";
        }

        if (this.car11.inMotion == false && this.car2.inMotion == false && this.car3.inMotion == false) {
            this.carAllText.text = "START ALL";
        } else {
            this.carAllText.text = "STOP ALL";
        }

        //stop from continuous press
        if (this.akey.upDuration(10000000)) {
            //console.log("yes");
            this.canClick = true;
        } else {
            this.canClick = false;
        }


        if (this.fence1.hungry) {
            this.hunger1Text.text = 'HUNGRY';
        } else {
            this.hunger1Text.text = 'FED';
        }

        if (this.fence2.hungry) {
            this.hunger2Text.text = 'HUNGRY';
        } else {
            this.hunger2Text.text = 'FED';
        }

        if (this.fence3.hungry) {
            this.hunger3Text.text = 'HUNGRY';
        } else {
            this.hunger3Text.text = 'FED';
        }

        if (this.fence4.hungry) {
            this.hunger4Text.text = 'HUNGRY';
        } else {
            this.hunger4Text.text = 'FED';
        }

    },

    menu: function () {
        //start win state
        game.state.start('menu');
    },

    exitOnClick: function () {
        if (this.fence1.power == false || this.fence2.power == false || this.fence3.power == false || this.fence4.power == false) {

            this.warningSprite.x = 250;
            this.warningSprite.y = 200;
            console.log('fence power on')
        } else {
            game.state.start('intro');
        }
    },

    actionOnClick: function () {
        this.fence1.changePower();
    },

    actionOnClick2: function () {
        this.fence2.changePower();
    },

    actionOnClick3: function () {
        this.fence3.changePower();
    },

    actionOnClick4: function () {
        this.fence4.changePower();
    },

    actionOnClick5: function () {
        if (this.fence1.power == false || this.fence2.power == false || this.fence3.power == false || this.fence4.power == false) {
            this.fence1.power = true;
            this.fence2.power = true;
            this.fence3.power = true;
            this.fence4.power = true;
        } else if (this.fence1.power && this.fence2.power && this.fence3.power && this.fence4.power) {
            this.fence1.power = false;
            this.fence2.power = false;
            this.fence3.power = false;
            this.fence4.power = false;
        }
    },

    carAction: function () {
        this.car11.changeStatus();
    },

    carAction2: function () {
        this.car2.changeStatus();
    },

    carAction3: function () {
        this.car3.changeStatus();
    },

    carAllAction: function () {

        if (this.car11.inMotion || this.car2.inMotion || this.car3.inMotion) {
            this.car11.inMotion = false;
            this.car2.inMotion = false;
            this.car3.inMotion = false;
        } else {
            this.car11.inMotion = true;
            this.car2.inMotion = true;
            this.car3.inMotion = true;
        }
    },

    hunger1: function () {

        if (this.canClickH && this.fence1.hungry) {
            this.fence1.changeHunger();
            this.canClickH = false;
            this.game.time.events.repeat(Phaser.Timer.SECOND * 5, 1, this.nextFunc, this);
        }

    },

    hunger2: function () {

        if (this.canClickH2 && this.fence2.hungry) {
            this.fence2.changeHunger();
            this.canClickH2 = false;
            this.game.time.events.repeat(Phaser.Timer.SECOND * 5, 1, this.nextFunc2, this);
        }

    },

    hunger3: function () {

        if (this.canClickH3 && this.fence3.hungry) {
            this.fence3.changeHunger();
            this.canClickH3 = false;
            this.game.time.events.repeat(Phaser.Timer.SECOND * 5, 1, this.nextFunc3, this);
        }

    },

    hunger4: function () {

        if (this.canClickH4 && this.fence4.hungry) {
            this.fence4.changeHunger();
            this.canClickH4 = false;
            this.game.time.events.repeat(Phaser.Timer.SECOND * 5, 1, this.nextFunc4, this);
        }

    },

    nextFunc: function () {

        this.canClickH = true;
        this.fence1.changeHunger();
    },

    nextFunc2: function () {

        this.canClickH2 = true;
        this.fence2.changeHunger();
    },

    nextFunc3: function () {

        this.canClickH3 = true;
        this.fence3.changeHunger();
    },

    nextFunc4: function () {

        this.canClickH4 = true;
        this.fence4.changeHunger();
    }


}
