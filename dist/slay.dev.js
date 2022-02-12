"use strict";

var _config = _interopRequireDefault(require("dotenv/config"));

var _discord = require("discord.js");

var _commands = require("./commands.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = new _discord.Client({
  intents: [_discord.Intents.FLAGS.GUILDS, _discord.Intents.FLAGS.GUILD_MESSAGES]
});
client.login(process.env.BOT_TOKEN);
client.on('ready', function () {
  console.log("Logged in as ".concat(client.user.tag, "!"));
});
client.on('messageCreate', gotMessage);

function gotMessage(msg) {
  var lowercase = msg.content.toLowerCase();

  if (lowercase.startsWith('hey yassbot') && msg.author.id !== client.user.id) {
    (0, _commands.commandHandler)(msg);
  }

  console.log(msg.author.username + ": " + msg.content);
}