# pern-starter
(PERN) Postgres Express React/Redux/React-Router-DOM Node stack boilerplate using yarn workspaces.

Basic Startup to get up and running with PERN Stack with no configuration using [create-react-app](https://github.com/facebookincubator/create-react-app).

Babel, ESLint, Prettier, pg, Jest, Supertest, Enzyme is also included with this build.

Easy Heroku deployment with Heroku Postgres. [Example](https://pern.herokuapp.com/) with this repo.

Inspired by [Article](https://daveceddia.com/create-react-app-express-production/).

## Getting Started

### Prerequisites

- [Yarn](https://yarnpkg.com/en/)
- [NodeJS](https://nodejs.org)
- [PostgreSQL](https://www.postgresql.org/)

### Steps
- Run `yarn`.
- Create a new database and run `setup.sql` to setup the tables needed.
- In the packages/server directory, create a .env file (or rename the env-sample file to .env) and place the following:
  - DATABASE_URL=*YOUR POSTGRES DATABASE URL*
  - PORT=*5000*
  - SSL=*true or false, if database supports SSL. Local Database does not support SSL*
- Make sure the new database with tables is running.
- Run `yarn dev`.
- Navigate to `localhost:3000` in your browser.

## Folder Structure
```
pern-starter
├── node_modules
├──  packages   (yarn workspaces)
|   └── client   (React)
|       ├── node_modules
|       ├── public
|       |   └── favicon.ico
|       |   └── index.html
|       |   └── manifest.json
|       ├── src
|       |   └── page   (Pages for application)
|       |   |   └── __tests__
|       |   |   |   └── page.test.js   (Testing Pages)
|       |   |   └── page.js
|       |   └── redux
|       |   |   └── __tests__
|       |   |   |   └── reducer.test.js   (Testing Reducers)
|       |   |   └── reducer.js   (Reducers using Reducks Pattern https://github.com/erikras/ducks-modular-redux)
|       |   |   └── configureStore.js   (Configure Store)
|       |   └── App.js
|       |   └── api.js
|       |   └── index.js
|       |   └── serviceWorker.js
|       |   └── setupTests.js   (Enzyme Testing)
|       ├── .eslintrc
|       ├── .prettierrc
|       ├── .README.md
|       └── package.json
|
|   └── server
|       ├── node_modules
|       └── __tests__   (Testing Routes and Postgres Queries)
|       └── src
|       |   └── db   (Postgres Database Connection)
|       |   |   └── index.js
|       |   └── routes   (API Routes)
|       |   |   └── routes.js
|       |   └── index.js
|       ├── .babelrc
|       ├── .eslintrc
|       ├── .prettierrc
|       ├── env-sample
|       └── package.json
|
├── .gitignore
├── .travis.yml   (Travis CI)
├── Procfile   (Heroku deployment)
├── README.md
├── package.json
├── .renovate.json   (Renovate Bot)
├── setup.sql
└── yarn.lock

```

## Available Scripts

In the project directory, the following commands are available:

### `yarn dev`

Builds the app for development. It is watched by webpack for any changes in the front end (React) and back end (Express). Check out localhost:3000 on browser.

### `yarn format:all`
Formats both front end (React) and back end (Express).

### `yarn lint:all`

Lints both front end (React) and back end (Express).

### `yarn test:all`

Tests both front end (React) and back end (Express) in `__tests__` folders.

### `yarn prod:local`

Build and runs the full stack application for production. Both front end (React) and back end (Express) are minified and filenames include the hashes. Check out localhost:5000 on browser.

## Heroku Deployment

### Prerequisites

- [Heroku Client](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

### Steps

- First step, is creating a heroku application and setting a heroku postgres database.

Sign in to [**Heroku**](https://id.heroku.com/login) and click on `Create New App` button on the dashboard. Then, specify a name (or leave blank and Heroku will generate a name for you) and click `Create App`.

At this point, you should be in the dashboard of your project. There will either be a `Resources` tab or an `icon of three horizontal lines`, depending on your window size. Click on it and you should be in the next screen.

On this screen, type `postgres` in the `Add-ons` search field and select `Heroku Postgres`. Select the `Hobby Dev - Free` option.

Select the `Heroku Postgress :: Datebase` add-on from the list. On the database page, click on the `View Credentials` button. You will then be presented with the credentials to your very own Postgres datebase!

With your terminal open, run the command that is labeled `Heroku CLI`. It should be start with a `heroku pg:sql`. Copy and execute the query in `setup.sql`.

- Second step, setting up environment variables

In the dashboard of your project, there will either be a `Settings` tab or an `icon of two gears`, depending on your window size. Click on it. In the Config Variables section, click on the `Reveal Config Vars` button, and then add your environment variables.

- Third step, Deploy

In the dashboard of your project, there will either be a `Deploy` tab or an `up arrow icon`, depending on your window size. Click on it, and choose your deployment method.

## Libraries
- Express.js
- pg
- React using create-react-app
- Redux
- Redux Thunk
- React Router Dom
- ESLint
- Babel
- Jest
- Supertest
- Enzyme
