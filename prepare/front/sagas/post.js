import { all, fork, call, takeLatest, put } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE
    , ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
    , REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE} from '../reducers/post'
import { ADD_POST_TO_ME, REMOVE_POST_FROM_ME } from '../reducers/user';
import shortId from 'shortid';


function addPostAPI() {
    return axios.post('/api/post', data)
}

function removePostAPI() {
    return axios.delete('/api/post', data)
}

function addCommentAPI() {
    return axios.post('/api/post/${data.postId}/comment', data)
}

function* addPost(action) {
    try {
        //const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        const id = shortId.getnerate()
        yield put({
            type: ADD_POST_SUCCESS,
            data: { 
                id,
                content: action.data,
            }
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        })
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response,
        });
    }
}

function* removePost(action) {
    try {
        //const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        });
        yield put({
            type: REMOVE_POST_FROM_ME,
            data: action.data,
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            data: err.response.data,
        });
    }
}
function* addComment(action) {
    try {
        //const result = yield call(addPostAPI, action.data);
        yield delay(1000),
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST,addPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST,removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST,addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}