(z = {
    BMoog.ar(
        SoundIn.ar([0,1]),
        MouseX.kr(20,20000,\exponential), // cutoff freq.
        MouseY.kr(1.0, 0.0, \linear), // q
        0, // mode - lowpass
        0.25); // mul
}.play)