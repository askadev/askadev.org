import { connect } from 'react-redux';

import Presenter from './Presenter';

function mapDispatchToProps(state) {
  return {};
}

const Main = connect(null, mapDispatchToProps)(Presenter);
export default Main;
