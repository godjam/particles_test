import { tile_size } from "./constants";
import EffectsManager from "./effect";

export default class BaseEntity {
    constructor(game, data) {
        // type: 'key',
        // tile_id: 45,
        // tile_x: 1,
        // tile_y: 1,
        this.game = game;
        this.type = data.type;

        const half_tile_size = ~~(tile_size / 2);
        this.x = half_tile_size + data.tile_x * tile_size;
        this.y = half_tile_size + data.tile_y * tile_size;

        this.container = game.add.container(this.x, this.y);
        if (data.hasOwnProperty('tile_id')) {
            this.sprite = game.add.sprite(0, 0, 'sprites', data.tile_id);
            this.container.add(this.sprite);
        }
    }
    
    // TODO: call weapon attack
    attack(target) {
        console.log(`${this.type} attacks ${target.type}`);
        target.take_damage();
    }

    // TODO - 1 pv
    take_damage() { 
        console.log(`${this.type} takes 1 damage`);
        EffectsManager.flash(this);
        EffectsManager.shake(this);
    };

    heal() {
        console.log(`${this.type} heals`);
        EffectsManager.heal(this);
     };
}