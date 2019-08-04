const sc = require('supercolliderjs');
const path = require('path');
const fs = require('fs');
const { msg, map } = require('supercolliderjs');

const def = {
  name: 'bmoog_test',
  path: path.join(__dirname, 'bmoog.scd'),
};

// const def = {
//   name: 'help_SPE3_Allpass6',
//   path: path.join(__dirname, 'help_SPE3_Allpass6.scd'),
// };

const run = async () => {
  const server = await sc.server.boot();

  // load scd files
  try {
    await server.loadSynthDef(def.name, def.path);
  } catch (err) {
    console.log(err);
  }
  const myMsg = msg.synthNew(def.name, -1, msg.AddActions.TAIL, 0, {
    freq: map.midiToFreq(64),
  });
  server.send.msg(myMsg);

  // const sclang = await sc.lang.boot({ debug: false });
  // try {
  //   const fileContents = fs.readFileSync(path.join(__dirname, 'bmoog-example.scd'), 'utf8');
  //   await sclang.interpret(fileContents);
  // } catch (err) {
  //   console.log(err);
  // }
};
run();
