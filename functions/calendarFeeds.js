const admin = require('./admin');

const moment = require('moment');
const ical = require('ical-generator');

function convertToIcsObject(event = {}, region = {}, location = {}) {
  let val = {
    start: new Date(event.startTime),
    end: new Date(event.endTime),
    title: `Ask a Dev ${region.displayName}`,
    summary: 'Free mentorship from local programmers',
    location: `${location.displayName} | ${location.address}`,
    description: `Whether you're a new programmer, a veteran exploring a new language, or a tech-adverse soul lost in a sea of WYSIWYG site generators, we're here to help. Join us for a few hours every week as we answer your frustrations. It's free mentorship from local programmers.`,
    url: 'https://askadev.org',
    lastModified: new Date(event.updatedAt),
    organizer: { name: 'Admin', email: 'askadevorg@gmail.com' }
  };

  if (location.location) {
    val.geo = `${location.location.lat},${location.location.lng}`;
  }

  return val;
}

function convertToObjectArray(events = {}) {
  return admin.database().ref(`/regions`).once('value').then(snap => {
    const regions = snap.value();

    return admin.database().ref(`/locations`).once('value').then(snapshot => {
      const locations = snapshot.value();

      return Object.values(events).map(event => {
        return convertToIcsObject(event, regions[event.region], locations[event.location]);
      });
    });
  });
}

module.exports = function(req, res) {
  // const path = req.path.split('/');
  const startOfToday = moment().startOf('day').utc().valueOf()

  admin.database().ref(`/events`).orderByChild('startTime').startAt(startOfToday).once('value').then(snap => {
    const events = convertToObjectArray( snap.value() );
    const cal = ical({
      domain: 'askadev.org',
      events
    }).toString();

    res.set('Content-Type', 'text/calendar');
    res.status(200).send(cal);
  });
};
