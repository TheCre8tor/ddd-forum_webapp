import { createStore, applyMiddleware, compose, Action } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import rootReducer from './reducers/combine_reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<any, null, Action>;
export type AppThunkAction<T = any> = ThunkAction<T, any, null, Action<any>>;

export default store;
