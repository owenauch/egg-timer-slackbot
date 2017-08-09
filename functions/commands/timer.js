const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* /timer
*
*   Egg timer's main command
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  const delay = parseInt(text)*1000

  setTimeout(function() { setCallback(callback, text) }, delay)
};

function setCallback(callback, seconds) {
  callback(null, {
    response_type: 'in_channel',
    text: `STOP: ${seconds} seconds is up!`
  });
}
