var req = require.context('./locales', true, /\.json.*$/);
var exports = {};

req.keys().forEach((file)=>{
  var locale = file.replace('./', '').replace('.json', '');
  exports[locale] = req(file);
});

module.exports = exports ;