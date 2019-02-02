import {all} from 'redux-saga/effects';
import watchChartSaga from '../modules/chat/saga';


export default function* watchRootSaga() {
    yield all(
        [
            watchChartSaga()
        ]
    )
}