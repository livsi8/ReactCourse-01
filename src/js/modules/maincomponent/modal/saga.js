import { takeEvery, put, select } from 'redux-saga/effects';
import constants from '../../../constants/constants'
import { getUsers, getCurrentUser } from '../selectors'

function* editUser(action) {
    const users = yield select(getUsers);

    const payload = users.map((user) => {
        if (user === action.payload[1]){
            user = action.payload[0]
        }
        return user;
    });

    yield put({
        type: constants.EDIT_USER_SAGA,
        payload: payload
    })
}

function* deleteAllUsers() {
    const users = yield select(getUsers);
    if (users.length > 1) {
        yield put({
            type: constants.ADD_NEW_MESSAGE,
            payload: {
                text:'Все пользователи были удалены из чата',
                author: 'Admin',
                dateTime: new Date().getTime(),
            }
        })
    }
    yield put({
        type: constants.DELETE_ALL_USERS_STORE,
        payload: []
    });
}

export default function* modalSaga() {
    yield takeEvery(constants.EDIT_USER, editUser);
    yield takeEvery(constants.DELETE_ALL_USERS, deleteAllUsers);
}
