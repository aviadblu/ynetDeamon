'use strict';
/* global chrome */

var messenger = require('./lib/messenger');
var API = require('./lib/api');

messenger.startNavEventPublisher();

// Listen for when the extension is installed and call our API
chrome.runtime.onInstalled.addListener(function(details) {
  API.init({
    calledFromBackground: true
  }).always(function() {
    // on install event
  });
});
