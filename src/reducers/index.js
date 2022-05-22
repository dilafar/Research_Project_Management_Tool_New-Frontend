import {combineReducers} from 'redux';
import auth from './auth';
import user from './user';
import staff from './staff';

export default combineReducers({
    auth , user , staff
});