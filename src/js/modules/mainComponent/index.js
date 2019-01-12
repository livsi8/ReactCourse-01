import { connect } from 'react-redux';
import Component from '../mainComponent/MainComponent.jsx';  //"MainComponent
import * as selectors from './selectors'

const mapStateToProps = state => ({
   modules: selectors.getConfigModules(state),
   activeBlocks: selectors.getConfigActiveBlocks(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)