import axios from 'axios';
import { checkHttpStatus } from '../../utils';
import {
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGOUT_USER,
    RESET_AUTH_LOGIN_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from '../constants';
import { getUserURL } from '../../api/constants'


export function getUserRequest() {
    return {
        type: GET_USER_REQUEST
    };
}

export function getUserSuccess(user) {
    console.log(user)
    return {
        type: GET_USER_SUCCESS,
        payload: {
            user,
        }
    };
}

export function getUserFailure() {
    return {
        type: GET_USER_FAILURE
    };
}

export function authLoginUserSuccess(token) {
    console.log(token)
    localStorage.setItem('token', token);
    const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
    localStorage.setItem('expirationDate', expirationDate);
    axios.defaults.headers.common.Authorization = 'Token ' + token;
    return {
        type: AUTH_LOGIN_USER_SUCCESS,
        payload: {
            token,
        }
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout())
        }, expirationTime * 1000)
    }
}

export function resetAuthLoginUserFailure() {
    return {
        type: RESET_AUTH_LOGIN_USER_FAILURE
    };
}

export function authLoginUserFailure(error, message) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTH_LOGIN_USER_FAILURE,
        payload: {
            status: error,
            statusText: message
        }
    };
}

export function authLoginUserRequest() {
    return {
        type: AUTH_LOGIN_USER_REQUEST
    };
}

export function authLogoutUserRequest() {
    return {
        type: AUTH_LOGOUT_USER
    };
}

export function authLogout() {
    return (dispatch) => {
        dispatch(authLogoutUserRequest());
        axios
            .post('/rest-auth/logout/', {})
            .then(checkHttpStatus)
            .then(() => {
                delete axios.defaults.headers.common.Authorization;
                localStorage.removeItem('token');
                localStorage.removeItem('expirationDate');
            })
            .catch((error) => {
                console.log(`Connection Error', 'An error occurred while sending your data! ${error}`);
            });
    }
}

export function authLogoutAndRedirect() {
    return (dispatch, state) => {
        dispatch(authLogout());
        return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
    };
}

export function authLoginUser(username, password) {
    return (dispatch) => {
        dispatch(authLoginUserRequest());
        axios
            .post('/rest-auth/login/', {
                email: username,
                password: password
            })
            .then(checkHttpStatus)
            .then(response => {
                dispatch(authLoginUserSuccess(response.data.key));
                dispatch(checkAuthTimeout(3600));
            })
            .catch((error) => {
                if (error && typeof error.response !== 'undefined' && error.response.status === 401) {
                    // Invalid authentication credentials
                    return error.response.json().then((data) => {
                        dispatch(authLoginUserFailure(401, data.non_field_errors[0]));
                    });
                } else if (error && typeof error.response !== 'undefined' && error.response.status >= 500) {
                    // Server side error
                    dispatch(authLoginUserFailure(500, 'A server error occurred while sending your data!'));
                } else {
                    // Most likely connection issues
                    dispatch(authLoginUserFailure('Connection Error', 'An error occurred while sending your data!'));
                }

                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}

export function getCurrentUser() {
    return (dispatch) => {
        dispatch(getUserRequest());
        axios
            .get(getUserURL)
            .then(checkHttpStatus)
            .then(response => {
                dispatch(getUserSuccess(response.data));
            })
            .catch((error) => {
                dispatch(getUserFailure(`Connection Error', 'An error occurred while sending your data! ${error}`));

                return Promise.resolve(); // TODO: we need a promise here because of the tests, find a better way
            });
    };
}

export const authSignup = (username, email, password1, password2, last_name, first_name, birth_date, home_phone_number, mobile_phone_number, user_type) => {
    return dispatch => {
        dispatch(authLoginUserRequest())
        axios
            .post('/jobboard-api/user-registration', {
                username: username,
                email: email,
                password: password1,
                password1: password1,
                password2: password2,
                last_name: last_name,
                first_name: first_name,
                birth_date: birth_date,
                home_phone_number: home_phone_number,
                mobile_phone_number: mobile_phone_number,
                user_type: user_type
            })
            .then(res => {
                dispatch(authLoginUserSuccess(res.data.key));
                dispatch(checkAuthTimeout(3600))
            })
            .catch(err => {
                dispatch(authLoginUserFailure(401, err))
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        if (token === undefined) {
            dispatch(authLogout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if (expirationDate <= new Date()) {
                dispatch(authLogout())
            } else {
                dispatch(authLoginUserSuccess(token, user))
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}