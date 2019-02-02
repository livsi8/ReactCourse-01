import constants from "../../constants/constants";

export const addNewUser = () => {
    return {
        type: constants.ADD_NEW_USER,
    }
};

export const addNewMessage = payload => {
    return {
        type: constants.ADD_NEW_MESSAGE,
        payload
    }
};

export const changeStateSelectedUser = payload => {
    return {
        type: constants.CHANGE_STATE_SELECTED_USER,
        payload
    }
};