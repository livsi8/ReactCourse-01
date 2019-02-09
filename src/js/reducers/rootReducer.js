import config from '../config/config';
import { combineReducers } from "redux";
import constants from '../constants/constants';
import { ru } from '../languages/russian/rus'

const usersInitialState = ['Admin', 'Max', 'Stas', 'Rodion', 'Valera', 'Petr'];

const currentUser = 'Admin';

const messageInitialState = [
    {
        text: "hello everyone",
        author: 'Max',
        datetime: 1547304615302
    },
    {
        text: "Hi Max",
        author: 'Stas',
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
        case constants.DELETE_USER: {
            return state.filter(val => val !== action.payload);
        }
        case constants.DELETE_ALL_USERS_STORE: {
            return ['Admin']
        }
        case constants.EDIT_USER_SAGA: {
            return state = action.payload;
        }
        default:
            return state;
    }
};

const currentUserReducer = (state = currentUser, action) => {
    switch(action.type) {
        case constants.ADD_CURRENT_USER: {
            return state = action.payload;
        }
        case constants.DELETE_ALL_USERS_STORE: {
            return state = 'Admin';
        }
        default:
            return state;
    }
};

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
};

const languageReducer = (state = ru, action) => {
    switch(action.type) {
        case constants.CHANGE_LANGUAGE_SAGA: {
            return state = action.payload
        }
        default:
            return state;
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
        case constants.CHANGE_CURRENT_LANGUAGE_STORE: {
            return {
                ...state,
                platformLanguage: {
                    ...state.platformLanguage,
                    currentLanguage: action.payload,
                },
            }
        }
        default:
            return state;
    }
}

export default combineReducers({
    users: usersReducer,
    config: configReducer,
    messages: messagesReducer,
    currentUser: currentUserReducer,
    language: languageReducer
})
