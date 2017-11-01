import React from 'react';
import {Link} from 'react-router-dom';

const NoMatch = () => (
  <div>
    <h1>Sorry this page does not exist</h1>
    <Link to="/">Return to Homepage</Link>
  </div>
);

export default NoMatch;