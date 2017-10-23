  var map;
  var infowindow;
  var restArray = [];
  var sorted;

function getWhere(){
  var where = navigator.geolocation.getCurrentPosition(function(position) {
      var userLocation = (`lat: ${position.coords.latitude} lng: ${position.coords.longitude}`)
      console.log(userLocation);  
      console.log(position);
      initMap({ lat: position.coords.latitude, lng: position.coords.longitude })
      // run();
  },

  );
}

// }



function initMap(location) {
          // var location = {where};   
          // lat: 33.8485720, lng: -84.3735560

  map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 11
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: location,
    radius: 50000,
    type: ['restaurant'],
  }, callback);


}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      if (results[i].rating >= 4){
          // sortedArray.push(results[i]);
        createMarker(results[i]);
        restArray.push(results[i]);
            // for (var b = 0, b < restArray.length; b++)
        }
      }
    }
    var reverseSorted = restArray.sort(function(a, b){
    return(a.rating-b.rating)
})
    sorted = reverseSorted.reverse();
    console.log(sorted);

}
    function showRest () {
            var sortedArray = sorted
              counter = 0
            $('.go-to-next').click(function(){
              counter = (counter + 1) % sortedArray.length
              var thisRest = (sortedArray[counter])
              console.log(thisRest );
              $('.name-of-restaurant').html(`${thisRest.name}`)
            })
}
function createMarker(place) {
  // var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  var infowindowHTML = `<h2>hi</h2>`
  infowindowHTML += '<img src="usersLocationGif.mp4">'
  var youAreHere = (`lat: ${position.coords.latitude} lng: ${position.coords.longitude}`)
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}








  