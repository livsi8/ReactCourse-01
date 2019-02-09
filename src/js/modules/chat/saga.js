import { takeEvery, put, takeLatest, select, throttle } from 'redux-saga/effects';
import constants from '../../constants/constants.js'
import { ws } from "../../server/chanel";
import { getCurrentUser } from '../chat/selectors'

function* watchAddUser(actions) {
    yield put({
        type: constants.ADD_NEW_MESSAGE_TO_SERVER,
        payload: {
            text: 'Поприветсвуем нового юзера ' + actions.payload,
            author: 'Admin',
            dateTime: new Date().getTime(),
        }
    });
}

function* watchDeleteUser(action) {

    yield put({
        type: constants.ADD_NEW_MESSAGE_TO_SERVER,
        payload: {
            text: action.payload + ' был удален из чата',
            author: 'Admin',
            dateTime: new Date().getTime(),
        }
    })
}

function* sendMessageServer(action) {
        yield put({
            type: constants.ADD_NEW_MESSAGE,
            payload: {
                text: action.payload.text,
                author: action.payload.author,
                dateTime: action.payload.datetime
            }
        })
}

function* sendMessage(action) {
        yield  ws.send(JSON.stringify({
            text: action.payload.text,
            author: action.payload.author,
            datetime: action.payload.datetime
        }));
    }

export default function* watchMessage() {
    yield takeEvery(constants.ADD_NEW_USER, watchAddUser);
    yield takeEvery(constants.ADD_NEW_MESSAGE_SERVER, sendMessageServer);
    yield takeEvery(constants.ADD_NEW_MESSAGE_TO_SERVER, sendMessage);
    yield takeEvery(constants.DELETE_USER, watchDeleteUser);
}
