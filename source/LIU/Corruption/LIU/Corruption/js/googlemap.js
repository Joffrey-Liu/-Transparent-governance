var taiwan = {lat: 23.906460, lng: 120.946325}; 
var geoJsonObject;
var cityname = [];
var thejson;
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 8,
	  center: taiwan,
	  styles:mapstyle
	});
	drawmap();
}

function drawmap(){
	$.getJSON("counties.json", function(data){
		geoJsonObject = topojson.feature(data, data.objects.map);
		map.data.addGeoJson(geoJsonObject); 
	}); 
	
	map.data.setStyle(function(feature) {
		var SD_NAME = feature.getProperty('name');
		var color = "gray";
		if (SD_NAME == "高雄市") {
		  color = "green";
		}
		if (SD_NAME == "桃園市") {
		  color = "red";
		}
		return {
		  fillColor: color,
		  strokeWeight: 3
		}
	});

	// Set the fill color to red when the feature is clicked.
	// Stroke weight remains 3.
	map.data.addListener('click', function(event) {
	   map.data.overrideStyle(event.feature, {fillColor: 'red'});
	});
}