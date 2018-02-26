import { connect } from 'react-redux';

import { makeEventsForOptionalRegion } from '../../selectors';

import Presenter from './Presenter';

const makeMapStateToProps = () => {
  const eventsForOptionalRegion = makeEventsForOptionalRegion()

  const mapStateToProps = (state, ownProps) => {
    return {
      events: eventsForOptionalRegion(state, ownProps),
      regions: state.regions.all,
      currentRegion: state.regions.currentRegion
    }
  }

  return mapStateToProps
}

const Main = connect(makeMapStateToProps)(Presenter);
export default Main;
