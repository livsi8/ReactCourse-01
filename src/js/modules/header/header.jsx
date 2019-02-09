import React from 'react';
import PureComponent from "../../base/pureComponent/PureComponent.jsx";
// import Messages from './components/messages/Messages.jsx';
// import Users from './components/users/Users.jsx';
import './header.less';
import {changeLang} from "./actions";

export default class Header extends PureComponent {

    changeLanguage = (e) => {
        changeLang(e.target.value);
        // console.log(e.target.value);
    };

    render() {
        return(
            <div className='header-wrapper header'>
                <div className="header__change-lang">
                    <select name="select" id='lang' onChange={this.changeLanguage}>
                        <option value="EN" selected>EN</option>
                        <option value="RU">RU</option>
                    </select>
                </div>
            </div>
        )
    }
}