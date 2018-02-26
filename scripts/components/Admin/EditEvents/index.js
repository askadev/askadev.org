import { connect } from 'react-redux';

import { eventsForCurrentUser } from 'selectors';

import Presenter from './Presenter';

function mapStateToProps(state) {
  return {
    events: state.users.isSuperAdmin ? state.events.all : eventsForCurrentUser(state)
  };
}

const Main = connect(mapStateToProps)(Presenter);
export default Main;
