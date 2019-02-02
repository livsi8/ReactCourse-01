import React from 'react';
import PureComponent from "../../base/pureComponent/PureComponent.jsx";
import Messages from './components/messages/Messages.jsx';
import Users from './components/users/Users.jsx';
import './chat.less';

export default class Chat extends PureComponent {

    render() {
        return(
            <div className='main-wrapper'>
                <Messages
                    messages={this.props.messages}
                    addNewMessage={this.props.addNewMessage}
                    users={this.props.users}
                />
                <Users
                    users={this.props.users}
                    addNewUser={this.props.addNewUser}
                    changeStateSelectedUser={this.props.changeStateSelectedUser}
                />
            </div>
        )
    }
}