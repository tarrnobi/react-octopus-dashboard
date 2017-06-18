# react-enzyme-tutorial

https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha


# Initialize
run `npm install` to install packages

run `npm setup` to initialize .env file


To  get around a silly issue using mocha -w where the sinon sandbox isn't properly resetting, install `nodemon` instead.

`npm install -g nodemon`

then run

`nodemon -w . -d 0 --exec npm test`

if you don't want to install it globally:

`npm install --save-dev nodemon`
then return



`https://github.com/pugjs/pug-loader/issues/8` explains why you add the following to your config
```
node: {
    fs: "empty"
}
```
