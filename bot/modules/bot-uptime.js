let config = require('config');

exports.commands = ['uptime'];

exports.uptime = {
  usage: '',
  description: 'gets Uptime for Bot',
  process: function(bot, msg, suffix) {

    msg.channel.send(
      'i have been Online for ' +
      Math.round(bot.uptime / (1000 * 60 * 60 * 24)) +
      ' days, ' +
      Math.round(bot.uptime / (1000 * 60 * 60)) +
      ' hours, ' +
      Math.round(bot.uptime / (1000 * 60)) % 60 +
      ' minutes, and ' +
      Math.round(bot.uptime / 1000) % 60 +
      ' seconds'
    );
  }
};
