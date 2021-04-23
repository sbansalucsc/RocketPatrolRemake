/*Shaurya Bansal,Rocket Patrol Remake Mod, 4/23/2021, Time of completion 19 hours(had issues with laptop crashing hence submitting after deadline)

Points Breakdown:
Added copyright free music (5)
Created new scrolling tile sprite(5)
Replace UI borders with new artwork(10)
Created a new title screen(10)
Created a bonus spaceship type(20)
Created new artwork for all in game assets(20)
Implemented a simultaneous two player co-op mode(30)
*/

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play]
}
let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyLEFT, keyRIGHT, keyF, keyR, keyA, keyD, keyH;