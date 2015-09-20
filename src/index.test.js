var expect = require('chai').expect;
var starWars = require('./index');

describe('random-starwars-names', function() {

    describe('all', function() {

        it('should return an array of strings', function() {
            function isArrayOfStrings (array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }

            expect(starWars.all).to.satisfy(isArrayOfStrings);
        });

        it('should contain \'Luke Skywalker\'', function() {
            expect(starWars.all).to.include('Luke Skywalker');
        });

    });

    describe('random', function() {

        it('should return a random item from starWars.all', function() {
            var randomName = starWars.random();
            expect(starWars.all).to.include(randomName);
        });

        it('should return an array of random names if passed an integer', function() {
            var randomNames = starWars.random(3);
            expect(randomNames).to.have.length(3);
            randomNames.forEach(function (name) {
                expect(starWars.all).to.include(name);
            });
        });

    });

});
