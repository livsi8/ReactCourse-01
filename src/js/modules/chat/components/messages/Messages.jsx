import React from 'react';
import moment from 'moment';
import { ChatWraper, ChatUser, ChatInput, ChatMeseges, MessageDate, MessageAutor } from '../../styled';

export default class Messages extends React.Component {

    submitForm = event => {
        event.preventDefault();
        this.props.addNewMessage({
            text: this.node.value,
            author: this.props.currentUser,
            datetime: new Date().getTime()
        });
        this.node.value = '';
    };

    render() {
        return (
            <ChatWraper>
                <ChatUser>{this.props.currentUser}</ChatUser>
                <form onSubmit={this.submitForm} action="#">
                    {this.props.messages.map((message,i) =>
                        <ChatMeseges key={i}>
                            <MessageDate>{moment(message.datetime).format('DD:MM:YYYY hh:mm')}</MessageDate>
                            <MessageAutor>{message.author}</MessageAutor>
                            <span>{message.text}</span>
                        </ChatMeseges>
                    )}
                    <ChatInput ref={node => this.node = node} type="text"/>
                </form>
            </ChatWraper>
        );
    }
}
