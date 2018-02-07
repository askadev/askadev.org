import { connect } from 'react-redux';

import { eventsForCurrentRegion } from '../../selectors';

import Presenter from './Presenter';

function mapStateToProps(state) {
  return {
    events: eventsForCurrentRegion(state)
  };
}

const Main = connect(mapStateToProps)(Presenter);
export default Main;
