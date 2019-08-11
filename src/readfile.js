const fs = require('fs');

const readFile = (file) => {
    return fs.readFileSync(file, 'utf8')
        .trim()
        .split(/[\r\n]+/g)
        .map(line => {
            try {
                const input = line.split('=');
                return { coordinates: input[1].split(',')};
            } catch (err) {
                console.error(err);
                return null;
            }
        })
        .filter(object => {
            return !!object;
        });
}

module.exports = readFile;