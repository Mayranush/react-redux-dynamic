import React from 'react';
import { Router, browserHistory } from 'react-router/es6';
import MainLayout from 'containers/layout';
import store from 'store';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

function requireAuth (nextState, replace, callback) {
  const token = store.getState().general.token || window.sessionStorage.getItem("token");
  if (!token) replace('/login');
  return callback()
}

function dontRequireAuth(nextState, replace, callback) {
  const token = store.getState().general.token || window.sessionStorage.getItem("token");
  if (token) replace('/dashboard');
  return callback()
}

const routes = {
  component: MainLayout,
  childRoutes: [
    {
      path: '/',
      onEnter: dontRequireAuth,
      getComponent(location, cb) {
        System.import('pages/home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'about',
      onEnter: dontRequireAuth,
      getComponent(location, cb) {
        System.import('pages/about')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'login',
      onEnter: dontRequireAuth,
      getComponent(location, cb) {
        System.import('pages/login')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'register',
      onEnter: dontRequireAuth,
      getComponent(location, cb) {
        System.import('pages/register')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'message',
      getComponent(location, cb) {
        System.import('pages/successPage')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'dashboard',
      onEnter: requireAuth,
      getComponent(location, cb) {
        System.import('pages/dashboard')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'wallet',
      onEnter: requireAuth,
      getComponent(location, cb) {
        System.import('pages/wallet')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'charts',
      onEnter: requireAuth,
      getComponent(location, cb) {
        System.import('pages/charts')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'tables',
      onEnter: requireAuth,
      getComponent(location, cb) {
        System.import('pages/tables')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'settings',
      onEnter: requireAuth,
      getComponent(location, cb) {
        System.import('pages/settings')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'users',
      onEnter: requireAuth,
      getComponent(location, cb) {
        System.import('pages/admin')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'admins',
      onEnter: requireAuth,
      getComponent(location, cb) {
        System.import('pages/adminForAdmins')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'password/recovery',
      getComponent(location, cb) {
        System.import('pages/password/recovery')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'password/reset',
      getComponent(location, cb) {
        System.import('pages/password/reset')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'activate',
      getComponent(location, cb) {
        System.import('pages/activate')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'reset',
      getComponent(location, cb) {
        System.import('pages/reset')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    }
  ]
};

export default () => <Router history={browserHistory} routes={routes} />;
