$(document).ready(()=>{ 


var where = navigator.geolocation.getCurrentPosition(function(position) {
console.log(position.coords.latitude, position.coords.longitude);
});

var map = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 4,
      center: myLatlng
    }
  );

var y = new google.maps.places.PlacesService(map);



});