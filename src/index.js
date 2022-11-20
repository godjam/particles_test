import 'phaser';
import BaseTilemap from './base_tilemap';
import { tile_size, level_data, entities_data, default_width, default_height } from './constants';
import EntityFactory from './entity_factory';

class BaseGame {
    constructor() {
        const config = {
            type: Phaser.WEBGL,
            pixelArt: true,
            scale: {
                parent: 'root_canvas',
                mode: Phaser.Scale.NONE,
                autoCenter: Phaser.Scale.NONE,
                width: default_width,
                height: default_height
            },
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update,
            }
        };
        this.game = new Phaser.Game(config);
        window.addEventListener('resize', e => { BaseGame.resize(this) })
    }

    // custom resize function
    // from: https://github.com/yandeu/phaser3-typescript-platformer-example/blob/master/src/game.ts
    static resize(base_game) {
        const w = window.innerWidth;
        const h = window.innerHeight;

        const width = default_width;
        const height = default_height;
        const scale = Math.min(w / width, h / height);

        // resize the game
        base_game.game.scale.resize(width, height)

        // scale the width and height of the css
        base_game.game.canvas.style.width = width * scale + 'px'
        base_game.game.canvas.style.height = height * scale + 'px'

        // center the game with css margin
        base_game.game.canvas.style.marginTop = `${(h - width * scale) / 2}px`
        base_game.game.canvas.style.marginLeft = `${(w - height * scale) / 2}px`
    }

    preload() {
        this.load.setCORS('anonymous');
        this.load.spritesheet(
            'sprites',
            'assets/soundsheett_vFinal.png',
            { frameWidth: tile_size, frameHeight: tile_size }
        );
    }

    create() {
        this.load.setCORS('anonymous');
        this.keys = this.input.keyboard.createCursorKeys();
        
        BaseGame.resize(this);
        BaseTilemap.createMap(this, level_data);

        let entities = []
        for (let i = 0; i < entities_data.length; i++) {
            const data = entities_data[i];
            const e = EntityFactory.create(this, data);
            if (e != null)
                entities.push(e);
        }

        this.player = entities.find(e => e.type === 'player')
        this.moblin = entities.find(e => e.type === 'moblin')

    }

    update() {
        if (this.keys.left.isDown) {
            this.player.heal();
        }

        if (this.keys.right.isDown) {
            this.player.attack(this.moblin);

            // counter attack
            if (Math.random() > 0.5) {
                this.moblin.attack(this.player);
            }
        }
    }
}

new BaseGame();



