import React from 'react';
import dynamic from 'react-dynamic-loadable';
import { store } from './store';

// wrapper of dynamic
const dynamicWrapper = (models, component) => dynamic({
  models: () => models.map((m) => {
    return import(`./models/${m}.js`).then((md) => {
      const mdd = md[m] || md.default;
      mdd.name = m;
      store.model(mdd);
    });
  }),
  component,
  LoadingComponent: () => <span>loading....</span>,
});

export const getRouterData = () => {
  const conf = {
    '/': {
      component: dynamicWrapper(['user'], () => import('./layouts/BasicLayout')),
    },
    '/home': {
      component: dynamicWrapper([], () => import('./routes/Home')),
    },
    '/login': {
      component: dynamicWrapper(['user'], () => import('./routes/Login')),
    },
    '/detail/@:scope/:package': {
      component: dynamicWrapper([], () => import('./routes/Detail')),
    },
    '/detail/:package': {
      component: dynamicWrapper([], () => import('./routes/Detail')),
    },
  };
  return conf;
};
