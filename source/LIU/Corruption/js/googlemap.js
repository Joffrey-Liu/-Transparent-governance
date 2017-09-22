var taiwan = {lat: 23.906460, lng: 120.946325}; 
var geoJsonObject;
var cityname = [];
var thejson;
var map;
var mapdata = [];
var inforwindow_dataset = [];
var infordata = [	
		{
			counties: "連江縣",
			GPS: "26.151848,119.937325"
		},
		{
			counties: "金門縣",
			GPS: "24.444965,118.375524"
		},
		{
			counties: "宜蘭縣",
			GPS: "24.689869,121.745654"
		},
		{
			counties: "彰化縣",
			GPS: "24.053414,120.559423"
		},
		{
			counties: "南投縣",
			GPS: "23.897105,120.964629"
		},
		{
			counties: "雲林縣",
			GPS: "23.708760,120.377591"
		},
		{
			counties: "屏東縣",
			GPS: "22.623697,120.552908"
		},
		{
			counties: "台東縣",
			GPS: "22.911241,121.018930"
		},
		{
			counties: "花蓮縣",
			GPS: "23.790869,121.392522"
		},
		{
			counties: "澎湖縣",
			GPS: "23.573355,119.619034"
		},
		{
			counties: "基隆市",
			GPS: "25.115944,121.735249"
		},
		{
			counties: "新竹市",
			GPS: "24.817913,120.967026"
		},
		{
			counties: "台北市",
			GPS: "25.046706,121.552274"
		},
		{
			counties: "新北市",
			GPS: "25.013465,121.455615"
		},
		{
			counties: "台中市",
			GPS: "24.233621,120.635861"
		},
		{
			counties: "台南市",
			GPS: "23.019707,120.227084"
		},
		{
			counties: "桃園市",
			GPS: "24.972870,121.206060"
		},
		{
			counties: "苗栗縣",
			GPS: "24.563369,120.816557"
		},
		{
			counties: "新竹縣",
			GPS: "24.713709,121.164644"
		},
		{
			counties: "嘉義市",
			GPS: "23.479583,120.459252"
		},
		{
			counties: "嘉義縣",
			GPS: "23.453020,120.624053"
		},
		{
			counties: "高雄市",
			GPS: "22.656957,120.355556"
		}
	];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 8,
	  center: taiwan,
	  styles:mapstyle
	});
	drawmap();
}

function drawmap(){
	clearinforwindow();
	map.data.forEach(function (feature) {
		map.data.remove(feature);
	});
	$.getJSON("counties.json", function(data){
		geoJsonObject = topojson.feature(data, data.objects.map);
		map.data.addGeoJson(geoJsonObject); 
	}); 
	
	map.data.setStyle(function(feature) {
		var SD_NAME = feature.getProperty('name');
		var color = "#fff2e6";
		for(i=0;i<mapdata.length;i++){
			if(SD_NAME == mapdata[i].key){
				color = colorselect(mapdata[i].value);
				setinforwindow(mapdata[i].key);
			}
		}
		return {
		  fillOpacity: 0.7,
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

function clearinforwindow(){
	for(i=0; i<inforwindow_dataset.length;i++){
		inforwindow_dataset[i].close();
	}
	inforwindow_dataset = [];
}

function setinforwindow(name){
	for(i=0;i<infordata.length; i++){
		if(infordata[i].counties == name){
			var infowindow = new google.maps.InfoWindow({
			  content: infordata[i].counties
			});
			var GPS = infordata[i].GPS.split(",");
			var lat = parseFloat(GPS[0]);
			var lng = parseFloat(GPS[1]);
			infowindow.setPosition({lat: lat, lng: lng});
			infowindow.open(map);
			inforwindow_dataset.push(infowindow);
			break;
		}
	}
}


function colorselect(input){
	if(input==1)
		return '#FF8000'
	else if(input==2)
		return '#EA7500'
	else if(input==3)
		return '#FF5809'
	else if(input==4)
		return '#F75000'
	else if(input==5)
		return '#D26900'
	else if(input==6)
		return '#D94600'
	else if(input==7)
		return '#BB3D00'
	else if(input==8)
		return '#BB5E00'
	else if(input==9)
		return '#A23400'
	else if(input>9)
		return '#*42B00'
}