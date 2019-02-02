import React from 'react';
import moment from 'moment';

export default class Messages extends React.Component {

    submitForm = event => {
        event.preventDefault();
        let currentUser = null;
        this.props.users.map(user => {if (user.isSelected) currentUser =  user.name});
        this.props.addNewMessage({
            text: this.node.value,
            author: currentUser,
            datetime: new Date().getTime()
        });

        this.node.value = ''
    };

    render() {
        return(
            <div className='main-wrapper__chat chat'>
                <form onSubmit={this.submitForm} action="#">
                    {this.props.messages.map(message =>
                        <div key={message.datetime} className='chat__message message'>
                            <span className='message__date'>{moment(message.datetime).format('DD:MM:YYYY hh:mm')}</span>
                            <span className='message__author'>{message.author}</span>
                            <span>{message.text}</span>
                        </div>
                    )}
                    <input ref={node => this.node = node} type="text" className="chat__input"/>
                </form>
            </div>
        )
    }
}