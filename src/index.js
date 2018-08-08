import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import reducer from './reducers';
import Base from './router/Base';
import finalCreateStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './style/reast.css';

import zhCN from 'antd/lib/locale-provider/zh_CN';


const store = finalCreateStore(reducer);
ReactDOM.render(
	<Provider store={store}>
		<LocaleProvider locale={zhCN}>
		<Base />
		</LocaleProvider>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
