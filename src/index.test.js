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

    });

});
