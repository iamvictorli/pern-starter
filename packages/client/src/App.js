import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from './page/HomePage';
import LibPage from './page/LibrariesPage';

const App = ({ location }) => (
  <React.Fragment>
    <Route location={location} path='/' exact component={HomePage} />
    <Route location={location} path='/libraries' exact component={LibPage} />
  </React.Fragment>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
