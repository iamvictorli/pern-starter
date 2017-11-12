# pern-starter
(PERN) Postgres Express React/Redux/React-Router-DOM Node stack boilerplate

Basic Startup to get up and running with PERN Stack with no configuration using [create-react-app](https://github.com/facebookincubator/create-react-app).
This also makes Heroku deployment easy.

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

## Available Scripts

In the project directory, the following commands are available:

### `npm run dev` or `yarn run dev`

Builds the app for development. It is watched by webpack for any changes in the front end (React) and back end (Express).

### `npm run lint` or `yarn run lint`

Lints both front end (React) and back end (Express).

### `npm run prod` or `yarn run prod`

Build and runs the full stack application for production. Both front end (React) and back end (Express) are minified and filenames include the hashes.

## Libraries
- Express.js
- Massive
- React using create-react-app
- Redux
- Redux Thunk
- React Router Dom
- Axios
