import config from '../config/config';
import { combineReducers } from "redux";
import constants from '../constants/constants';

const usersInitialState = [
    {
        isActive: true,
        name: '@john_123',
    },{
        isActive: false,
        name: '@alex_123',
    },{
        isActive: false,
        name: '@fred_678',
    },
];

const messageInitialState = [
    {
        text: "hello everyone",
        author: '@john_123',
        datetime: 1547303615302
    },
    {
        text: "Hi John",
        author: '@allex_123',
        datetime: 1547303615303
    }
]
const usersReducer = (state = usersInitialState, action) => {
    switch(action.type) {
        case constants.ADD_NEW_USER: {
            return [
                ...state,
                action.payload
            ]
        }
        default:
            return state;
    }
}

const messagesReducer = (state = messageInitialState, action) => {
    switch(action.type) {
        case constants.ADD_NEW_MESSAGE: {
            return [
                ...state,
                action.payload
            ]
        }
        default:
            return state;
    }
}

const configReducer = (state = config, action) => {
    switch(action.type) {
        case constants.TOGGLE_CHAT_MODULE: {
            return {
                ...state,
                activeBlocks: {
                    ...state.activeBlocks,
                    chat: !state.activeBlocks.chat
                }
            }
        }
        default:
            return state;
    }
}

export default combineReducers({
    users: usersReducer,
    config: configReducer,
    messages: messagesReducer
})