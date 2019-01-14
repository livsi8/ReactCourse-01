import React from 'react';

export default class Users extends React.Component {
    render() {
        return (
            <div className="main-wrapper__users users">
                <h3 className="users__title">Users Online:</h3>
                <ul>
                    {this.props.users.map(user => {
                        return <li key={user}>{user}</li>
                    })}
                </ul>
                <button onClick={this.props.addNewUser}>ADD</button>
            </div>
        );
    }
}