import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './modal.less';
import { CloseModalButton, DeleteUser, EditUser, UsersLi, UsersUl, DeleteAllBtn } from './styled';
import { AddButton, AddInput, ReactForm } from "../sidebar/styled";

export default class ModalWindow extends React.Component {
    static propTypes = {
        callbackClose: PropTypes.func.isRequired,
        currentLanguage: PropTypes.string.isRequired,
        languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    constructor(props) {
        super(props);
        this.portal = document.createElement('div');
        document.body.appendChild(this.portal);
        this.state = {
            editingUser: '',
        };
    }

    componentWillUnmount() {
        document.body.removeChild(this.portal);
    };

    onLangChange = (event) => {
        this.props.changeLang(event.target.value);
    };

    clickAdd = event => {
        event.preventDefault();
        if (!this.addInput.value) {
            return
        }

        let alreadyHave = false;

        this.props.users.map(user => {
            if (this.addInput.value === user) {
                alreadyHave = true;
            }
        });

        if (alreadyHave) {
            alert('User с ником "' + this.addInput.value + '" уже существует');
        }
        this.props.addNewUser(
            this.addInput.value
        );
    };

    render() {
        const {callbackClose, currentLanguage, languages, translations, deleteUser, editUsers} = this.props;

        return ReactDOM.createPortal(
            <div className="modal-window-wrapper">
                <div className="modal-window-wrapper__content-text">{translations.chatSettings}</div>
                <div className="modal-window-wrapper__button-container">
                </div>

                <CloseModalButton className="custom-button"
                                  onClick={callbackClose}>{translations.closeModal}</CloseModalButton>
                <select value={currentLanguage} onChange={this.onLangChange}>
                    {languages.map(lang => {
                        return <option key={lang}>{lang}</option>
                    })}
                </select>
                <UsersUl>
                    {this.props.users.map(user => {
                        if (user === this.state.editingUser) {
                            return <UsersLi key={user}><input ref={node => this.editInput = node}
                                                              defaultValue={this.state.editingUser}/> <EditUser
                                key={user + '1'} onClick={() => {
                                editUsers([this.editInput.value, this.state.editingUser])
                                this.setState({editingUser: ''})
                            }}>{translations.editDone}</EditUser></UsersLi>
                        } else if (user !== 'Admin') {
                            return <UsersLi key={user}>{user} <EditUser key={user + '1'} onClick={() => {
                                this.setState({editingUser: user})
                            }}>{translations.editBtn}</EditUser> <DeleteUser onClick={() => {
                                deleteUser(user)
                            }
                            }>{translations.deleteBtn}</DeleteUser></UsersLi>
                        } else {
                            return <UsersLi key={user}>{user}</UsersLi>
                        }
                    })}
                </UsersUl>
                <ReactForm onSubmit={this.clickAdd} action="#">
                    <AddInput ref={node => this.addInput = node} type="text"/>
                    <AddButton onClick={this.clickAdd}>{this.props.translations.addBtn}</AddButton>
                    <DeleteAllBtn
                        onClick={this.props.deleteAllUsers}>{this.props.translations.deleteAllBtn}</DeleteAllBtn>
                </ReactForm>
            </div>,
            this.portal
        );
    }
}
