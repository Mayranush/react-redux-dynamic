import React from 'react';
import { Router, browserHistory } from 'react-router/es6';
import {MainLayout} from 'containers/layout';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

const routes = {
  component: MainLayout,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('pages/home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'about',
      getComponent(location, cb) {
        System.import('pages/about')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'login',
      getComponent(location, cb) {
        System.import('pages/login')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'register',
      getComponent(location, cb) {
        System.import('pages/register')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'blog',
      getComponent(location, cb) {
        System.import('pages/blog')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'password/recovery',
      getComponent(location, cb) {
        System.import('pages/password')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    }
  ]
};

export default () => <Router history={browserHistory} routes={routes} />;
