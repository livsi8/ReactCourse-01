
import config from '../config';
import { combineReducers } from __

const userInitialState = ['alex01', 'alex02', 'alex03'];

const configReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case 'TOGGLE_CHAT_MODULE': {
            return{
                ...state,
                activeBlocks: {
                    ...state.activeBlocks,
                    chat: !state.activeBlocks.chat
                }
            }
        }

        // case 'ADD_NEW_USER':
        //     return [
        //         ...state,
        //         action.payload
        //     ]
        default: {
            return state;
        }
    }
    return state;
}

// const configReducer = (state = config, action) => {
//
// }

export default combineReducers