var Observable = require('FuseJS/Observable');
var GeoLocation = require("FuseJS/GeoLocation");

var immediateLocation = JSON.stringify(GeoLocation.location);
console.log(immediateLocation);

// add new destinations
function AddDestination () {
	router.push('AddDestination');
}

module.exports = {
	immediateLocation: immediateLocation,
	AddDestination: AddDestination
};
