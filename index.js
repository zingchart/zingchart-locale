var fs = require('fs');
var locales = {};

var files = fs.readdirSync('./locales');
files.forEach(function(filename){
  var lang = (filename.split('zingchart-i18n-'))[1];
  lang = (lang.split('.')).shift();
  lang = lang.replace('-', '_');

  locales[lang] = require('./locales/' + filename);
});
module.exports = locales;
