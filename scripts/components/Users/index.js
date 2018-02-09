import { connect } from 'react-redux';

import { usersForCurrentRegion } from '../../selectors';

import Presenter from './Presenter';

function mapStateToProps(state) {
  // TOOD remove this ternary, especailly remove it from a mapStateToProps
  // TODO currentRegion may belong in UI
  return {
    users: state.regions.currentRegion ? usersForCurrentRegion(state) : state.users.all,
    regions: state.regions.all,
    currentRegion: state.regions.all[ state.regions.currentRegion ]?.displayName
  };
}

const Main = connect(mapStateToProps)(Presenter);
export default Main;
