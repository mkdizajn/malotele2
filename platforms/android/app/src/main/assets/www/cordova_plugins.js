cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-sms.SMS",
      "file": "plugins/cordova-plugin-sms/www/SMS.js",
      "pluginId": "cordova-plugin-sms",
      "clobbers": [
        "window.SMS"
      ]
    },
    {
      "id": "cordova-sms-plugin.Sms",
      "file": "plugins/cordova-sms-plugin/www/sms.js",
      "pluginId": "cordova-sms-plugin",
      "clobbers": [
        "window.sms"
      ]
    },
    {
      "id": "cordova-plugin-sms-receive.SMSReceive",
      "file": "plugins/cordova-plugin-sms-receive/www/SMSReceive.js",
      "pluginId": "cordova-plugin-sms-receive",
      "clobbers": [
        "window.SMSReceive"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-sms": "1.0.5",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-sms-plugin": "1.0.0",
    "cordova-plugin-sms-receive": "1.0.2"
  };
});