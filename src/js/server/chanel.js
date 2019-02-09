import { call, take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { serverStatus, addNewMessageServer } from './actions';
export let ws;

export function* initConnection() {
    const channel = yield call(createWebSocket);
    while(channel) {
        const eventAction = yield take(channel);
        yield put(eventAction);
    }
};

export function createWebSocket() {

    ws = new WebSocket('ws://localhost:3000');
    return eventChannel(emitter => {
        ws.onopen = () => {
            emitter(serverStatus('ONLINE'));
        };

        ws.onclose = () => {
            emitter(serverStatus('DISCONNECTED'));
        };

        ws.onmessage = response => {
            const responseData = JSON.parse(response.data);
            const { text, author, datetime } = responseData;
            emitter(addNewMessageServer({
                text,
                author,
                datetime,
            }))
        };

        return () => {
            channel.close();
            channel = null;
        }
    });
}
