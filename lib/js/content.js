'use strict';
/* global chrome */

var API = require('./lib/api');
var messenger = require('./lib/messenger');

var $ = require('jquery');

messenger.startMessageListener();
messenger.on('nav', function(){
  //alert("here");
});

var blockList = {
  id: [
    'ads.top',
    'ads.ozen',
    'ads.ozen.right',
    'ads.ozen.left'
  ],
  class: [
    'mivzakon',
    'ghciMarketTeaserSchedual1',
    'shMainDiv',
    'ghciPromoLightbox1',
    'ghciPromoLightbox2',
    'ghciPromoLightbox3',
    'dyother dyMonitor',
    'B1'
  ],
  tags: [
    'iframe'
  ]
};

var hasClass = function(element, className) {
  return ( (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + className + " ") > -1 );
};

var c = 0;
var removed = 0;
$('body').prepend('<div style="background-image:url(\'http://i.imgur.com/cKlXYc3.png\');background-repeat: no-repeat;background-position:left center;text-align:center;padding:5px;position:fixed;left:0px;top:0px;padding-left:40px;width:80px;line-height:20px;height:40px;color:#fe0000;font-weight:bold;" id="seekingIndicator"></div>');
var seekAndDestroy = function() {
  //alert("seeking");
  //$(".dyMonitor").not('.dycontent').remove();
  c++;

  var output = "";
  output += "Seeking";

  blockList.id.forEach(function(id){
    var elem = document.getElementById(id);
    if(elem) {
      elem.parentElement.removeChild(elem);
      removed++;
    }
  });

  blockList.class.forEach(function(cl){
    var x = document.getElementsByClassName(cl);
    var i;
    for (i = 0; i < x.length; i++) {
      if(hasClass(x[i], 'ghci1')) {
        continue;
      }

      if(hasClass(x[i], 'ghci2')) {
        continue;
      }

      x[i].parentElement.removeChild(x[i]);
      removed++;
    }

  });

  blockList.tags.forEach(function(tag){
    var x = document.getElementsByTagName(tag);
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].parentElement.removeChild(x[i]);
      removed++;
    }

  });

  output += '<br>';
  output += removed + ' removed';

  $('#seekingIndicator').html(output);
  setTimeout(seekAndDestroy, 1000);
};


seekAndDestroy();

