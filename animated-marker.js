function Marker(map){
	this.marker = new google.maps.Marker({position: new google.maps.LatLng(0,0), map: map});
	this.initalLocation = null;
	this.initialTimestamp = null;
  this.locations = {};
}
// Add methods like this.  All Person objects will be able to invoke this
Marker.prototype.addLocation = function(timestamp, latitude, longitude){
  this.locations[timestamp] = [latitude, longitude];
  if (this.initialLocation = null) {
  	this.initialLocation = [latitude, longitude];
  	this.initialTimestamp = timestamp;
  }
};

Marker.prototype.animate = function(){
	var lastLocation = this.initialLocation;
	var lastTimeStamp = this.initialTimestamp;
  for (var key in this.locations) {
	  if (dictionary.hasOwnProperty(key)) {
	    var location = this.locations[key];
	    var newPosition = new google.maps.LatLng(location[0], location[1]);
	    var duration = key-lastTimeStamp;
			setTimeout(this.marker.animateTo(newPosition, {duration: duration}), duration);
			lastTimeStamp = key;
	  }
	}
};