import {takeEvery, put} from 'redux-saga/effects';
import constants from "../../constants/constants";
import faker from 'faker';

export default function* watchHeaderSaga() {
    yield takeEvery(constants.CHANGE_LANGUAGE, chageLanguage)
}

function* chageLanguage() {
    // const payload = `@${faker.internet.userName().toLocaleLowerCase()}`;
    //
    // yield put({
    //     type: constants.ADD_NEW_USER_STORE,
    //     payload: {name: payload, isSelected: false}
    // });

    // yield put({
    //     type: constants.ADD_NEW_MESSAGE,
    //     payload: {
    //         text: 'HELLO EVERYBODY',
    //         author: payload,
    //         datetime: new Date().getTime()
    //     }
    // });
}