var {keyMirror} = require('../utils');

module.exports = keyMirror({
  VIEW_ACTION: false,
  GENERAL_ACTION: false,

  CHANGE_EVENT: false,

  Game: require('./GameConstants'),
  Timer: require('./TimerConstants'),
  Sound: require('./SoundConstants'),
  Application: require('./ApplicationConstants'),
});
