inlets = 4;
outlets = 4;

// called on reset message
var inletMap = [{
	name: 'gamma',
	outlet: 0,
}, {
	name: 'alpha',
	outlet: 1,
}, {
	name: 'beta',
	outlet: 2,
}, {
	name: 'theta',
	outlet: 3,
}];

function reset() {
  var inletOptions = [0, 1, 2, 3];
  for (var i = 0; i < inletMap.length; i++) {
    var index = Math.floor(Math.random() * inletOptions.length);
    inletMap[i].outlet = inletOptions[index];
    inletOptions = inletOptions.filter(function(_, j) { return j !== index });
	post('sending ' + inletMap[i].name + ' to outlet: ' + inletMap[i].outlet);
  }
}

function msg_float(val) {
  var outletIndex = inletMap[inlet].outlet;
  outlet(outletIndex, val);
}