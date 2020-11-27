import { all, fork, call, takeLatest, put, delay } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE
    , LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE
    , SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
    , FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE
    , UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE
    } from '../reducers/user';

import axios from 'axios';

function logInAPI(data) {
    //return axios.post('http://localhost:3065/user/login', data)
    return axios.post('/user/login'); //index.js에서 공통부분 설정 ...axios.defaults.baseURL 
}

function logOutAPI() {
    return axios.post('/user/logout')
}

function signUpAPI(data) {
    return axios.post('/user', data);
}

function followAPI() {
    return axios.post('/user/follow')
}

function unfollowAPI() {
    return axios.post('/user/follow')
}


function* logIn(action) {
    try {
        console.log('saga logIn');
        //yield를 사용하면 테스트가용이 i.next()시 다음 yield전까지 실행
        const result = yield call(logInAPI, action.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
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
        //const result = yield call(logOutAPI);
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
        console.log('test : ', action.type);
        //yield를 사용하면 테스트가용이 i.next()시 다음 yield전까지 실행
        //const result = yield call(logInAPI, action.data);
        const result = yield call(signUpAPI, action.data);
        console.log(result);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.log(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}

function* follow(action) {
    try {
        //const result = yield call(followAPI);
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        })
    }
}

function* unfollow(action) {
    try {
        //const result = yield call(unfollowAPI);
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: UNFOLLOW_FAILURE,
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

function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnfollow),
    ]);
}