import React from 'react'

import Events from '../Events'
import Mentors from '../Users'
import AvatarMenu from '../AvatarMenu'

import { login } from '../../utils/auth'

import logo from '../../../assets/logo.svg'

export default class extends React.Component {
  render() {
    return (
      <div>
        <AvatarMenu />
        <div>
          <header className="container logo">
            <img alt="Ask A Dev" src={logo} />
            <h2>Free Mentoring from Local Programmers</h2>
          </header>
          <div className="container" id="upcoming-events">
            <h2>Upcoming Events</h2>
            <Events />
          </div>
          <div className="container -fill">
            <header>
              <h2>Stuck.</h2>
            </header>
            <div className="content">
              <p>
                You know the feeling. 11:34. Cache-clearing refreshes, stale
                coffee, tufts of hair. There
                <em>has</em> to be a better way. Someone
                <em>must</em> know what I'm doing wrong.
              </p>
              <p>
                Wether you're a new programmer, a veteran exploring a new
                language, or a tech-adverse soul lost in a sea of WYSIWYG site
                generators, we're here to help. Join us for a few hours every
                other week as we field your ranging questions:
              </p>
              <p>
                Should I update my WordPress plugins? Can I use ES6 in a webpack
                file? How do I configure continuous deployment to S3? What ever
                happened to Ray Romano?
              </p>
            </div>
          </div>
          <div className="container">
            <h2>Who?</h2>
            <Mentors />
            <br />
            <a href="#" onClick={login}>
              join the crew
            </a>
          </div>
          <div className="container -fill">
            <header>
              <h2>Why?</h2>
            </header>
            <div className="content">
              <p>
                While you can Google your way out of any problem, pairing with
                someone just
                <em>feels better</em>. Not all of us are fortunate enough to
                claim a CS degree or enjoy the guidance of a senior.
                <strong>We want to be the mentor we never had.</strong>
              </p>
              <p>
                Or maybe you need a quick website for your photography portfolio
                but can't connect a custom domain to Squarespace.
                <strong>We want to help.</strong>
              </p>
            </div>
          </div>
          <div className="container">
            <header>
              <h3>Where can I find you?</h3>
            </header>
            <div className="content">
              <p>
                Check the most recent
                <a href="#upcoming-events">event listings</a> for upcoming
                meetups. We're not partnered, sanctioned, or affiliated with our
                public meeting places: we're just normal customers, so please
                plan to patronize. Organizers will be sporting the
                <a href="static/logo.svg">Ask a Dev logo</a>.
              </p>
            </div>
          </div>
          <div className="container">
            <header>
              <h3>How long will you help?</h3>
            </header>
            <div className="content">
              <p>
                As long as we can within reason. Some problems are bigger than
                three hours, and while we
                <strong>are not</strong> here to solicit, extra-curricular
                freelancing is permissible. However, as long as we're hosting
                office hours, we're free.
              </p>
            </div>
          </div>
          <div className="container" id="can-i-join">
            <header>
              <h3>Can I join?</h3>
            </header>
            <div className="content">
              <p>
                If you've got something to teach, we've got someone to learn.
                Show up at the next scheduled event and tap an organizer about
                being listed here.
              </p>
              <p>
                Out of state?
                <a href="mailto:askadevorg@gmail.com">Drop us an email</a>, and
                we'll work on starting a chapter in your neighborhood.
              </p>
            </div>
          </div>
          <footer className="container copyright">
            &copy; Copyright Ask a Dev
            <span id="js-year"> 2018</span> | Logo by
            <a href="http://northbryan.com/"> North Bryan</a>
          </footer>
        </div>
      </div>
    )
  }
}
