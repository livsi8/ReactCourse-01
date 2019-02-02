import config from '../config/config';
import { combineReducers } from 'redux';
import constants from '../constants/constants';
import lang from '../languages/english/en'
// import lang from '../languages/russian/ru'

const usersInitialState = [
    {name: '@john_123', isSelected: true},
    {name: '@alex_123', isSelected: false},
    {name: '@fred_123', isSelected: false},
];

const usersReducer = (state = usersInitialState, action) => {
    switch(action.type) {
        case constants.ADD_NEW_USER_STORE:
            return [
                ...state,
                action.payload
            ];
        case constants.CHANGE_STATE_SELECTED_USER:
            return state.map(user => {
                if (user.name === action.payload) {
                    return {name:user.name, isSelected: true}
                }
                return {name:user.name, isSelected: false}
                });

        default: {
            return state;
        }
    }
};

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
        default: {
            return state;
        }
    }
};

const languageReducer = (state = lang, action) => {
    switch(action.type) {
        case constants.CHANGE_LANGUAGE: {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
};

const messagesInitialState = [
    {
        text: 'Hello everyone',
        author: '@john_123',
        datetime: 1547303615302
    },
    {
        text: 'Hi John',
        author: '@john_123',
        datetime: 1547303615303
    }
];

const messagesReducer = (state = messagesInitialState, action) => {
    switch(action.type) {
        case constants.ADD_NEW_MESSAGE: {
            return [
                ...state,
                action.payload
            ];
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    users: usersReducer,
    config: configReducer,
    strings: languageReducer,
    messages: messagesReducer
})
