import * as actionTypes from './actionType';

const initState = {
    isAuth: false,
    token: null
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                isAuth: true,
                token: action.payload
            }
        default:
            return state;

    }
}

