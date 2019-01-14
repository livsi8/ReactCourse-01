import {connect} from "react-redux";
import MainComponent from './MainComponent.jsx'
import * as selectors from './selectors';

const mapStateToProps = state => ({
    modules: selectors.getConfigModules(state),
    activeBlocks: selectors.getConfigActiveModules(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent)