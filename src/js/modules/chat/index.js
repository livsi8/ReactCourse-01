import {connect} from "react-redux";
import Component from './Chat.jsx'
import * as selectors from './selectors';
import * as actions from './actions';

const mapStateToProps = state => ({
    messages: selectors.getMessages(state),
    users: selectors.getUsers(state)
});

const mapDispatchToProps = dispatch => ({
    addNewMessage: payload => dispatch(actions.addNewMessage(payload)),
    addNewUser: () => dispatch(actions.addNewUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)