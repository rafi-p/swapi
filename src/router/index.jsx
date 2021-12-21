import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import {
  Dashboard,
  Wishlist,
  NotFound
} from '../screens';

let publicRoutes =  [
    {
      path: '/',
      component: Dashboard,
    },
    {
      path: '/wishlist',
      component: Wishlist,
    },
    {
      path: '/not-found',
      component: NotFound,
    },
  ];

const Router = props => {

  return (
    // <ConnectedRouter history={ props.history }>
    <Switch>
      {
        publicRoutes.map(route =>
          <Route
            key={ route.path }
            exact path={ route.path }
            component={ route.component }
          />
        )
      }
      <Redirect to={ '/not-found' }/>
    </Switch>
    // </ConnectedRouter>
  );
};

export default Router;
