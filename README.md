# pern-starter
(PERN) Postgres Express React/Redux/React-Router-DOM Node stack boilerplate

Basic Startup to get up and running with PERN Stack with no configuration using [create-react-app](https://github.com/facebookincubator/create-react-app). 

Babel and ESLint is also included with this build. 

[Massive.js](https://dmfay.github.io/massive-js/) to query Postgres database.

Easy Heroku deployment with Heroku Postgres. [Example](http://pern.herokuapp.com/) with this repo.

Inspired by [Article](https://daveceddia.com/create-react-app-express-production/).

## Getting Started

### Prerequisites

- [NodeJS](https://nodejs.org)
- [PostgreSQL](https://www.postgresql.org/)

### Steps
- Run `npm run build` or `yarn run build`.
- Create a new database and run `setup.sql` to setup the tables needed.
- In the root directory, create a .env file (or rename the env-sample file to .env) and place the following:
  - DATABASE_URL=*YOUR POSTGRES DATABASE URL*
  - PORT=*PORT NUMBER FOR EXPRESS, EXCLUDING 3000*
- Make sure the new database with tables is running.
- Run `npm run dev` or `yarn run dev`.
- Navigate to `localhost:3000` in your browser.

## Folder Structure
```
pern-starter
├── README.md
├── node_modules
├── package.json
├── setup.sql
├── Procfile
├── .gitignore
├── .eslintrc
├── .babelrc
├──  client   (React)
|   ├── README.md
|   ├── node_modules
|   ├── package.json
|   ├── .gitignore
|   ├── public
|   |   └── favicon.ico
|   |   └── index.html
|   |   └── manifest.json
|   └── src
|       ├── api.js
|       ├── App.js
|       ├── index.js
|       ├── rootReducer.js
|       ├── types.js
|       ├── actions   (action creators)
|       |   └── actions.js
|       ├── components   (React components)
|       |   └── components.js
|       └── reducers   (Redux reducers)
|           └── reducers.js
|    
└── server
    ├── index.js
    ├── models   (Queries to database with Massive.js)
    |   ├── dbConnection.js
    |   └── dbScripts
    |       └── dbScripts.sql   (prepared statement SQL)
    └── routes   (API routes)
        └── routes.js
```

## Available Scripts

In the project directory, the following commands are available:

### `npm run dev` or `yarn run dev`

Builds the app for development. It is watched by webpack for any changes in the front end (React) and back end (Express).

### `npm run lint` or `yarn run lint`

Lints both front end (React) and back end (Express).

### `npm run prod` or `yarn run prod`

Build and runs the full stack application for production. Both front end (React) and back end (Express) are minified and filenames include the hashes.

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
- Massive
- React using create-react-app
- Redux
- Redux Thunk
- React Router Dom
- Axios
