import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Route from './router/index'
import { AppContainer } from 'react-hot-loader';
import store from '@/store/store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

console.log(ReactDOM)
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}

render(Route)
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
