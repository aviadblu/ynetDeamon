'use strict';

module.exports = {
  clientJs: [
    __dirname + '/../lib/js/**/*.js'
  ],
  clientTemplates: [
    __dirname + '/../lib/js/**/*.html'
  ],
  clientJsApps: [
    __dirname + '/../lib/js/menu.js',
    __dirname + '/../lib/js/content.js',
    __dirname + '/../lib/js/events.js'
  ],
  clientSass: [
    __dirname + '/../lib/css/**/*.scss'
  ],
  clientFonts: [
    __dirname + '/../lib/bower/font-awesome/fonts/*'
  ],
  clientHtml: [
    __dirname + '/../lib/*.html'
  ]
};
