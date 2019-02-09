import { takeEvery, put, select } from 'redux-saga/effects';
import constants from '../constants/constants';
import { ru } from '../languages/russian/rus';
import { en } from '../languages/english/en';

export default function* watchLanguageSaga() {
    yield takeEvery(constants.CHANGE_LANGUAGE, changeLanguage);
}

function* changeLanguage(action) {
    const payload = action.payload === 'ru' ? ru : en;
    yield put({
        type: constants.CHANGE_CURRENT_LANGUAGE_STORE,
        payload: action.payload
    });
    yield put({
        type: constants.CHANGE_LANGUAGE_SAGA,
        payload: payload
    })
}


