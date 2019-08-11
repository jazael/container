const readFile = require('../src/readfile');

const maximumValueOutput = file => {
    const informationFile = readFile(file);
    return informationFile.map(
        value => `Máxima cantidad de agua del contenedor: ${maximumVolume(value.coordinates)}`
    );
}

const maximumVolume = arrCoordinates => {
    let largerVolume = 0;
    let initialValue = 0;
    let endValue = arrCoordinates.length - 1;

    while (initialValue < endValue) {
		let dimension = Math.min(arrCoordinates[initialValue], arrCoordinates[endValue]) * (endValue - initialValue);
		if (dimension > largerVolume) {
			largerVolume = dimension;
        }
        
        (arrCoordinates[initialValue] <= arrCoordinates[endValue]) ? initialValue++ : endValue--;
    }
    
    return largerVolume;
}

module.exports = {
    maximumValueOutput,
    maximumVolume
}