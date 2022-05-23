import {combineReducers} from 'redux';
import auth from './auth';
import user from './user';
import staff from './staff';
import panel from './panel';

export default combineReducers({
    auth , user , staff ,panel
});