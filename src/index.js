const starWarsNames = require('./starwars-names.json');
const uniqueRandomArray = require('unique-random-array');
const getRandomName = uniqueRandomArray(starWarsNames);

const random = (number) => {
    if (number === undefined) {
        return getRandomName();
    } else {
        const randomNames = [];
        for (let i = 0; i < number; i++) {
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
    random,
};
