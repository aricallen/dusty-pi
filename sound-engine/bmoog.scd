// SynthDef( \bmoog_test, { arg freq;
//   var out, env;
//   out = BMoog.ar(freq);    // filter mode - lowpass
//   6.do({ out = AllpassN.ar(out, 0.05, [0.05.rand, 0.05.rand], 4) });
//   Out.ar( 0, out );
// });

SynthDef( \bmoog_test, { arg freq;
    var out, env;
    out = BMoog.ar(
        LFSaw.ar( freq, mul: EnvGen.kr( Env.perc, levelScale: 0.3, doneAction: 2 ) ),
        LFNoise1.kr(1, 36, 110).midicps,
        0.1
    );
    6.do({ out = AllpassN.ar(out, 0.05, [0.05.rand, 0.05.rand], 4) });
    Out.ar( 0, out );
});