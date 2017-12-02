<p align="center">
  <img src="docs/images/banner.png">
</p>

## Required
1. Install mongodb [click here](https://docs.mongodb.com/manual/installation)
2. Heroku account [click here](https://heroku.com) if you want to deploy with heroku
3. Amazon account [click here](https://aws.amazon.com/) if you want to deploy with amazon
## Use for development
1. `git clone git@github.com:hunghkit/reactjs-begin.git`
2. `yarn install` || `npm install`
3. Start mongodb: `mongod`
4. Add ENV: cp .env.example .env
5. Start dev reactjs: `yarn start` || `npm start`
6. Start dev server: `yarn server` || `npm run server`
## Add route in project
Edit file app/pages/routes.js

```
    <Switch>
        {...}
        Add new route in here
    </Switch>
```

## Handle rerender with sync data from api in redux
Look example at file app/components
1. Add action with call data from api
2. Add preRender static method with 2 params store of redux and url in request in Component in Route and call dispatch action with api
## Preview build project
1. Build: `yarn run build` || `npm run build`
2. Build and review in local: `yarn run build:dev` || `npm run build:dev`
3. Build and start project: `yarn run build:start` || `npm run build:start`
## Deployment with heroku
- Setup:
1. `heroku create $APP_NAME`
2. `heroku buildpacks:add --index 1 https://github.com/mars/create-react-app-buildpack.git `
3. `heroku buildpacks:add --index 2 heroku/nodejs`
- Deploy:
`git push heroku yourbanch:master`

## Done
1. Config data with create-react-app
2. Use scss with node-sass
3. Renderserver side with redux
4. Deploy with heroku
5. React router
6. Integrate redux
7. Integrate redux-form
8. JWT in server
9. React-Toolbox
10. Example with REST
## Relation
1. With reactjs see more [create react app](https://github.com/facebookincubator/create-react-app)
2. Proxy with development, you change port or url in proxy in package.json
3. React router dom see more [click here](https://github.com/ReactTraining/react-router)
4. Seo with reactjs see more [click here](https://github.com/nfl/react-helmet)
5. Api with express see more [click here](https://expressjs.com/en/guide/routing.html)
6. Database with mongoosejs see more [click here](http://mongoosejs.com/docs/guide.html)
7. Deployment with aws through Elastic Beanstalk [click here](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)
8. Dotenv [click here](https://github.com/bkeepers/dotenv)
## Demo [click here](https://reactjs-begin.herokuapp.com)
## Licence: MIT
