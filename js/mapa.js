var initMap = function() {
	var uluru = {lat: -2.1961328, lng: -79.88232970000001};
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 19,
        center: uluru,
        //scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

initMap();