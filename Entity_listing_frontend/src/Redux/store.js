import {legacy_createStore,combineReducers,applyMiddleware,compose}from 'redux';

import thunk from 'redux-thunk';
import productReducer from './products/reducer';

const rootReducer=combineReducers({ecommerceData:productReducer})

const composEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(
    rootReducer,
    composEnhancer(applyMiddleware(thunk))
);