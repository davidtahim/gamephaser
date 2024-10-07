import { Scene } from 'phaser';

var platforms;


export class Game extends Scene {
    private platforms?: Phaser.Physics.Arcade.StaticGroup;
    private player?: Phaser.Physics.Arcade.Sprite;
    private stars?: Phaser.Physics.Arcade.Group;
    private bombs?: Phaser.Physics.Arcade.Group;




    constructor() {
        super('Game');
    }

    preload() {
        this.load.image('platform', 'assets/platform.png');
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude',
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );

    }

    create() {
        this.createBackgroundImage();
        this.createPlatforms();
        this.createPlayer();
        this.createStars();
        this.createCollider();

    }



    update() {

    }
    createBackgroundImage() {
        this.add.image(400, 300, 'sky');
    }
    createPlatforms() {

        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

    }



    createPlayer() {
        this.player = this.physics.add.sprite(100, 450, 'dude');

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'dude', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }

    createStars() {
        this.stars = this.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        })
        this.stars.children.iterate(c => {
            const child = c as Phaser.Physics.Arcade.Image;
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
        })
    }

    createCollider(){
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.player, this.bombs, this.handleHitBomb, undefined, this);
        this.physics.add.collider(this.stars, this.platforms);
        this.physics.add.collider(this.bombs, this.platforms);
    }
    handleHitBomb(player, bomb) {
        // Code to handle the collision with a bomb
        console.log('Player hit a bomb!');
    }

}
