export const SET_USER = 'SET_USER';

const initialState = {
    token: '',
    email: '',
    user_id: -1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return Object.assign({}, state, action.payload);
        }
        default: {
            return Object.assign({}, state);
        }
    }
}