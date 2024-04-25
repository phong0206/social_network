// Actions Types
import * as types from "~/constants/store/login"


interface LoginRequestAction {
    type: typeof types.LOGIN_REQUEST,
    payload: {
        email: string,
        password: string,
    }
}

interface LoginSuccessAction {
    type: typeof types.LOGIN_SUCCESS;
    payload: { token: string; user: any };
}


interface LoginFailureAction {
    type: typeof types.LOGIN_FAILURE;
    payload: { error: string };
}

interface LogoutAction {
    type: typeof types.LOGOUT;
}

// Action creators
export interface LoginCredentials {
    email: string;
    password: string;
}

export const loginRequest = (credentials: LoginCredentials): LoginRequestAction => ({
    type: types.LOGIN_REQUEST,
    payload: credentials

})

export const loginSuccess = (token: string, user: any): LoginSuccessAction => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: { token, user },
    };
};


export const loginFailure = (error: any): LoginFailureAction => {
    return {
        type: types.LOGIN_FAILURE,
        payload: { error },
    };
};

export const loginResponse = (response: any) => ({
    type: 'LOGIN_RESPONSE',
    payload: response,
});
