import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import Video from './components/Video';
import Controls from './components/Controls';

function mapStateToProps(state) {
  return {
  	crops: state.crops,
    posts: state.posts,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps)(Video);
const RdxControls = connect(mapStateToProps, mapDispachToProps)(Controls);


export {App as default, RdxControls};