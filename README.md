# react-enzyme-tutorial

https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha


# Initialize
run `npm install` to install packages

run `npm setup` to initialize .env file


To  get around a silly issue using mocha -w where the sinon sandbox isn't properly resetting, install `nodemon` instead.

`npm install -g nodemon`

then run

`nodemon -w . -d 0 -e js,jsx --exec npm test`

if you don't want to install it globally:

`npm install --save-dev nodemon`
then return



`https://github.com/pugjs/pug-loader/issues/8` explains why you add the following to your config
```
node: {
    fs: "empty"
}
```

* You can pass server environment parameters to the client as part of the webpack build using plugins. This allows the API key to be set at the server level and each person that loads up the web page is also able to use it. The web page is already pre-authenticated, so it's fairly safe.

The only gotcha here is that you have to explicitly pass your parameters as strings. This is quite easy with variable quoting:

```
plugins: [
  new webpack.DefinePlugin({
    'process.env':{
      'OCTOPUS_API_KEY': '"{0}"'.format(process.env.OCTOPUS_API_KEY),
      'OCTOPUS_SERVER' : '"{0}"'.format(process.env.OCTOPUS_SERVER)
    }
  })
],
```

https://stackoverflow.com/questions/37975819/react-use-environment-variables

https://webpack.js.org/plugins/define-plugin/
