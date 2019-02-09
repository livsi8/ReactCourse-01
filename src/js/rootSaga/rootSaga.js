import {all} from 'redux-saga/effects';
import watchChartSaga from '../modules/chat/saga';
import watchHeaderSaga from '../modules/header/saga';


export default function* watchRootSaga() {
    yield all(
        [
            watchChartSaga(),
            watchHeaderSaga()
        ]
    )
}