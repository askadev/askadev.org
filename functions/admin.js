const functions = require('firebase-functions'),
      admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

module.exports = admin;
