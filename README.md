# Random Star Wars names
[![NPM](https://nodei.co/npm/random-starwars-names.png)](https://npmjs.org/package/random-starwars-names)
[![Build Status](https://travis-ci.org/ebabel-games/random-starwars-names.svg?branch=master)](https://travis-ci.org/ebabel-games/random-starwars-names)

Get a random Star Wars name.

This npm package is made to learn how to [create an npm package](CREATE-NPM-PACKAGE.md).

It's based on the video tutorial and the repository of [Kent C. Dodds](https://github.com/kentcdodds/starwars-names).

## Install
```
npm install random-starwars-names
```

## Setup
```
var randomStarwarsNames = require('random-starwars-names')
```

## List all Star Wars names

```
randomStarwarsNames.all;
```

## Get a random Star Wars name

```
randomStarwarsNames.random();
```

## Get an array of random Star Wars names

Note: example below would return 5 random Star Wars names.

```
randomStarwarsNames.random(5);
```

## Run unit tests (one off)

```
npm test
```

## Continuously run unit tests while developing

```
npm run test-watch
```

## Create npm package

Learn how to [create an npm package](CREATE-NPM-PACKAGE.md).

