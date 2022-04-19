import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from '../../../modules/users/store/reducers';

const reducers = {
    users: usersReducer
};

function configureStore(initialState = {}) {
    return createStore(
        combineReducers({
            ...reducers
        }),
        initialState,
        compose(
            applyMiddleware(thunk),
            (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
        )
    );
}

export default configureStore;
