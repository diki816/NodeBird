import { all, fork, call, takeLatest, put, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE
    , LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE
    , SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
    } from '../reducers/user';

function logInAPI(data) {
    return axios.post('/api/login', data)
}

function logOutAPI() {
    return axios.post('/api/logout')
}

function signUpAPI() {
    return axios.post('/api/signUp')
}


function* logIn(action) {
    try {
        console.log('saga logIn');
        //yield를 사용하면 테스트가용이 i.next()시 다음 yield전까지 실행
        //const result = yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}

function* logOut() {
    try {
        const result = yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        })
    }
}

function* signUp(action) {
    try {
        console.log('saga signUp');
        //yield를 사용하면 테스트가용이 i.next()시 다음 yield전까지 실행
        //const result = yield call(logInAPI, action.data);
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(signUp),
    ]);
}