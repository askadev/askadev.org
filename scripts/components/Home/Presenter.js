import React from 'react'

import Events from '../Events'
import Mentors from '../Users'
import AvatarMenu from '../AvatarMenu'
import RegionSelect from '../RegionSelect'

import { login } from '../../utils/auth'

import logo from '../../../assets/logo.svg'

function currentYear() {
  return new Date().getFullYear()
}

export default class extends React.Component {
  render() {
    return (
      <div>
        <AvatarMenu />
        <header className="container logo">
          <img alt="Ask A Dev" src={logo} />
          <div className="content"><h2>Free Mentoring from Local Programmers</h2></div>
        </header>
        <div className="container" id="upcoming-events">
          <h2>Upcoming Events in <RegionSelect /></h2>
          <Events />
          <div className="content">
            <p className="helper">We're expanding to Denver, San Francisco, New York, Melbourne, London, and more soon: please check back later for more events or <a href="#can-i-join">start a chapter in your city</a></p>
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
              Whether you're a new programmer, a veteran exploring a new language, or a tech-adverse soul lost in a sea of WYSIWYG site generators, we're here to help. Join us for a few hours every other week as we answer your frustrations:
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
        <div className="container">
          <header>
            <h3>Where can I find you?</h3>
          </header>
          <div className="content">
            <p>
              Check the most recent <a href="#upcoming-events">event listings</a> for upcoming meetups. We're not partnered, sanctioned, or affiliated with our public meeting places: we're just normal customers, so please plan to patronize. Organizers will be sporting the <a href={logo}>Ask a Dev logo</a>.
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
        <div className="container">
          <header>
            <h3>I recently attended an event. How do I give feedback?</h3>
          </header>
          <div className="content">
            <p>
              While we want to remain decentralized, we also want to make sure our mentors are a positive benefit to their community. Please reach out to us at <a href="mailto:service@askadev.org">service@askadev.org</a> with all comments and criticisms.
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
        <footer className="container copyright">
          <p>&copy; Copyright Ask a Dev {currentYear()} | Logo by <a href="http://northbryan.com/"> North Bryan</a> | <a href="#" onClick={login}>Login</a></p>
          <p>
            <a href="https://github.com/askadev"><svg height="512" width="512" viewBox="0 0 512 512"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/></svg></a>
            <a href="https://twitter.com/askadevorg"><svg height="512" width="512" viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg></a></p>

        </footer>
      </div>
    )
  }
}
