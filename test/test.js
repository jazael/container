const readFile = require('../src/readfile');
const maximumValueOutput = require('../src/maximunvolume');

describe('ReadFile utilities module', () => {
    test('readFile is a function', () => {
        expect(typeof readFile).toEqual('function');
    })
});