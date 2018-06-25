import React from 'react'

const Presenter = () => (
  <main className="guide">
    <div className="guide-navigation">
      <nav>
        <a href="#become-a-mentor">Become a Mentor</a>
        <a href="#before-the-event">Before the Event</a>
        <a href="#at-the-event">At the Event</a>
        <a href="#after-the-event">After the Event</a>
      </nav>
    </div>
    <div className="container">
      <div id="become-a-mentor">
        <p>So you want to help. Before you start, please read through the <a href="https://github.com/askadev/community-standards#code-of-conduct">code of conduct</a> and <a href="https://github.com/askadev/community-standards#expectations">the expectations</a> and <a href="https://github.com/askadev/community-standards#liability">liability</a> portions of the community standards. By mentoring as part of Ask a Dev, you agree to follow these rules and understand that failure to do so will forfeit your right to use the Ask A Dev brand and resources. Straight forward stuff.</p>
        <p>After you've read those, give us a shout at <a href="mailto:join@askadev.org">join@askadev.org</a>. We'll connect you with an existing chapter or help set up a new one.</p>
      </div>
      <div id="before-the-event">
        <h2>Before the Event</h2>
        <ul>
          <li><strong>Find a time.</strong> Schedule at least two weeks. Make sure it's non-competitive with other programming meetups. And shoot for a <a href="https://github.com/askadev/community-standards#frequency">consistent</a> date (e.g. first Wednesday of every month).</li>
          <li><strong>Find a <a href="https://github.com/askadev/community-standards#space">place</a>.</strong> Centrally-located, non-exclusive places of repute (e.g. American bars don't allow attendees under 21). Couch space in a hip, local cafe or couch space in a hip, local studio's lounge are equally great options.</li>
          <li><strong>Put it on blast.</strong> List the event on this website, add to our <a href="https://meetup.com/Ask-a-Dev">meetup</a> page, and plug on community boards in your locale. <div className="notice">We'd prefer you set up <a href="https://github.com/askadev/digests/2018/05-20#Meetup-Pricing">your own Meetup page</a> for discoverability and to keep the big one unpolluted.</div></li>
          <li><strong>Promote at local events.</strong> Stop in at your local Python hack night. Make a quick pitch before the monthly React talk.</li>
        </ul>

        <div className="notice">Don't rely on Meetup numbers. The attendees that RSVP don't come and the attendees that don't RSVP come.</div>
      </div>

      <div id="at-the-event">
        <h2>At the Event</h2>
        <ul>
          <li><strong>Pair newcomers with mentors.</strong> Coming to an event like this takes courage. Some will be loud and brash and dominating the conversation; others will be timid because they think their question is dumb. As soon as attendee comes in, figure out what they're looking for and introduce them to a mentor or an existing conversation. <div className="notice"><strong>Red cup blue cup</strong>: Some chapters have had success with a flagging system. When a mentor is available, they flip up a blue cup. When a mentee needs help, they prop up a red cup.</div></li>
          <li><strong>Don't get caught.</strong> Max your time per person to 15 minutes if there’s backup. If you hit that threshold, set the person you're helping onto a task.</li>
          <li><strong>If you don't know, you don't know.</strong> The worst information is the wrong information. It's OK if you don't know; maybe you can figure it out together.</li>
          <li><strong>Give out stickers.</strong> Yeah, it's cheap shot for promotion. But every little bit counts.</li>
        </ul>

        <div className="notice -warning"><strong>Cancelation policy:</strong> When you say you're going to be there, be there. If you can't due to unforeseen circumstances, ensure that another mentor will be present. When you know far enough ahead of time, reschedule on all published channels. Contact leadership if need be. When the event is cancelled within 48 hours of the start time, you must physically note it at the location, be it a person to turn people away or a sign.</div>
      </div>

      <div id="after-the-event">
        <h2>After the Event</h2>
        <ul>
          <li><strong>Schedule the next one.</strong> While everyone's in the same room, check availability for the next event.</li>
          <li><strong>Don't get burnt out.</strong> This does not have to be another responsibility. Some people may keep asking questions after the end time, and you should answer these judiciously. Don't feel bad for wrapping up the conversation. <div className="notice">If you want to moderate a third-party forum/system like a Slack channel for your city, you're welcome to under the Ask a Dev name so long as you moderate it and ensure it follows the <a href="https://github.com/askadev/community-standards#code-of-conduct">code of conduct</a>.</div></li>
        </ul>
      </div>
    </div>
  </main>
)

export default Presenter
