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
    <LoadableComponent />
  </div>,
  document.getElementById('root'),
);
