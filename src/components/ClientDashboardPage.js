import React from 'react';
import { Link } from 'react-router-dom';
import ClientList from './ClientList';
import ClientListFilters from './ClientListFilters';

const ClientDashboardPage = () => (
  <div>
    <ClientListFilters />
    <ClientList />
  </div>
);

export default ClientDashboardPage;
