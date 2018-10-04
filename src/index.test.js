const starWars = require('./index');

test('all() should return an array of strings', () => {
  const isArrayOfStrings = (array) => {
    return array.every((item) => {
      return typeof item === 'string';
    });
  }

  expect(isArrayOfStrings(starWars.all)).toBe(true);
});

test('should contain \'Luke Skywalker\'', () => {
  expect(starWars.all.find(name => name === 'Luke Skywalker')).toBe('Luke Skywalker');
});

test('random() should return a random item from starWars.all', () => {
  const randomName = starWars.random();
  expect(starWars.all.find(name => name === randomName)).toBe(randomName);
});

test('random() should return an array of random names if passed an integer', () => {
  const randomNames = starWars.random(3);
  expect(randomNames.length).toBe(3);
  randomNames.forEach((randomName) => {
    expect(starWars.all.find(name => name === randomName)).toBe(randomName);
  });
});
