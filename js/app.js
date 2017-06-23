$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items:4,
		loop:true,
		nav:true,
		margin:20,
		responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
	})
});


function initMap() {
    var uluru = {lat: 43.6159579, lng:3.8659814999999753 };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });

    var image = "img/mini.png";

    var beachMarker = new google.maps.Marker({
      position: uluru,
      map: map,
      animation: google.maps.Animation.BOUNCE,
      icon: image
    });
    beachMarker.addListener('click', toggleBounce);
  }

  function toggleBounce() {
    if (beachMarker.getAnimation() !== null) {
        beachMarker.setAnimation(null);
    } 
    else {
        beachMarker.setAnimation(google.maps.Animation.BOUNCE);
    }
}