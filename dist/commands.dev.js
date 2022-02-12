"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commandHandler = commandHandler;
exports.parseOutName = parseOutName;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import {cache} from 'node-cache';
function commandHandler(msg) {
  if (msg.content.includes('quote')) {
    // quoteQueen(msg.content);
    quoteQueen(msg);
  } else {
    msg.channel.send(getRandomYassifiedAnswer(msg));
  }
}

function getRandomYassifiedAnswer(msg) {
  var posreplies = ['💅👁👄👁💅', "Ok Slay ".concat(msg.author.username, "!"), 'Pop off your pussy queen!', '🐝', "Yaaaaaaaz ".concat(msg.author.username, "!"), 'OK damn, gworl!', 'Who tought you to pop off that pussy queen?', 'Boots the house down, momma yess god', 'Material Gworl!', 'Queen!', 'Yass queen skinny legend versace boots the house down slay queen hunty momma and oops daddy *smack* snatch my WIG'];
  var randomIndex = Math.floor(Math.random() * posreplies.length);
  return posreplies[randomIndex];
}

function quoteQueen(msg) {
  var nameToSearch, url;
  return regeneratorRuntime.async(function quoteQueen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          nameToSearch = parseOutName(msg.content);
          url = "http://www.nokeynoshade.party/api/queens?name=".concat(nameToSearch);
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap((0, _nodeFetch["default"])(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            if (data.length > 0) {
              console.log(data);
              msg.channel.send(data[0].quote);
            } else {
              msg.channel.send('No quote found for ' + nameToSearch.split('%20').join(' '));
            }
          }));

        case 5:
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 7]]);
}

function parseOutName(string) {
  //Select substring between first word containing capital letter and the last word containing a capital letter
  var substring = string.substring(string.indexOf('\'') + 1, string.lastIndexOf('\''));
  return substring.trim().split(' ').join('%20');
}