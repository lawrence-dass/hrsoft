import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h2>404 - Page Not Found</h2>
    <Link to="/"> Back to Dashboard </Link>
  </div>
);

export default NotFoundPage;
