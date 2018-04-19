import React from 'react'

import Events from '../Events'
import Mentors from '../Mentors'
import AvatarMenu from '../Admin/AvatarMenu'
import RegionSelect from '../RegionSelect'

import logo from '../../../assets/logo.svg'

const FAQItem = ({question, id=null, children}) => (
  <div className="container" id={id}>
    <header>
      <h3>{question}</h3>
    </header>
    <div className="content">
      {children}
    </div>
  </div>
)

const Home = () => (
  <main>
    <AvatarMenu />
    <div className="container" id="upcoming-events">
      <h2>Upcoming Events in <RegionSelect autoFocus={true} /></h2>
      <Events />
      <div className="content">
        <p className="helper">We're expanding! If you don't see your locale here, check back later, <a href="mailto:request@askadev.org?subject=Please%20come%20to...">request your city</a>, or <a href="#can-i-join">found a chapter</a>.</p>
      </div>
    </div>
    <div className="container -fill">
      <header>
        <h2>Stuck.</h2>
      </header>
      <div className="content">
        <p>
          You know the feeling. Cache-clearing refreshes, stale coffee, tufts of hair. There <em>has</em> to be a better way. Someone <em>must</em> know what I'm doing wrong.
        </p>
        <p>
          Whether you're a new programmer, a veteran exploring a new language, or a tech-adverse soul lost in a sea of WYSIWYG site generators, we're here to help. Join us for a few hours as we answer your frustrations:
        </p>
        <p>
          Should I update my WordPress plugins? Can I use ES6 in a webpack file? How do I configure continuous deployment to S3? Does everybody still love Raymond?
        </p>
      </div>
    </div>
    <div className="container">
      <h2>the friendliest devs in <RegionSelect /></h2>
      <Mentors />
      <br />
      <a href="#can-i-join">join the crew</a>
    </div>
    <div className="container -fill">
      <header>
        <h2>Why?</h2>
      </header>
      <div className="content">
        <p>
          While you can Google your way out of any problem, pairing with someone just <em>feels better</em>. Not all of us are fortunate enough to claim a CS degree or enjoy the guidance of a senior. <strong>We want to be the mentor we never had.</strong>
        </p>
        <p>
          Or maybe you need a quick website for your photography portfolio but can't connect a custom domain to Squarespace. <strong>We want to help.</strong>
        </p>
      </div>
    </div>
    <FAQItem
      question="Where can I find you?">
      <p>
        Check the most recent <a href="#upcoming-events">event listings</a> for upcoming meetups. We're not partnered, sanctioned, or affiliated with our public meeting places: we're just normal customers, so please plan to patronize. Organizers will be sporting the <a href={logo}>Ask a Dev logo</a>.
      </p>
    </FAQItem>
    <FAQItem
      question="How long will you help?">
      <p>
        As long as we can within reason. Some problems are bigger than three hours, and while we <strong>are not</strong> here to solicit, extra-curricular freelancing is permissible. While we're hosting office hours, we're free.
      </p>
    </FAQItem>
    <FAQItem
      question="How do I give feedback from an event?"
      id="feedback">
      <p>
        While we want to remain decentralized, we also want to make sure our mentors are a positive benefit to their community. Please reach out to <a href="mailto:service@askadev.org">service@askadev.org</a> with all comments and criticisms.
      </p>
    </FAQItem>
    <FAQItem
      question="What happens if something went wrong?"
      id="terms">
      <p>
        Sorry to hear that...but any services or advice you receive at an Ask a Dev event or by an Ask a Dev mentor comes without warranty of any kind. For more, please see <a href="https://github.com/askadev/community-standards#liability">our community standards</a> on liability.
      </p>
    </FAQItem>
    <FAQItem
      question="Can I join?"
      id="can-i-join">
      <React.Fragment>
        <p>
          If you've got something to teach, we've got someone to learn. Show up at the next scheduled event and tap an organizer about being listed here.
        </p>
        <p>
          Out of town? <a href="mailto:join@askadev.org">Drop us an email</a>, and we'll work on starting a chapter in your neighborhood.
        </p>
      </React.Fragment>
    </FAQItem>
  </main>
)

export default Home
