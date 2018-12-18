import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import ClientDashboardPage from '../components/ClientDashboardPage';
import AddClientPage from '../components/AddClientPage';
import EditClientPage from '../components/EditClientPage';
import ViewClientPage from '../components/ViewClientPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/dashboard" component={ClientDashboardPage} exact />
        <Route path="/create" component={AddClientPage} />
        <Route path="/edit/:id" component={EditClientPage} />
        <Route path="/view/:id" component={ViewClientPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
