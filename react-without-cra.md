Steps to create a react app without cra

1.npm init to create package.json
2.install react and react-dom
3.install webpack webpack-dev-server webpack-cli as dev dependencies
4.install @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin as dev dependencies style-loader css-loader
5.setup webpack.config.js 
6.create src folder and create file index.js
7.create index.html
8.With babel 7 no need to create .babelrc we can define config in package.json itself

Set up eslint
1.install eslint as dev dependency
2.install eslint-plugin-react
3.initialise eslint with npx eslint --init
4.add node and coomnjs in env of .eslintrc.json file

setup Redux-ReduxThunk

1.install redux and react-redux
2.wrap your index.js file with provider component as the root component
3.create a redux folder inside src
4.create a root.reducer.js file for all the reducers
5.import combinereducers function from redux
6.create store.js file
7.import createstore and applymiddleware from redux
8.install redux-thunk
9.import thunk from redux-thunk in store.js file
9.import rootreducer inside store.js file
10.create store
11.export store
12.import store inside index.js
13.pass store to provider


add @babel/plugin-proposal-class-properties and babel-eslint as dev dependencies 
create a seperate .babelrc file for config
update .eslintrc file to include parser as babel-eslint
update presets in .babelrc to include targets node as current so that we can use async await syntax