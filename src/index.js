const maximunVolume = require('./maximunvolume');

const response = maximunVolume.maximumValueOutput('./data.txt');

console.log(response.join('\n'));