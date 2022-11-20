import BaseEntity from './base_entity';
import Boss from './boss';
import Moblin from './moblin';
import Player from './player';
import Squeleton from './skeleton';

export default class EntityFactory {
    // factory creator
    static create(game, data) {
        let entity = null;

        if (data.type == 'key' ||
            data.type == 'chest' ||
            data.type == 'barrel' ||
            data.type == 'haystack')
            entity = new BaseEntity(game, data)
        else if (data.type == 'player')
            entity = new Player(game, data)
        else if (data.type == 'moblin')
            entity = new Moblin(game, data)
        else if (data.type == 'skeleton')
            entity = new Squeleton(game, data)
        else if (data.type == 'boss')
            entity = new Boss(game, data)

        return entity
    }

}
