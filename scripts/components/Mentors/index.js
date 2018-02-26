import { connect } from 'react-redux';

import { makeMentorsForOptionalRegion } from '../../selectors';

import Presenter from './Presenter';

const makeMapStateToProps = () => {
  const mentorsForOptionalRegion = makeMentorsForOptionalRegion()

  const mapStateToProps = (state, ownProps) => {
    return {
      mentors: mentorsForOptionalRegion(state, ownProps),
      regions: state.regions.all,
      currentRegion: state.regions.currentRegion,
      shouldShowBio: !!ownProps.regionName || !!state.regions.currentRegion
    }
  }

  return mapStateToProps
}

const Main = connect(makeMapStateToProps)(Presenter);
export default Main;
