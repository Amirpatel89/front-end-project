$(document).ready(()=>{	


var where = navigator.geolocation.getCurrentPosition(function(position) {
console.log(position.coords.latitude, position.coords.longitude);
});




});