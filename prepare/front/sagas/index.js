import { all, fork } from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';


export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ]);
}

/* move to user.js
function logInAPI(data) {
    return axios.post('/api/login', data)
}

function logOutAPI() {
    return axios.post('/api/logout')
}
*/

/* move to post.js
function addPostAPI() {
    return axios.post('/api/post', data)
}
*/
/* 
function* logIn(action) {
    try {
        //yield를 사용하면 테스트가용이 i.next()시 다음 yield전까지 실행
        const result = yield call(logInAPI, action.data);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        })
    }
}

function* logOut() {
    try {
        const result = yield call(logOutAPI);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        })
    }
}
 */
/* 
function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        })
    }
}
 */
/* 
function* watchLogIn() {
    while (true) {
        yield take('LOG_IN_REQUEST',logIn);
    }
}

function* watchLogOut() {
    //replace while(true)
    //yield takeEvery('LOG_OUT_REQUEST',logOut);
    //ignore duplications
    yield takeLatest('LOG_OUT_REQUEST',logOut);
}
 */
/* 
function* watchAddPost() {
    //replace while(true)
    //ignore duplications
    yield takeLatest('ADD_POST_REQUEST',addPost);
    //ignore duplications in 10000(1초)
    //yield throttle('LOG_OUT_REQUEST',logOut, 10000);
}
 */
