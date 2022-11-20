import BaseEntity from "./base_entity";
import EffectsManager from "./effect";

export default class Player extends BaseEntity {
    constructor(game, data) {
        super(game, data);
        this.sprite = game.add.sprite(0, 0, 'sprites', 78);
        this.sprite.anims.create({
            key: 'idle',
            frames: [
                { key: 'sprites', frame: 78 },
                { key: 'sprites', frame: 79 }
            ],
            frameRate: 1,
            repeat: -1
        })
        this.sprite.play('idle');
        this.container.add(this.sprite);

        this.weapon = game.add.sprite(0, 0, 'sprites', 84);
        this.weapon.anims.create({
            key: 'idle',
            frames: [
                { key: 'sprites', frame: 84 },
                { key: 'sprites', frame: 85 }
            ],
            frameRate: 1,
            repeat: -1
        })
        this.weapon.play('idle');
        this.container.add(this.weapon);
    }

    attack(target) {
        super.attack(target);
        this.game.tweens.add({
            targets: this.container,
            x: this.x + 4,
            duration: 50,
            ease: 'Power2',
            yoyo: true
        });
    }

    take_damage() {
        super.take_damage();
        this.game.cameras.main.flash(50, 200, 100, 100);
        this.game.cameras.main.shake(50);
        EffectsManager.self_damage(this);
    }
}