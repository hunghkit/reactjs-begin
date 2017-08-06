## Required
1. Install mongodb [click here](https://docs.mongodb.com/manual/installation)
2. Heroku account [click here](https://heroku.com)
## Use for development
1. `git clone git@github.com:hunghkit/reactjs-begin.git`
2. `yarn install` || `npm install`
3. Start mongodb: `mongod`
4. Start dev reactjs: `yarn start` || `npm start`
5. Start dev server: `yarn run server` || `npm run server`
## Deployment
- Setup:
`heroku create $APP_NAME`
`heroku buildpacks:add --index 1` `https://github.com/hunghkit/create-react-app-buildpack.git `
`heroku buildpacks:add --index 2 heroku/ruby`
- Deploy:
`git push heroku yourbanch:master`
## Todo next
1. `redux` or `mobx`
2. `react-router`
3. `render server`
4. `deploy to aws`
## Noti
1. With reactjs see more [create react app](https://github.com/facebookincubator/create-react-app)
2. Proxy with development, you change port or url in proxy in package.json
## Licence: MIT
