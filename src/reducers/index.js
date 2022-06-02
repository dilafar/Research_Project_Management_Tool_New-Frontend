import {combineReducers} from 'redux';
import auth from './auth';
import user from './user';
import staff from './staff';
import panel from './panel';
import request from './request';
import response from './response';
import sgroup from './studentgroup';

export default combineReducers({
    auth , user , staff ,panel , request ,response , sgroup
});