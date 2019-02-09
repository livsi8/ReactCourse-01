import { all } from 'redux-saga/effects';
import watchRootChatSaga from '../modules/chat/saga';
import modalSaga from '../modules/maincomponent/modal/saga';
import languageSaga from '../managers/languageSaga';
import { initConnection } from '../server/chanel';

export default function* watchRootAllSaga() {
    yield all([
        watchRootChatSaga(),
        modalSaga(),
        languageSaga(),
        initConnection()
    ])
}
