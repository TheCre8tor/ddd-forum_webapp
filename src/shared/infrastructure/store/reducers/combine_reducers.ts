import { combineReducers } from 'redux';

import Users from '../../../../modules/users/store/reducers';

const rootReducer = combineReducers({
    Users
});

export default rootReducer;
