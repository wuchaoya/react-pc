import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';


const loggerMiddleware = createLogger;

const middleware = [thunk, loggerMiddleware];

// 利用compose增强store，这个 store 与 applyMiddleware 和 redux-devtools 一起使用
const finalCreateStore = compose(
    applyMiddleware(...middleware),
)(createStore);

export default finalCreateStore;
