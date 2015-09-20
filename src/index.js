var starWarsNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');
var getRandomName = uniqueRandomArray(starWarsNames);

function random (number) {
    if (number === undefined) {
        return getRandomName();
    } else {
        var randomNames = [];
        for (var i = 0; i < number; i++) {
            randomNames.push(getRandomName());
        }
        return randomNames;
    }
}

/**
 * Main random Star Wars names selector.
 * @type {module}
 */
module.exports = {
    /**
     * Array of all the Star Wars names.
     * @type {array}
     */
    all: starWarsNames,

    /**
     * Get a single Star Wars name, selected randomly, 
     * or an array of names when passed an integer as parameter.
     * @type {function}
     */
    random: random
};
