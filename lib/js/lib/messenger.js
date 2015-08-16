'use strict';
/* global chrome */

var listeners = {};

/**
 * PUBLIC API
 */
exports.startNavEventPublisher = startNavEventPublisher;
exports.startMessageListener = startMessageListener;
exports.on = on;

/**
 * Listens to all of our nav events and sends a 'nav' message
 * to each tab when one of the events is triggered
 */
function startNavEventPublisher() {
  var navEventList = [
    'onCompleted',
    'onDOMContentLoaded',
    'onTabReplaced',
    'onHistoryStateUpdated'
  ];

  navEventList.forEach(function(e) {
    chrome.webNavigation[e].addListener(function(data) {
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function(tabs) {
        //chrome.tabs.sendMessage(tabs[0].id, 'nav');
      });
    });
  });
}

/**
 * Listens to runtime messages and triggers the proper
 * event listeners
 */
function startMessageListener() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    trigger(request);
  });
}

/**
 * listen to specific message events and triggers the callbacks
 *
 * @param {string} eventName
 * @param {Function} cb
 */
function on(eventName, cb) {
  if (!listeners[eventName]) {
    listeners[eventName] = [];
  }

  listeners[eventName].push(cb);
}

/**
 * Trigger the callbacks for an event name and pass them optional data
 *
 * @param {string} eventName
 * @param {Object|undefined} data (optional)
 */
function trigger(eventName, data) {
  if (listeners[eventName] && listeners[eventName].length) {
    for (var i = 0; i < listeners[eventName].length; i++) {
      var callback = listeners[eventName][i];
      callback.apply(null, data);
    }
  }
}
