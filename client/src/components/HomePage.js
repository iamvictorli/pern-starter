import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <p>Home page</p>
    <Link to="/libraries">Libraries page</Link>
  </div>
);

export default HomePage;
