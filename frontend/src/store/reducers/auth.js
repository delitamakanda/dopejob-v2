import {
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGOUT_USER,
    RESET_AUTH_LOGIN_USER_FAILURE
} from '../constants';

const initialState = {
    token: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null,
    loading: false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_LOGIN_USER_REQUEST:
            return Object.assign({}, state, {
                isAuthenticating: true,
                statusText: null,
                loading: true
            });

        case AUTH_LOGIN_USER_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticating: false,
                isAuthenticated: true,
                token: action.payload.token,
                statusText: 'You have been successfully logged in.',
                loading: false
            });

        case AUTH_LOGIN_USER_FAILURE:
            return Object.assign({}, state, {
                isAuthenticating: false,
                isAuthenticated: false,
                token: null,
                statusText: `Authentication Error: ${action.payload.status} - ${action.payload.statusText}`,
                loading: false
            });
        case RESET_AUTH_LOGIN_USER_FAILURE:
            return Object.assign({}, state, {
                isAuthenticated: false,
                token: null,
                statusText: null
            });
        case AUTH_LOGOUT_USER:
            return Object.assign({}, state, {
                isAuthenticated: false,
                token: null,
                statusText: 'You have been successfully logged out.'
            });

        default:
            return state;
    }
}
