import React from 'react';
import './mainComponent.less'
import PropTypes from 'prop-types';

export default class MainComponent extends React.Component {
    static PropTypes = {
        modules: PropTypes.object.isRequired,
        activeBlock: PropTypes.object.isRequired
    };

    render() {
        console.log('MAin');
        return(
            <div>
                <h1>REDUX</h1>
            </div>
        )
    }
}