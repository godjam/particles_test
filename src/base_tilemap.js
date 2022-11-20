import 'phaser';
import { screen_size, tile_size } from './constants';

export default class BaseTilemap {
    static createMap(game, level_data) {
        const data = level_data.map(num => num - 1);
        let level = [];
        const s = screen_size;
        for (let i = 0; i < s; i++) {
            const start = i * s;
            const end = start + s;
            level.push(data.slice(start, end));
        }
    
        const map = game.make.tilemap({
            data: level,
            tileWidth: tile_size,
            tileHeight: tile_size
        });
    
        const tiles = map.addTilesetImage('sprites');
        const layer = map.createLayer(0, tiles, 0, 0);
    }
}