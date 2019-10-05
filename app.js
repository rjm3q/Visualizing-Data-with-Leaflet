//Map for webpage
var map =L.map('map', {
center: [31.7917, -7.0926],
 zoom:3
 });

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: 'pk.eyJ1IjoicmptM3EiLCJhIjoiY2sxZG9pMmloMDJjdTNjbnl1YXA2eDh0eiJ9.3h9LSxGqW_JZrh4YCu1xvA'
}).addTo(map);


//Make the Thing do the stuff with the USGS Data
var url= 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson';

function markerSize(magnitude) {
	return Math.pow(magnitude, 4.5)
}

function markerColor(magnitude) {
	return 230-(7*magnitude)
}

d3.json (url, output=>{
	 var quakes = output.features;
  quakes.forEach(quakes =>{
    if (quakes.properties.mag < 3){
    L.circle([quakes.geometry.coordinates[1], quakes.geometry.coordinates[0]], {
      draggable: true,
      title: quakes.properties.title,
      fillOpacity: 0.75,
      radius: markerSize(quakes.properties.mag),
      fillColor: "74D2F8",
      color: "74D2F8"
    }).bindPopup("<h2>" + quakes.properties.place + "</h2> <hr> <h3>Magnitude: " + quakes.properties.mag + "</h3>").addTo(map);}
	
	else if (quakes.properties.mag < 4) {
	L.circle([quakes.geometry.coordinates[1], quakes.geometry.coordinates[0]], {
      draggable: true,
      title: quakes.properties.title,
      fillOpacity: 0.75,
      radius: markerSize(quakes.properties.mag),
      fillColor: "6C03C2",
      color: "6C03C2"
    }).bindPopup("<h2>" + quakes.properties.place + "</h2> <hr> <h3>Magnitude: " + quakes.properties.mag + "</h3>").addTo(map);
	}
	
	else if (quakes.properties.mag < 5) {
	L.circle([quakes.geometry.coordinates[1], quakes.geometry.coordinates[0]], {
      draggable: true,
      title: quakes.properties.title,
      fillOpacity: 0.75,
      radius: markerSize(quakes.properties.mag),
      fillColor: "E6CD06",
      color: "E6CD06"
    }).bindPopup("<h2>" + quakes.properties.place + "</h2> <hr> <h3>Magnitude: " + quakes.properties.mag + "</h3>").addTo(map);
	}
	
	else if (quakes.properties.mag < 6) {
	L.circle([quakes.geometry.coordinates[1], quakes.geometry.coordinates[0]], {
      draggable: true,
      title: quakes.properties.title,
      fillOpacity: 0.75,
      radius: markerSize(quakes.properties.mag),
      fillColor: "F67E0E",
      color: "F67E0E"
    }).bindPopup("<h2>" + quakes.properties.place + "</h2> <hr> <h3>Magnitude: " + quakes.properties.mag + "</h3>").addTo(map);
	}
	
	else if (quakes.properties.mag < 7) {
	L.circle([quakes.geometry.coordinates[1], quakes.geometry.coordinates[0]], {
      draggable: true,
      title: quakes.properties.title,
      fillOpacity: 0.75,
      radius: markerSize(quakes.properties.mag),
      fillColor: "F60E0E",
      color: "F60E0E"
    }).bindPopup("<h2>" + quakes.properties.place + "</h2> <hr> <h3>Magnitude: " + quakes.properties.mag + "</h3>").addTo(map);
	};
  });
});
	
