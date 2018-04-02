var myMap, markers = [], infoWindow;

function initMap(){
	var element = document.getElementById("map");
	var options = {
		zoom: 6,
		center: {lat: 49, lng: 31}
	}
	
	myMap = new google.maps.Map(element, options);
	
	var checkboxes = document.getElementsByName("institutions");
	
	var bounds = new google.maps.LatLngBounds();
	
	infoWindow = new google.maps.InfoWindow();
	
	var pre = "d:/JavaScript/secondMap/WebContent/images/";
	
	if(checkboxes[0].checked){
		markers.push({arr: RegionalGUMVD, icon: pre + "RegionalGUMVD.png"});
	}
	
	if(checkboxes[1].checked){
		markers.push({arr: policeDepartments, icon: pre + "RegionalPolice.png"});
	}
	
	if(checkboxes[2].checked){
		markers.push({arr: RegionalDSNS, icon: pre + "RegionalDSNS.png"});
	}
	
	if(checkboxes[3].checked){
		markers.push({arr: RegionalDMS, icon: pre + "RegionalDMS.png"});
	}
	
	if(checkboxes[4].checked){
		markers.push({arr: RegionalNGU, icon: pre + "RegionalNGU.png"});
	}
	
	if(checkboxes[5].checked){
		markers.push({arr: RegionalGSC, icon: pre + "RegionalGSC.png"});
	}

	for(var i = 0; i < markers.length; i++) {
		for(var j = 0; j < markers[i].arr.length; j++){
			addMarker({
				icon: markers[i].icon,
				marker: markers[i].arr[j]
			});
		}
	}
	markers.length = 0;
}

function addMarker(properties){
	var marker = new google.maps.Marker({
		position: {
			lat: properties.marker.lat,
			lng: properties.marker.lng
		},
		map: myMap,
		title: properties.marker.name,
		icon: properties.icon
	});
	var content = '<div class="infowindow">'
		+ '<h3>' + properties.marker.name    + '</h3>'
		+ '<p>'  + properties.marker.address + '</p>'
		+ '<a href="' + properties.marker.facebook
			+ '"><img src="images/Facebook.png" width="40" height="40" alt="Facebook"></a>'
		+ '<a href="' + properties.marker.twitter
			+ '"><img src="images/twitter.png" width="40" height="40" alt="Twitter"></a>'
		+ '<a href="' + properties.marker.youtube
			+ '"><img src="images/YouTube.png" width="40" height="40" alt="YouTube"></a>'
		+ '<a href="' + properties.marker.instagram
			+ '"><img src="images/Instagram.png" width="40" height="40" alt="Instagram"></a></div>';
	
	google.maps.event.addListener(marker, "click", function(){
		infoWindow.setContent(content);
		infoWindow.open(myMap, marker);
	});
}
