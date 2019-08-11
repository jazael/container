const readFile = require('../src/readfile');
const maximum = require('../src/maximunvolume');

describe('ReadFile utilities module', () => {
    test('readFile is a function', () => {
        expect(typeof readFile).toEqual('function');
    })
});

describe('maximumValueOutput utilities module', () => {

    test('maximumValueOutput is a function', () => {
        expect(typeof maximum.maximumValueOutput).toEqual('function');
    });

    test('maximumVolume is a function', () => {
        expect(typeof maximum.maximumVolume).toEqual('function');
    });

    test('return value of the maximumVolume', () => {
        const arrCoordinates = [ 
            1,8,6,2,5,4,8,3,7
        ];

        expect(49).toBe(+maximum.maximumVolume(arrCoordinates));
    });

    test('returns value of the maximumVolume', () => {
        const arrCoordinates = [ 
            1,8,6,2,5,4,8,3,7
        ];

        const maximumVolume = 26;
        expect(maximumVolume).not.toBe(maximum.maximumVolume(arrCoordinates));
    })
    
});