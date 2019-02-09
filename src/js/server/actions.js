import constants from "../constants/constants";

export const serverStatus = payload => {
    return {
        type: constants.SERVER_STATUS,
        payload
    }
};

export const addNewMessageServer = payload => {
    return {
        type: constants.ADD_NEW_MESSAGE_SERVER,
        payload
    }
};
