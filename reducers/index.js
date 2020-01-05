import { combineReducers } from 'redux';
import login from '../screens/Login/reducer';
import register from '../screens/Register/reducer';
import user from '../screens/Dashboard/reducer';

export default combineReducers({
    login,
    register,
    user
});
