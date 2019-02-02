import React from 'react';
import moment from 'moment'

export default class User extends React.Component {

    addNewUser = () => {

    };

    render() {
        return(
            <div className="main-wrapper__users users">
                <h3 className="users__title">Users Online:</h3>
                <ul>
                    {this.props.users.map(user => {
                        return <li key={user}>{user}</li>
                    })}
                </ul>
                <button onClick={addNewUser}>ADD</button>
            </div>
        )
    }
}