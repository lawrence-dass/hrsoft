import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LoginPage from '../components/LoginPage';
import ClientDashboardPage from '../components/ClientDashboardPage';
import AddClientPage from '../components/AddClientPage';
import EditClientPage from '../components/EditClientPage';
import ViewClientPage from '../components/ViewClientPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact />
        <PrivateRoute path="/dashboard" component={ClientDashboardPage} exact />
        <PrivateRoute path="/create" component={AddClientPage} />
        <PrivateRoute path="/edit/:id" component={EditClientPage} />
        <PrivateRoute path="/view/:id" component={ViewClientPage} />
        <PublicRoute path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
