import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Chat from "../chat/index";
import Sidebar from "./sidebar/sidebar.jsx";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { GlobalStyle, PageWrapper, Header, Main, Footer, SettingBtn } from "./styled";
import Modal from "./modal/modal";

export default class MainComponent extends React.Component {
    static propTypes = {
        modules: PropTypes.object.isRequired,
        activeBlocks: PropTypes.object.isRequired,
    };

    state = {
        showWindowPortal: false,
    };

    toggleModalWindow = () => {
        this.setState({
            showWindowPortal: !this.state.showWindowPortal,
        });
    }

    render() {

        return (
            <BrowserRouter>
                <div className=''>
                    <GlobalStyle/>
                        <Route exact path="/" component={(param) => <Fragment>
                            <PageWrapper>
                                <Header>
                                    <SettingBtn onClick={this.toggleModalWindow}>
                                    </SettingBtn>
                                    {this.state.showWindowPortal &&
                                    <Modal
                                        changeLang={this.props.changeLanguage}
                                        currentLanguage={this.props.currentLanguage}
                                        languages={this.props.languages}
                                        translations={this.props.translations}
                                        editUsers={this.props.editUsers}
                                        deleteUser={this.props.deleteUser}
                                        users={this.props.users}
                                        callbackClose={this.toggleModalWindow}
                                        addNewUser={this.props.addNewUser}
                                        deleteAllUsers={this.props.deleteAllUsers}
                                    />
                                    }
                                </Header>
                                <Main>
                                    <Sidebar
                                        translations={this.props.translations}
                                        check={this.props.check}
                                        propsFromLink={param}
                                        deleteUser={this.props.deleteUser}
                                        users={this.props.users}
                                        currentUsers={this.props.currentUsers}
                                        toggleChat={this.props.toggleChat}
                                        chatState={this.props.chatState}/>
                                    <Chat/>
                                </Main>
                                <Footer>
                                    <Link to="/second" style={{color: 'red'}}>secondPage</Link>
                                </Footer>
                            </PageWrapper>
                        </Fragment>}/>
                        <Route path='/second'
                               component={() => [<Link
                                   to={{pathname: '/', exampleParams: {foo: 'bar'}}}>Home</Link>, <Chat/>]}/>
                </div>
            </BrowserRouter>
        )
    }
}
