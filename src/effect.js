export default class EffectsManager {
    static flash(entity) {
        entity.sprite.setTintFill(0xffffff);

        let flashTimer = entity.game.time.addEvent({
            delay: 50,
            callback: () => {
                entity.sprite.setTint('0xffffff');
            }
        });
    }

    static shake(entity) {
        const x = entity.x; 
        const y = entity.y;

        let shakeTween = entity.game.tweens.add({
            targets: entity.container,
            x: entity.container.x + 3,
            y: entity.container.y,
            duration: 50,
            yoyo: true,
            repeat: 1,
            ease: 'Bounce.easeInOut',
            delay: 0,
            paused: false,
            onComplete: (tween, target) => {
                entity.container.setPosition(x, y);
            }
        });
    }

    static curse(entity) {
        const particles = entity.game.add.particles('sprites');
        particles.setDepth(1);

        particles.createEmitter({
            frame: 44,
            x: 0,
            y: -3,
            tint: 0x00ff00,
            speed: { min: -10, max: 10 },
            angle: { min: 0, max: 360 },
            scale: { start: .5, end: 0 },
            blendMode: 'SCREEN',
            on: true,
            lifespan: 400,
            gravityY: -50
        });

        entity.container.add(particles);
    }

    static self_damage(entity) {
        const particles = entity.game.add.particles('sprites');
        particles.setDepth(1);

        const damage_emitter = particles.createEmitter({
            frame: 44,
            x: 0,
            y: 0,
            tint: [0x550000, 0xff0000],
            speed: { min: -100, max: 100 },
            angle: { min: -180, max: -130 },
            scale: { start: .5, end: 0 },
            blendMode: 'SCREEN',
            on: false,
            lifespan: 200,
            gravityY: 100
        });

        entity.container.add(particles);
        damage_emitter.explode(5);
    }

    static damage(entity) {
        const particles = entity.game.add.particles('sprites');
        particles.setDepth(1);

        const damage_emitter = particles.createEmitter({
            frame: 44,
            x: 0,
            y: 0,
            tint: [0x005500, 0x00ff00],
            speed: { min: -100, max: 100 },
            angle: { min: -30, max: 0 },
            scale: { start: .5, end: 0 },
            blendMode: 'SCREEN',
            on: false,
            lifespan: 200,
            gravityY: 100
        });

        entity.container.add(particles);
        damage_emitter.explode(5);
    }

    static heal(entity) {
        const particles = entity.game.add.particles('sprites');
        particles.setDepth(1);

        const heal = particles.createEmitter({
            frame: 44,
            x: 0,
            y: 0,
            tint: [0xffffff, 0x00ff00],
            speed: { min: -10, max: 10 },
            angle: { min: -110, max: -70 },
            scale: { start: 1, end: 0 },
            blendMode: 'SCREEN',
            on: false,
            lifespan: 600,
            gravityY: -100
        });

        const heal_zone = {
            source: new Phaser.Geom.Line(-4, 6, 4, 6),
            type: 'edge',
            quantity: 6
        };
        heal.setEmitZone(heal_zone);

        entity.container.add(particles);
        heal.explode(5);
    }
}