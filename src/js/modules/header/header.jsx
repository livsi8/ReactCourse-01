import React from 'react';
import PureComponent from "../../base/pureComponent/PureComponent.jsx";
// import Messages from './components/messages/Messages.jsx';
// import Users from './components/users/Users.jsx';
import './header.less';

export default class Header extends PureComponent {

    render() {
        return(
            <div className='header-wrapper header'>
                <div className="header__change-lang">
                    <select name="select" id='lang'>
                        <option value="value1" selected>EN</option>
                        <option value="value2">RU</option>
                    </select>
                </div>
            </div>
        )
    }
}