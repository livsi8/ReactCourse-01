import constants from "../../constants/constants";

export const addNewUser = payload => {
    return dispatch => {
        dispatch({
        type: constants.ADD_NEW_USER,
        payload
        });
    }
};

export const addCurrentUser = payload => {
    return dispatch => {
        dispatch({
            type: constants.ADD_CURRENT_USER,
            payload
        });
    }
};

export const toggleChat = payload => {
    return dispatch => {
        dispatch({
            type: constants.TOGGLE_CHAT_MODULE,
            payload
        });
    }
};

export const deleteUser = payload => {
    return dispatch => {
        dispatch({
            type: constants.DELETE_USER,
            payload
        });
    }
};

export const addNewMessage = payload => {
    return {
        type: constants.ADD_NEW_MESSAGE_TO_SERVER,
        payload
    }
};

export const editUser = payload => {
    return {
        type: constants.EDIT_USER,
        payload
    }
};

export const changeLanguage = payload => {
    return {
        type: constants.CHANGE_LANGUAGE,
        payload
    }
};

export const deleteAllUsers = payload => {
    return {
        type: constants.DELETE_ALL_USERS,
        payload
    }
};
