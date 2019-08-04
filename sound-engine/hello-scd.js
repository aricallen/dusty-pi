/**
 * Port of Patterns example
 * http://doc.sccode.org/Tutorials/Streams-Patterns-Events3.html
 *
 * This is using the Pseq and Prand classes defined in ./pattern-classes.js
 *
 * You still have to use `new Pseq([...])`

 * This could be made even clearer and tighter using and ES7 decorator
 * and avoid having to construct a class that only really has one function.
 */
const sc = require('supercolliderjs');
const { msg, map } = require('supercolliderjs');

const def = {
  name: 'help_SPE3_Allpass6',
  path: './sound-engine/help_SPE3_Allpass6.scd',
};

sc.server.boot().then((server) => {
  server.loadSynthDef(def.name, def.path).then(() => {
    server.send.msg(
      msg.synthNew(def.name, -1, msg.AddActions.TAIL, 0, {
        freq: map.midiToFreq(64),
      })
    );
  });
});
