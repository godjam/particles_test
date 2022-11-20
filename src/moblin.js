import BaseEntity from "./base_entity";
import EffectsManager from "./effect";

export default class Moblin extends BaseEntity {
    constructor(game, data) {
        super(game, data);
        this.sprite = game.add.sprite(0, 0, 'sprites', 66);
        this.sprite.anims.create({
            key: 'idle',
            frames:[
                {key:'sprites', frame:66}, 
                {key:'sprites', frame:67}
            ],
            frameRate: 1,
            repeat: -1
        })
        this.sprite.play('idle');
        this.container.add(this.sprite);
    }

    take_damage() {
        super.take_damage();
        EffectsManager.damage(this);
    }
}