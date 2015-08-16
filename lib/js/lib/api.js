'use strict';
/* global chrome */

var $ = require('jquery');
var protocol = '';

// If the API is called from background.js then the protocol
// will be wrong
if (window.location.href.indexOf('chrome-extension://') === 0) {
  protocol = 'http:';
}

// should change as needed,
var config = {};

var API = function() {

};

module.exports = new API();
