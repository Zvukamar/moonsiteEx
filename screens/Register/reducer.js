import { REGISTER_START, REGISTER_FAILURE } from "./actions";

const initialState = {
    errormessage: '',
    loading: false,
    success: undefined,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START: {
            return Object.assign({}, state, { loading: true });
        }
        case REGISTER_FAILURE: {
            return Object.assign({}, state, { loading: false, success: false, errormessage: action.payload })
        }
        default: {
            return Object.assign({}, state);
        }
    }
}