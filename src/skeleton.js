import BaseEntity from "./base_entity";

export default class Squeleton extends BaseEntity {
    constructor(game, data) {
        super(game, data);

        this.sprite = game.add.sprite(0, 0, 'sprites');
        this.sprite.anims.create({
            key: 'idle',
            frames:[
                {key:'sprites', frame:60}, 
                {key:'sprites', frame:61}
            ],
            frameRate: 1,
            repeat: -1
        })

        this.sprite.play('idle');
        this.container.add(this.sprite);

        
        // this.weapon = game.add.sprite(0, 0, 'sprites', 96);
        // this.weapon.anims.create({
        //     key: 'idle',
        //     frames: [
        //         { key: 'sprites', frame: 96 },
        //         { key: 'sprites', frame: 97 }
        //     ],
        //     frameRate: 1,
        //     repeat: -1
        // })
        // this.weapon.play('idle');
        // this.container.add(this.weapon);
    }
}