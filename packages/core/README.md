react-dynamic-loadable
---

[![Build and Lint](https://github.com/jaywcjlove/react-dynamic-loadable/workflows/Build%20and%20Lint/badge.svg)](https://github.com/jaywcjlove/react-dynamic-loadable/actions)

A higher order component for loading components with dynamic imports.

## Install

```bash
npm install react-dynamic-loadable --save
```

## Simple Example

> [Simple Example code](./example/simple)

```js
import loadable from 'react-dynamic-loadable';
import Loading from './my-loading-component';

// Add Loading component.
loadable.setDefaultLoadingComponent(<div>Loading</div>);

const LoadableComponent = loadable({
  component: () => import('./my-component'),
  // LoadingComponent: () => Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}

```

## Example

Use [Redux](https://github.com/reactjs/redux) (**[@rematch](https://github.com/rematch/rematch)**), [React Router](https://github.com/ReactTraining/react-router) [Example](./example/router-redux-rematch).

> [Example code](./example/router-redux-rematch)

```js
import React from 'react';
import { model } from '@rematch/core';
import loadable from 'react-dynamic-loadable';

const dynamicWrapper = (models, component) => loadable({
  models: () => models.map((m) => {
    return import(`./models/${m}.js`).then((md) => {
      model({ name: m, ...md[m] || md.default });
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
  };
  return conf;
};
```

## Server-Side Rendering

```js
// webpack.config.js
import { DynamicLoadablePlugin } from 'react-dynamic-loadable/DynamicLoadablePlugin';
 
export default {
  plugins: [
    new DynamicLoadablePlugin({
      filename: './dist/loadable-assets.json',
      exclude: /.(js|css)$/
    }),
  ],
};
```


```js
import { getBundles } from 'react-dynamic-loadable/DynamicLoadablePlugin';
let bundles = getBundles(stats, modules);
```