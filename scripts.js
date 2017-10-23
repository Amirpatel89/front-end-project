  var map;
  var infowindow;
  var restArray = [];
  var sorted;
  var placeDetails = [];
  var globalThisRest = [];



function getWhere(){
      navigator.geolocation.getCurrentPosition(function(position) {
      // console.log(`lat: ${position.coords.latitude} lng: ${position.coords.longitude}`);
      var thisLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
      console.log(thisLocation);
      console.log(position);
      // var defaultLocation = {lat: 36.169941, lng: -115.139830};
      // console.log(defaultLocation);
      initMap(thisLocation);



      // initMap(thisLocation);

     
    
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
              var thisRest = (sortedArray[counter]);
              console.log(thisRest);
              globalThisRest.push(thisRest);

            $('.name-of-restaurant').html(`${thisRest.name}`);
            $('.rating-of-restaurant').html(`Rating: ${thisRest.rating} Stars`);


            // $('reset-button').click(function reset(){
            // sortedArray.length =0
            // counter = 0
            // var thisRest = (sortedArray[counter]);
            // console.log(thisRest);
            // $('.name-of-restaurant').html(`${thisRest.name}`);
            // $('.rating-of-restaurant').html(`Rating: ${thisRest.rating} Stars`);
              // var photo = $('.photo-of-restaurant').prepend('<img id="thePhoto" src=""https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + "`${thisRest.reference}`" + "&key=AIzaSyCtqWrXYroKEJA-TxgqRjLZzGsTa4bsRLk"" />');
              // console.log(photo);
            var service = new google.maps.places.PlacesService(map);
                service.getDetails({placeId: `${thisRest.place_id}`}, function(place, status) {
                   if (status == google.maps.places.PlacesServiceStatus.OK) {
                    console.log(place);
                    placeDetails.push(`${place.photos[0]}`);
                    var photo = [];
                    photo.push(`${place.photos[0]}`)
                    // $('.photo-of-restaurant').html(`${place.photos[0]}`);
                    console.log(photo);
                    console.log(placeDetails);
                    $('.photo-of-restaurant').html(placeDetails);

                    };




            });

        });
                
};

                 


               

              


            // });
            // $('.go-back').click(function goBack(){
            //   console.log("hlkjdsf");
              // counter = (counter - 1) % sortedArray.length
              // var thisRest = (sortedArray[counter])
              // console.log(thisRest);
              // $('.name-of-restaurant').html(`${thisRest.name}`);
              // $('.rating-of-restaurant').html(`Rating: ${thisRest.rating} Stars`);
                 // if(counter == 0){
                 //   counter == sortedArray.length-1
                 // };
                 
            //       else {
            //           counter=counter-1
            //       };
            // });

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












  