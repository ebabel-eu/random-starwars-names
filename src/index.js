var starWarsNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');

/**
 * Main random Star Wars names selector.
 * @type module
 */
module.exports = {
    /**
     * Array of all the Star Wars names.
     * @type array
     */
    all: starWarsNames,

    /**
     * Get a single Star Wars name, selected randomly.
     * @type function
     */
    random: uniqueRandomArray(starWarsNames)
};
