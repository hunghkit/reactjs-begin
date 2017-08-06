## Required
1. Install mongodb [click here](https://docs.mongodb.com/manual/installation)
2. Heroku account [click here](https://heroku.com)
## Use for development
1. `git clone git@github.com:hunghkit/reactjs-begin.git`
2. `yarn install` || `npm install`
3. Start mongodb: `mongod`
4. Start dev reactjs: `yarn start` || `npm start`
5. Start dev server: `yarn run server` || `npm run server`
6. Build: `yarn run build` || `npm run build`
7. Preview after build: `yarn run prod` || `npm run prod`
## Deployment
- Setup:
1. `heroku create $APP_NAME`
2. `heroku buildpacks:add --index 1 https://github.com/mars/create-react-app-buildpack.git `
3. `heroku buildpacks:add --index 2 heroku/nodejs`
- Deploy:
`git push heroku yourbanch:master`
## Done
1. Config data with create-react-app
2. Use scss with node-sass
3. Renderserver side
4. Deploy with heroku
5. React router
6. Example with REST
## Todo next
1. `redux` or `mobx`
4. `deploy to aws`
## Relation
1. With reactjs see more [create react app](https://github.com/facebookincubator/create-react-app)
2. Proxy with development, you change port or url in proxy in package.json
3. React router dom see more [click here](https://github.com/ReactTraining/react-router)
4. Seo with reactjs see more [click here](https://github.com/nfl/react-helmet)
5. Api with express see more [click here](https://expressjs.com/en/guide/routing.html)
6. Database with mongoosejs see more [click here](http://mongoosejs.com/docs/guide.html)
## Licence: MIT
