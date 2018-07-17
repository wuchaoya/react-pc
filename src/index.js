import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Base from './router/Base';
import finalCreateStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './style/reast.css';

const store = finalCreateStore(reducer);
ReactDOM.render(
	<Provider store={store}>
		<Base />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
