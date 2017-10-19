$('#myModal').modal()  
  var where = navigator.geolocation.getCurrentPosition(function(position) {
    // console.log(position.coords.latitude, position.coords.longitude);
    console.log(`lat:  ${position.coords.latitude} lng: ${position.coords.longitude}`); 
    // return(`lat:  ${position.coords.latitude} lng: ${position.coords.longitude}`); 
    run()

});
  function run(){





      var map;
      var infowindow;
      var restArray = [];

      function initMap() {
        var location = {where};   
        // lat: 33.8485720, lng: -84.3735560

        map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 15
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: location,
          radius: 500,
          type: ['restaurant']
        }, callback);
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            restArray.push(results[i]);
          }
        }
      }
       console.log(restArray);
      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
    }