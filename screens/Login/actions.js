import { loginAPI } from '../../api';
import { SET_USER } from '../Dashboard/reducer';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (email, password) => {
    return dispatch => {
        dispatch({ type: LOGIN_START });
        loginAPI(email, password).then(({ data }) => {
            dispatch({ type: SET_USER, payload: data.data })
        }).catch(({ response }) => {
            dispatch({ type: LOGIN_FAILURE, payload: response.data.msg });
        })
    }
}