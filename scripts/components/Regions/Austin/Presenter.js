import React from 'react'

import Events from 'components/Events'
import Mentors from 'components/Mentors'

const Austin = () => (
  <React.Fragment>
    <div className="container" id="upcoming-events">
      <h2>Coming up in Austin</h2>
      <Events regionName="Austin" />
    </div>
    <div className="container">
      <h2>y'all can call us friends</h2>
      <Mentors regionName="Austin" />
      <br />
      <a href="#can-i-join">join the crew</a>
    </div>
    <div className="container">
      <header>
        <h3>Where can I find you?</h3>
      </header>
      <div className="content">
        <p>
          Check the most recent <a href="#upcoming-events">event listings</a> for upcoming meetups, but you can expect to find us at The Hideout Cafe.
        </p>
      </div>
    </div>
    <div className="container">
      <header>
        <h3>How long will you help?</h3>
      </header>
      <div className="content">
        <p>
          As long as we can within reason. Some problems are bigger than three hours, and while we <strong>are not</strong> here to solicit, extra-curricular freelancing is permissible. While we're hosting office hours, we're free.
        </p>
      </div>
    </div>
    <div className="container" id="feedback">
      <header>
        <h3>How do I give feedback from an event?</h3>
      </header>
      <div className="content">
        <p>
          While we want to remain decentralized, we also want to make sure our mentors are a positive benefit to their community. Please reach out to <a href="mailto:service@askadev.org">service@askadev.org</a> with all comments and criticisms.
        </p>
      </div>
    </div>
    <div className="container" id="terms">
      <header>
        <h3>What happens if something went wrong?</h3>
      </header>
      <div className="content">
        <p>
          Sorry to hear that...but any services or advice you receive at an Ask a Dev event or by an Ask a Dev mentor comes without warranty of any kind. For more, please see <a href="https://github.com/askadev/community-standards#liability">our community standards</a> on liability.
        </p>
      </div>
    </div>

    <div className="container" id="can-i-join">
      <header>
        <h3>Can I join?</h3>
      </header>
      <div className="content">
        <p>
          If you've got something to teach, we've got someone to learn. Show up at the next scheduled event and tap an organizer about being listed here.
        </p>
        <p>
          Out of town? <a href="mailto:askadevorg@gmail.com">Drop us an email</a>, and we'll work on starting a chapter in your neighborhood.
        </p>
      </div>
    </div>
  </React.Fragment>
)

export default Austin
