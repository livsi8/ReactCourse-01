import React from 'react';
import Messages from './components/messages/Messages.jsx';
import Users from './components/users/Users.jsx';
import { HideChatButton } from './components/hideChatButton/hideChatButton.jsx'
import { MainWrapper } from './styled';

export default class Chat extends React.Component {
    render() {
        return (
            this.props.chatState ?
                <MainWrapper>
                    <Messages
                        currentUser={this.props.currentUsers}
                        messages={this.props.messages}
                        addNewMessage={this.props.addNewMessage}
                    />
                    <Users
                        translations={this.props.translations}
                        users={this.props.users}
                        currentUser={this.props.currentUsers}
                        addCurrentUser={this.props.addCurrentUser}
                    />
                    <HideChatButton
                        toggleChat={this.props.toggleChat}
                    />
                </MainWrapper>
                : ''
        )
    }
}
