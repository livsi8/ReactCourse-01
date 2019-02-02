import { connect } from 'react-redux';
import Component from './Chat.jsx';
import * as selectors from './selectors';
import * as actions from './actions';
// import { bindActionCreator } from 'redux'; // можно его было бы использовать


const mapStateToProps = state => ({
    messages: selectors.getMessages(state),
    users: selectors.getUsers(state)
});

const mapDispatchToProps = dispatch => ({
    addNewUser: () => dispatch(actions.addNewUser()),
    addNewMessage: (payload) => dispatch(actions.addNewMessage(payload)),
    changeStateSelectedUser: payload => dispatch(actions.changeStateSelectedUser(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);