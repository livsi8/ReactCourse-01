import React from 'react';
import './mainComponent.less';
import PropTypes from 'prop-types';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import Chat from '../chat/index';
import Header from '../header/header.jsx';
import Sidebar from '../sidebar/sidebar.jsx';

export default class MainComponent extends PureComponent {
    static propTypes = {
        strings: PropTypes.object.isRequired,
        modules: PropTypes.object.isRequired,
        activeBlocks: PropTypes.object.isRequired,
    };

    render () {
        console.log('render MainComponent');
        // const { strings } = this.props;
        return (
            <div className={"page-wrapper"}>
                {/*<h1>{strings.dialogResources.helloWorld}</h1>*/}
                <header className={"page-wrapper__header"}>
                    <Header/>
                </header>
                <main className={"page-wrapper__main"}>
                    <Sidebar/>
                    <Chat/>
                </main>
                <footer className={"page-wrapper__footer"}>

                </footer>
            </div>
        )
    }
}