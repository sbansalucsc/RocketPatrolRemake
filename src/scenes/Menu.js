

class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion',['./assets/Explosion1.wav']);
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
        this.load.audio('music', './assets/music_pioxonaq_agressive_lightning.mp3') // Rocket Mod#2: Added music from https://www.zapsplat.com/sound-effect-category/electronica/
        this.load.image('Menu','./assets/MenuTitle.png');
      }

    create(){
      this.menuscreen = this.add.tileSprite(0,0,
        640,480, 'Menu').setOrigin(0,0);
      
      /*
        //menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '25px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
          }

          //show menu text
          this.add.text(game.config.width/2, 
            game.config.height/2 -borderUISize - borderPadding,
            'ROCKET PATROL',menuConfig).setOrigin(0.5);
          this.add.text(game.config.width/2, 
            game.config.height/2, 'P1 use (A) & (D) keys to move & (F) to fire',
            menuConfig).setOrigin(0.5); 
          menuConfig.backgroundColor = '#00FF00';
          menuConfig.color = '#000';
          this.add.text(game.config.width/2, 
            game.config.height/2 + 2*borderUISize + borderPadding,'P2 use <--> arrows to move & (H) to fire', 
            menuConfig).setOrigin(0.5);

          this.add.text(game.config.width/2, 
            game.config.height/2 + 4*borderUISize + borderPadding,'Press <- for Novice or -> for Expert', 
            menuConfig).setOrigin(0.5);

            */

          // define keys
            keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
            keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);

          //add music
          // referenced from https://www.youtube.com/watch?v=COncYQLGJS8
            this.music = this.sound.add('music');

            let musicConfig = {
              mute: false,
              volume:1,
              rate:1,
              detune:0,
              seek:0,
              loop: true,
              delay:0,

            }
          this.music.play(musicConfig);

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
      }

}