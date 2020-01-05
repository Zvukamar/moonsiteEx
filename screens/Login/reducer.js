import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

const initialState = {
    errormessage: '',
    loading: false,
    success: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: {
            return Object.assign({}, state, { loading: true });
        }
        case LOGIN_SUCCESS: {
            return Object.assign({}, state, { loading: false, success: true })
        }
        case LOGIN_FAILURE: {
            return Object.assign({}, state, { loading: false, success: false, errormessage: action.payload })
        }
        default: {
            return Object.assign({}, state);
        }
    }
}