import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createEvent } from '../../actions/events';

import Presenter from './Presenter';

function mapDispatchToProps(dispatch) {
  return {
    onCreate: bindActionCreators(createEvent, dispatch)
  };
}

const Main = connect(null, mapDispatchToProps)(Presenter);
export default Main;
