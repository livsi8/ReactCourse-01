import React from 'react';
import './MainComponent.less';
import PropTypes from 'prop-types';
import Chat from "../chat/index";

export default class MainComponent extends React.Component {
    static propTypes = {
        modules: PropTypes.object.isRequired,
        activeBlocks: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div className='page-wrapper'>
                <header className='page-wrapper__header'>

                </header>
                <main className='page-wrapper__main'>
                    <Chat/>
                </main>
                <footer className='page-wrapper__footer'>

                </footer>
            </div>
        );
    }
}