import * as types from "~/constants/store/login"

const initalState = {
    isLoading: false,
    token: null,
    user: null,
    error: false,
}

export const userReducer = (state = initalState, action: any) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: action.payload.token,
                user: action.payload.user,
                error: null,
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
        default:
            return state
    }

}