import React from 'react';
import { UssersWrapper, UsersTitle, UsersLi, UsersUl } from '../../styled';

export default class Users extends React.Component {

    changeUser = (e) => {
        this.props.addCurrentUser(
            e.currentTarget.innerHTML
        );
    };

    render() {
        return (
            <UssersWrapper>
                <UsersTitle>{this.props.translations.usersOnline}</UsersTitle>
                <UsersUl>
                    {this.props.users.map(user => {
                        const color = user === this.props.currentUser ? 'red' : 'blue';
                        const fontWeight = user === this.props.currentUser ? 'bold' : 'normal';
                        return <UsersLi color={color} fontWeight={fontWeight} onClick={this.changeUser} key={user}>{user}</UsersLi>
                    })}
                </UsersUl>
            </UssersWrapper>
        );
    }
}
