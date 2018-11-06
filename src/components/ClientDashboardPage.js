import React from 'react';
import { Link } from 'react-router-dom';

const ClientDashboardPage = () => (
  <div>
    <h2>ClientDashboardPage!</h2>
    <Link to="/create"> Add Client </Link>
  </div>
);

export default ClientDashboardPage;
