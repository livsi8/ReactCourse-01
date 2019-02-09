import React from 'react';
import { ChatButton, SidebarModule } from './styled';

export default class Sidebar extends React.Component {

    hideChat = () => {
        this.props.toggleChat();
    };


    goBack = () => {
        this.props.propsFromLink.history.goBack()
    };

    render() {
        return (
            <SidebarModule>
                <ChatButton onClick={this.hideChat}>{this.props.chatState ? this.props.translations.hideChat : this.props.translations.showChat}</ChatButton>
            </SidebarModule>
        );
    }
}
