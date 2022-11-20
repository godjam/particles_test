import BaseEntity from "./base_entity";
import EffectsManager from "./effect";

export default class Boss extends BaseEntity {
    constructor(game, data) {
        super(game, data);

        this.sprite = game.add.sprite(0, 0, 'sprites');
        this.sprite.anims.create({
            key: 'idle',
            frames:[
                {key:'sprites', frame:48}, 
                {key:'sprites', frame:49}
            ],
            frameRate: 1,
            repeat: -1
        })
        this.sprite.play('idle');
        this.container.add(this.sprite);

        this.weapon = game.add.sprite(0, 0, 'sprites', 102);
        this.weapon.anims.create({
            key: 'idle',
            frames: [
                { key: 'sprites', frame: 102 },
                { key: 'sprites', frame: 103 }
            ],
            frameRate: 1,
            repeat: -1
        })
        this.weapon.play('idle');
        this.container.add(this.weapon);


        EffectsManager.curse(this);
    }
}