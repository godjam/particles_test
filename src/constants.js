export const tile_size = 8;
export const screen_size = 11;

export const default_width = screen_size * tile_size;
export const default_height = screen_size * tile_size;

export const level_data = [
    19, 23, 22, 22, 22, 23, 22, 22, 22, 23, 19,
    19, 1, 1, 1, 1, 1, 1, 1, 1, 1, 19,
    19, 1, 1, 24, 24, 24, 24, 24, 1, 1, 19,
    19, 1, 1, 1, 1, 1, 1, 1, 1, 1, 19,
    23, 22, 21, 22, 23, 1, 23, 22, 21, 22, 23,
    17, 17, 15, 15, 13, 18, 13, 16, 14, 17, 17,
    17, 13, 13, 13, 13, 25, 13, 13, 13, 16, 17,
    17, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17,
    17, 16, 15, 13, 13, 13, 13, 13, 13, 13, 17,
    17, 13, 13, 13, 13, 25, 13, 13, 25, 13, 17,
    17, 17, 17, 14, 13, 26, 13, 15, 17, 17, 17
];

export const entities_data = [
    {
        type: 'key',
        tile_id: 45,
        tile_x: 1,
        tile_y: 1,
    },
    {
        type: 'chest',
        tile_id: 43,
        tile_x: 9,
        tile_y: 1,
    },
    {
        type: 'barrel',
        tile_id: 39,
        tile_x: 1,
        tile_y: 3,
    },
    {
        type: 'barrel',
        tile_id: 39,
        tile_x: 9,
        tile_y: 3,
    },
    {
        type: 'haystack',
        tile_id: 38,
        tile_x: 1,
        tile_y: 6,
    },
    {
        type: 'haystack',
        tile_id: 38,
        tile_x: 9,
        tile_y: 7,
    },
    {
        type: 'player',
        tile_x: 4,
        tile_y: 8,
        weapon: 'sword' 
    },
    {
        type: 'moblin',
        tile_x: 5,
        tile_y: 8,
        weapon: 'sword' 
    },
    {
        type: 'skeleton',
        tile_x: 5,
        tile_y: 3,
        weapon: 'sword' 
    },
    {
        type: 'boss',
        tile_x: 5,
        tile_y: 1,
        weapon: 'sword' 
    },
];
