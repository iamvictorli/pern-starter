import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <React.Fragment>
    <p>Home page</p>
    <Link to='/libraries'>Libraries page</Link>
  </React.Fragment>
);

export default HomePage;
