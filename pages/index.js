import Head from "../components/head"
import Header from "../components/header"
import withData from "../lib/withData"
import "../styles/base.scss"

export default withData(() => (
  <div>
    <Head />
    <Header />
    <main>
      <div className="container" id="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="events">
          <div className="event">
            <div className="event-location">
              <a href="https://www.google.com/maps/place/Coffee+Time/@45.527948,-122.694321,15z/data=!4m2!3m1!1s0x0:0x27d522da6baac463?sa=X&ved=0ahUKEwj8tayFyorZAhVYwGMKHQyIBMYQ_BIIezAK">
                Coffee Time
              </a>
              <small>Portland</small>
            </div>
            <div className="event-time">02.07.18, 6-9pm</div>
          </div>
          <div className="event">
            <div className="event-location">
              <a href="https://www.google.com/maps/place/Southeast+Grind/@45.5009417,-122.6524669,15z/data=!4m2!3m1!1s0x0:0x938639b6b18b3206?sa=X&ved=0ahUKEwjGldHXzYrZAhVJiVQKHQjdDGgQ_BIIfTAK">
                Southeast Grind
              </a>
              <small>Portland</small>
            </div>
            <div className="event-time">02.21.18, 6-9pm</div>
          </div>
          <div className="event">
            <div className="event-location">
              <a href="https://www.google.com/maps/place/Coffee+Time/@45.527948,-122.694321,15z/data=!4m2!3m1!1s0x0:0x27d522da6baac463?sa=X&ved=0ahUKEwj8tayFyorZAhVYwGMKHQyIBMYQ_BIIezAK">
                Coffee Time
              </a>
              <small>Portland</small>
            </div>
            <div className="event-time">03.07.18, 6-9pm</div>
          </div>
          <div className="event">
            <div className="event-location">
              <a href="https://www.google.com/maps/place/Southeast+Grind/@45.5009417,-122.6524669,15z/data=!4m2!3m1!1s0x0:0x938639b6b18b3206?sa=X&ved=0ahUKEwjGldHXzYrZAhVJiVQKHQjdDGgQ_BIIfTAK">
                Southeast Grind
              </a>
              <small>Portland</small>
            </div>
            <div className="event-time">03.21.18, 6-9pm</div>
          </div>
        </div>
      </div>
      <div className="container -fill">
        <header>
          <h2>Stuck.</h2>
        </header>
        <div className="content">
          <p>
            You know the feeling. 11:34. Cache-clearing refreshes, stale coffee,
            tufts of hair. There
            <em>has</em> to be a better way. Someone
            <em>must</em> know what I'm doing wrong.
          </p>
          <p>
            Wether you're a new programmer, a veteran exploring a new language,
            or a tech-adverse soul lost in a sea of WYSIWYG site generators,
            we're here to help. Join us for a few hours every other week as we
            field your ranging questions:
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
        <div className="devs">
          <div className="dev-box">
            <header>
              <a href="https://github.com/lechin">
                <img
                  alt="Nichole Barrett"
                  src="https://media.licdn.com/media/p/7/005/0b6/2db/2ed64e5.jpg"
                />
              </a>
              <a href="https://github.com/lechin">
                <h4>
                  Nichole
                  <br />Barrett
                  <small>7+ years</small>
                </h4>
              </a>
            </header>
            <ul className="dev-skills">
              <li>Ruby, Rails</li>
              <li>MySQL</li>
              <li>HTML & CSS</li>
              <li className="show-more js-show-more">+see more</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="dev-box">
            <header>
              <a href="https://github.com/willchertoff">
                <img
                  alt="Will Chertoff"
                  src="https://avatars0.githubusercontent.com/u/9339964?s=460&v=4"
                />
              </a>
              <a href="http://www.willchertoff.com/">
                <h4>
                  Will
                  <br />Chertoff
                  <small>3+ years</small>
                </h4>
              </a>
            </header>
            <ul className="dev-skills">
              <li>JavaScript</li>
              <li>React, Redux, etc.</li>
              <li>Graphic Design</li>
              <li className="show-more js-show-more">+see more</li>
              <li>Ruby, Rails</li>
            </ul>
          </div>
          <div className="dev-box">
            <header>
              <a href="https://github.com/nilesvm">
                <img
                  alt="Niles McGiver"
                  src="https://avatars3.githubusercontent.com/u/4657767?s=460&v=4"
                />
              </a>
              <a href="http://www.mcgiver.io/">
                <h4>
                  Niles
                  <br />McGiver
                  <small>4+ years</small>
                </h4>
              </a>
            </header>
            <ul className="dev-skills">
              <li>Ruby, Rails</li>
              <li>JavaScript</li>
              <li>React</li>
              <li className="show-more js-show-more">+see more</li>
              <li>Non-profits</li>
              <li>PHP</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="dev-box">
            <header>
              <a href="https://github.com/tshedor">
                <img
                  alt="Tim Shedor"
                  src="https://avatars2.githubusercontent.com/u/865897?s=460&v=4"
                />
              </a>
              <a href="https://timshedor.com/resume">
                <h4>
                  Tim
                  <br />Shedor
                  <small>8+ years</small>
                </h4>
              </a>
            </header>
            <ul className="dev-skills">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>PHP, WordPress</li>
              <li className="show-more js-show-more">+see more</li>
              <li>Ruby, Rails</li>
              <li>React, Redux, etc.</li>
              <li>Swift</li>
            </ul>
          </div>
        </div>
        <br />
        <a href="#can-i-join">join the crew</a>
      </div>
      <div className="container -fill">
        <header>
          <h2>Why?</h2>
        </header>
        <div className="content">
          <p>
            While you can Google your way out of any problem, pairing with
            someone just
            <em>feels better</em>. Not all of us are fortunate enough to claim a
            CS degree or enjoy the guidance of a senior.
            <strong>We want to be the mentor we never had.</strong>
          </p>
          <p>
            Or maybe you need a quick website for your photography portfolio but
            can't connect a custom domain to Squarespace.
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
            <a href="#upcoming-events">event listings</a> for upcoming meetups.
            We're not partnered, sanctioned, or affiliated with our public
            meeting places: we're just normal customers, so please plan to
            patronize. Organizers will be sporting the
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
            As long as we can within reason. Some problems are bigger than three
            hours, and while we
            <strong>are not</strong> here to solicit, extra-curricular
            freelancing is permissible. However, as long as we're hosting office
            hours, we're free.
          </p>
        </div>
      </div>
      <div className="container" id="can-i-join">
        <header>
          <h3>Can I join?</h3>
        </header>
        <div className="content">
          <p>
            If you've got something to teach, we've got someone to learn. Show
            up at the next scheduled event and tap an organizer about being
            listed here.
          </p>
          <p>
            Out of state?
            <a href="mailto:askadevorg@gmail.com">Drop us an email</a>, and
            we'll work on starting a chapter in your neighborhood.
          </p>
        </div>
      </div>
    </main>
    <footer className="container copyright">
      &copy; Copyright Ask a Dev
      <span id="js-year">2018</span> | Logo by
      <a href="http://northbryan.com/"> North Bryan</a>
    </footer>
  </div>
))
