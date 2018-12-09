import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header';
import ClientDashboardPage from '../components/ClientDashboardPage';
import AddClientPage from '../components/AddClientPage';
import EditClientPage from '../components/EditClientPage';
import ViewClientPage from '../components/ViewClientPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ClientDashboardPage} exact />
        <Route path="/create" component={AddClientPage} />
        <Route path="/edit/:id" component={EditClientPage} />
        <Route path="/view/:id" component={ViewClientPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
