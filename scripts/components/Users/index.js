import { connect } from 'react-redux';

import { usersForCurrentRegion } from '../../selectors';

import Presenter from './Presenter';

function mapStateToProps(state) {
  return {
    users: usersForCurrentRegion(state)
  };
}

const Main = connect(mapStateToProps)(Presenter);
export default Main;
