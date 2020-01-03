export const START_REGISTER = 'START_REGISTER';
export const SUCCESS_REGISTER = 'SUCCESS_REGISTER';
export const FAIL_REGISTER = 'FAIL_REGISTER';

const initialState = {
    loading: false,
    success: undefined,
    failute: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case START_REGISTER: {
            return Object.assign({}, state, { loading: true });
        }
        case SUCCESS_REGISTER: {
            return Object.assign({}, state, { loading: false, success: true });
        }
        case FAIL_REGISTER: {
            return Object.assign({}, state, { loading: false, success: false });
        }
        default: {
            return state;
        }
    }
}