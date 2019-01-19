import constants from "../../constants/constants";
import faker from 'faker';
export const addNewUser = () => {
    const payload = {
        isSelected: false,
        name: `@${faker.internet.userName().toLocaleLowerCase()}`,
    };

    return dispatch => {
        dispatch({
        type: constants.ADD_NEW_USER,
        payload
        });
        dispatch(addNewMessage({
            text: "HELLO EVERYBODY",
            author: payload.name,
            datetime: new Date().getTime(),
        }))
    }
};

export const addNewMessage = payload => {
    return {
        type: constants.ADD_NEW_MESSAGE,
        payload
    }
}