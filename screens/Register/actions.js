import { registerAPI } from '../../api';
import { SET_USER } from '../Dashboard/reducer';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (email, password) => {
    return dispatch => {
        dispatch({ type: REGISTER_START });
        registerAPI(email, password).then(({ data }) => {
            dispatch({ type: SET_USER, payload: data.data })
        }).catch(({ response }) => {
            dispatch({ type: REGISTER_FAILURE, payload: response.data.msg });
        });
    }
}