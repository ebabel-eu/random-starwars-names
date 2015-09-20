# Create npm package

This project is my first attempt at creating a node package.

I detail below the steps to follow in order to create your own node package.

## Register your npm account

First, signup on https://www.npmjs.com/signup then register your account on your machine:

```
npm adduser
```

## Setup default settings

```
npm set init-author-name 'Nadjib Amar'
npm set init-author-email 'hello@ebabel.eu'
npm set init-license 'MIT'
```

## Decide if dependency versions are fixed

```
npm set save-exact false
```

## Default version of dependencies to tildes

```
npm config set save-prefix='~'
```

## Check the default npm settings

```
cat ~/.npmrc
```

For more on npm default configuration, see https://docs.npmjs.com/misc/config

## Create a default package.json

If you want to be prompted for input, use `npm init` but if you want to use your default settings:

```
npm init -y
```

## Publish your npm package

Note that each npm package name needs to be universally unique, regardless of which user it is published under.

Before publishing to npmjs.com, the current version of the code should be pushed to its Github repository and the version should be tagged.

### Push to Github

The code that gets released should come from the stable master branch.

git tag [version number goes here]

Example:

```
git checkout master
git merge develop
git push origin master
git tag 1.0.0
git push --tags
```

### Publish to npmjs.com

```
npm publish
```

## Check the npm publication

```
npm info
```

## Manage release versions with semantic-release

If you haven't installed it on your machine yet, install semantic-release-cli

```
npm install -g semantic-release-cli@1.0.5
```

Note that I am not installing the latest release 1.1.4 because it's broken at this point in time, so I picked a previous version that does work.











































