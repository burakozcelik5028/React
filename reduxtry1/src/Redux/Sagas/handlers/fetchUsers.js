import {call, put, takeEvery} from 'redux-saga';
import fetchGetUsers from '../requests/fetchUsers';

function* handleGetUsers() {
    try {
        const users = yield call(fetchGetUsers);
        yield put({type: 'GET_USERS_SUCCESS', users: users});
    } catch (error) {
        yield put({type: 'GET_USERS_ERROR', errorMessage: error.message});
    }
}

function* watcherUserSaga(){
    yield takeEvery('GET_USER_REQUESTED', handleGetUsers);
}

export default watcherUserSaga;