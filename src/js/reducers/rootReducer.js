import config from '../../config/config';
import { combineReducers } from 'redux';
import constans from '../constans/constans'
import lang from '../../languange/english/en'

const userInitialState = ['sdgfsdf', 'dsafdsfsd', 'asfdsf', 'dsfgdsg'];

const userReducer = (state = userInitialState, action) => {
    switch(action.type) {
        case constans.ADD_NEW_USER: return [ ...state, action.payload];
        default: {
            return state;
        }
    };

    return state;
};

const configReducer = (state = config, action) => {
    switch(action.type) {
        case constans.TOGGLE_CHAT_MODULE: {
            return {
                ...state,
                activeBlock: {
                    ...state.activeBlocks,
                    chat: !state.activeBlocks.chat
                }
            }
        }
        default: {
            return state;
        }
    };

    return state;
};


const languageReducer = ( state = lang, action) => {
    switch(action.type) {
        case constans.CHANGE_LANGUANGE: {
            return {
                ...action.payload,
            }
        }
        default: {
            return state;
        }
    };

    return state;
};

export default combineReducers({
    userReducer,
    configReducer,
    // languageReducer
})