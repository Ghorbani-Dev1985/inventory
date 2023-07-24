import { legacy_createStore as createStore , applyMiddleware } from "redux";
import rootReducer from "./RootReducer.js";
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';


import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./Sagas/RootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(logger , thunk , sagaMiddleware)));


// Then run the saga
sagaMiddleware.run(rootSaga);

export default store;
