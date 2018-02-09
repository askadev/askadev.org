import { connect } from 'react-redux';

import { eventsForCurrentRegion } from '../../selectors';

import Presenter from './Presenter';

function mapStateToProps(state) {
  // TOOD remove this ternary, especailly remove it from a mapStateToProps
  // TODO currentRegion may belong in UI
  return {
    events: state.regions.currentRegion ? eventsForCurrentRegion(state) : state.events.all,
    regions: state.regions.all,
    hasCurrentRegion: !!state.regions.currentRegion
  };
}

const Main = connect(mapStateToProps)(Presenter);
export default Main;
