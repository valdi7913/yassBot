"use strict";

var _globals = require("@jest/globals");

var _commands = require("../commands.js");

(0, _globals.describe)('bot commands', function () {
  (0, _globals.it)('filters out name candidate from string', function () {
    var command = "Hey yassbot, quote 'Bob the Drag Queen' for me";
    var expected = 'Bob%20the%20Drag%20Queen';
    var actual = (0, _commands.parseOutName)(command);
    console.log('expected :>> ', expected);
    console.log('actual :>> ', actual);
    (0, _globals.expect)(actual).toBe(expected);
  });
  (0, _globals.it)('Returns empty if there is no name', function () {
    var command = 'Hey yassbot, quote test for me';
    var expected = '';
    var actual = (0, _commands.parseOutName)(command);
    console.log('expected :>> ', expected);
    console.log('actual :>> ', actual);
    (0, _globals.expect)(actual).toBe(expected);
  });
});