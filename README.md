# starwars-names
Get a random Star Wars name


## Creation of npm packages


### Register your npm account

First, signup on https://www.npmjs.com/signup then register your account on your machine:

```
npm adduser
```

### Setup default settings

```
npm set init-author-name 'Nadjib Amar'
npm set init-author-email 'hello@ebabel.eu'
npm set init-license 'MIT'
```

### Decide if dependency versions are fixed

```
npm set save-exact false
```

### Default version of dependencies to tildes

```
npm config set save-prefix='~'
```

### Check the default npm settings

```
cat ~/.npmrc
```

For more on npm default configuration, see https://docs.npmjs.com/misc/config

### Create a default package.json

If you want to be prompted for input, use `npm init` but if you want to use your default settings:

```
npm init -y
```








