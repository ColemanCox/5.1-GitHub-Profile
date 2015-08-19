var merge = require('broccoli-merge-trees');
var sassCompile = require('broccoli-sass');
var funnel = require('broccoli-funnel');

var includePaths = [
  'assets',
  'bower_components/reset-css',
  'bower_components/fontawesome/scss',
  'bower_components/bourbon/app/assets/stylesheets'
];

var vendor = funnel('bower_components', {
  files: ['handlebars/handlebars.js', 'jquery/dist/jquery.min.js']
});

var compiledCss = sassCompile(includePaths, 'app.scss', 'app.css');

module.exports = merge(['public', 'assets/js', vendor, compiledCss]);
