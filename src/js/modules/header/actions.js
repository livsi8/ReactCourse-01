import constants from "../../constants/constants";

export const changeLang = (payload) => {
    return {
        type: constants.CHANGE_LANGUAGE,
        payload
    }
};