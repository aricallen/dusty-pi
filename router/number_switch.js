inlets = 1;
outlets = 3;

var i = 1;
var prev = null;

function msg_float(curr) {
	if (i % 2 === 0) {
		prev = curr;
	} else {
		outlet(0, prev);
		outlet(1, curr);
		outlet(2, curr);
		i = 1;
	}
	i++;
}