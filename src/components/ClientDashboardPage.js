import React from 'react';
import { Link } from 'react-router-dom';
import ClientList from './ClientList';
import ClientListFilters from './ClientListFilters';
import ClientSummary from './ClientSummary';

const ClientDashboardPage = () => (
  <div>
    <ClientSummary />
    <ClientListFilters />
    <ClientList />
  </div>
);

export default ClientDashboardPage;
