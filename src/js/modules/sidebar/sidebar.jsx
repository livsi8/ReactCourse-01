import React from 'react';
import PureComponent from "../../base/pureComponent/PureComponent.jsx";
// import Messages from './components/messages/Messages.jsx';
// import Users from './components/users/Users.jsx';
import './sidebar.less';

export default class Sidebar extends PureComponent {

    toggleChat = ()=> {
        console.log('btn-toggle-chat')
    }

    render() {
        return(
            <div className='sidebar sidebar-wrapper'>
                <div className="sidebar__toggle-chat">
                    <button className='sidebar__btn-toggle-chat' onClick={this.toggleChat}>Toggle chat</button>
                </div>
            </div>
        )
    }
}