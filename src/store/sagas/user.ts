import { call, delay, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/user';
import { login } from '~/api/modules/authenticate';
import * as types from "~/constants/store/login"
import * as toast from "~/utils/toast"

interface LoginResponse {
    status: number
    data: any
}
function* loginSaga(action: ReturnType<typeof actions.loginRequest>) {
    const data = action.payload;
    try {
        const response: LoginResponse = yield call(login, data);
        const { access_token, userData } = response.data.data;

        if (response.status === 202) {
            localStorage.setItem('access_token', access_token);
            localStorage.setItem('userId', userData.id);
            yield put(actions.loginSuccess(access_token, userData));
            toast.toastSuccess('Login successful!')
            yield delay(2600); 
            window.location.href = '/';


        }
    } catch (error: any) {
        yield put(actions.loginFailure(error.response.data.message || error.message));
        toast.toastError(error.response.data.message || 'An error occurred')
    }
}

// Binds saga to action types
export function* watchLoginAsync() {
    yield takeLatest(types.LOGIN_REQUEST, loginSaga);
}