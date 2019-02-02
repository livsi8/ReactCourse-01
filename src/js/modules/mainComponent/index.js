import { connect } from 'react-redux';
import Component from './MainComponent.jsx';
import * as selectors from './selectors';


const mapStateToProps = state => ({
    strings: selectors.getStrings(state),
    modules: selectors.getConfigModules(state),
    activeBlocks: selectors.getConfigActiveBlocks(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);