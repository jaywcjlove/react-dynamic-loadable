import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-dynamic-loadable';

const LoadableComponent = Loadable({
  component: () => import('./my-component'),
  LoadingComponent: () => <div>loading</div>,
});

ReactDOM.render(
  <div>
    test
    <React.StrictMode>
      <LoadableComponent />
    </React.StrictMode>
  </div>,
  document.getElementById('root'),
);
