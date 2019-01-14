import React from 'react';
import Messages from './components/messages/Messages.jsx';
import Users from './components/users/Users.jsx';
import './chat.less';

export default class Chat extends React.Component {

    render() {
        return (
            <div className="main-wrapper">
                <Messages
                    messages={this.props.messages}
                    addNewMessage={this.props.addNewMessage}
                />
                <Users
                    users={this.props.users}
                    addNewUser={this.props.addNewUser}
                />
            </div>
        );
    }
}