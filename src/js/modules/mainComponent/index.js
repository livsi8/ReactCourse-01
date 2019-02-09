import {connect} from "react-redux";
import MainComponent from './MainComponent.jsx'
import * as selectors from './selectors';
import * as actions from "../chat/actions";

const mapStateToProps = state => ({
    currentUsers: selectors.getCurrentUser(state),
    modules: selectors.getConfigModules(state),
    activeBlocks: selectors.getConfigActiveModules(state),
    chatState: selectors.getChatState(state),
    users: selectors.getUsers(state),
    translations: selectors.getTranslations(state),
    languages: selectors.getPlatformLanguages(state),
    currentLanguage: selectors.getCurrentLanguage(state),
});

const mapDispatchToProps = dispatch => ({
    addNewUser: payload => dispatch(actions.addNewUser(payload)),
    toggleChat: payload => dispatch(actions.toggleChat(payload)),
    deleteUser: payload => dispatch(actions.deleteUser(payload)),
    editUsers: payload => dispatch(actions.editUser(payload)),
    changeLanguage: payload => dispatch(actions.changeLanguage(payload)),
    deleteAllUsers: payload => dispatch(actions.deleteAllUsers(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent)
