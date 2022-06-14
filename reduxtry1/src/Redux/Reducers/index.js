import { combineReducers } from 'redux';
import counterReducer from './counter';
import isLoginReducer from './isLogin';
import usersReducer from './users'; 

const allReducers = combineReducers({
    counter: counterReducer, 
    isLogin: isLoginReducer,
    users: usersReducer,
});

export default allReducers;
