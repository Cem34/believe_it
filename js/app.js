/*--- Animation config carousel blog ----*/

$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
		items:4,
		
		nav:true,
		margin:20,
		responsive:{
        0:{
            items:1,
            nav:true,
            slideBy:1
        },
        600:{
            items:2,
            nav:true,
            slideBy:1
        },
        900:{
            items:3,
            nav:true,
            slideBy:1
        },
        1240:{
            items:4,
            nav:true,
            slideBy:4
        }
    }
	})

    /*-- vitesse carousel --*/

    $('.carousel').carousel({
      interval: 15000
    });


    /*-- hamburger menu --*/

    $('#hamburger_menu').click(function(){
        $(this).toggleClass('open');
        $('nav').toggleClass('translate_open');
    });

    /*-- animation scroll automatique du menu --*/

    $('nav a[href^="#"]').click(function(){
        var id = $(this).attr("href");
        console.log(id);
        var offset = $(id).offset().top;
        console.log(offset);
        $('html, body').animate({scrollTop: offset - 100},'slow');
        return false;
    });

    /*--- Animation image staff ---*/

    $(function() {
        $("#img_staff1").hover(
            function() {
                $(this).attr("src", "img/anime/anime_pascal.gif");
                $('#pos_1 .info .nom').css("display","block");
                $('#pos_1 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/pascal.JPG");
                $('#pos_1 .nom').css("display","none");
                $('#pos_1 .poste').css("display","none");
            }                         
        );


        $("#img_staff2").hover(
            function() {
                $(this).attr("src", "img/anime/anime_pascal.gif");
                $('#pos_2 .info .nom').css("display","block");
                $('#pos_2 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/pascal.JPG");
                $('#pos_2 .nom').css("display","none");
                $('#pos_2 .poste').css("display","none");
            }                         
        );


        $("#img_staff3").hover(
            function() {
                $(this).attr("src", "img/anime/anime_boris.gif");
                $('#pos_3 .info .nom').css("display","block");
                $('#pos_3 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/boris.JPG");
                $('#pos_3 .nom').css("display","none");
                $('#pos_3 .poste').css("display","none");
            }       
        );


        $("#img_staff4").hover(
            function() {
                $(this).attr("src", "img/anime/anime_yoan.gif");
                $('#pos_4 .info .nom').css("display","block");
                $('#pos_4 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/yoan.JPG");
                $('#pos_4 .nom').css("display","none");
                $('#pos_4 .poste').css("display","none");
            }                         
        );


        $("#img_staff5").hover(
            function() {
                $(this).attr("src", "img/anime/anime_alex1.gif");
                $('#pos_5 .info .nom').css("display","block");
                $('#pos_5 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/alex1.JPG");
                $('#pos_5 .nom').css("display","none");
                $('#pos_5 .poste').css("display","none");
            }                         
        );


        $("#img_staff6").hover(
            function() {
                $(this).attr("src", "img/anime/anime_joy.gif");
                $('#pos_6 .info .nom').css("display","block");
                $('#pos_6 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/joy.JPG");
                $('#pos_6 .nom').css("display","none");
                $('#pos_6 .poste').css("display","none");
            }                         
        );


        $("#img_staff7").hover(
            function() {
                $(this).attr("src", "img/anime/anime_alex2.gif");
                $('#pos_7 .info .nom').css("display","block");
                $('#pos_7 .info .poste').css("display","block");

            },
            function() {
                $(this).attr("src", "img/anime/alex2.JPG");
                $('#pos_7 .nom').css("display","none");
                $('#pos_7 .poste').css("display","none");
            }                         
        );


        $("#img_staff8").hover(
            function() {
                $(this).attr("src", "img/anime/anime_sabine.gif");
                $('#pos_8 .info .nom').css("display","block");
                $('#pos_8 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/sabine.JPG");
                $('#pos_8 .nom').css("display","none");
                $('#pos_8 .poste').css("display","none");
            }                         
        );


        $("#img_staff9").hover(
            function() {
                $(this).attr("src", "img/anime/anime_jerome.gif");
                $('#pos_9 .info .nom').css("display","block");
                $('#pos_9 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/jerome.JPG");
                $('#pos_9 .nom').css("display","none");
                $('#pos_9 .poste').css("display","none");
            }                         
        );


        $("#img_staff10").hover(
            function() {
                $(this).attr("src", "img/anime/anime_loic.gif");
                $('#pos_10 .info .nom').css("display","block");
                $('#pos_10 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/loic.JPG");
                $('#pos_10 .nom').css("display","none");
                $('#pos_10 .poste').css("display","none");
            }                         
        );


        $("#img_staff11").hover(
            function() {
                $(this).attr("src", "img/anime/anime_nico.gif");
                $('#pos_11 .info .nom').css("display","block");
                $('#pos_11 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/nico.JPG");
                $('#pos_11 .nom').css("display","none");
                $('#pos_11 .poste').css("display","none");
            }                         
        );


        $("#img_staff12").hover(
            function() {
                $(this).attr("src", "img/anime/anime_cem.gif");
                $('#pos_12 .info .nom').css("display","block");
                $('#pos_12 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/cem.JPG");
                $('#pos_12 .nom').css("display","none");
                $('#pos_12 .poste').css("display","none");
            }                         
        );

        $("#img_staff13").hover(
            function() {
                $(this).attr("src", "img/anime/anime_karim.gif");
                $('#pos_13 .info .nom').css("display","block");
                $('#pos_13 .info .poste').css("display","block");
            },
            function() {
                $(this).attr("src", "img/anime/karim.JPG");
                $('#pos_13 .nom').css("display","none");
                $('#pos_13 .poste').css("display","none");
            }                         
        );
    })

    /*--- Animation image ---*/

    $(function() {
        $("#language1").hover(
            function() {
                $(this).attr("src", "img/anime/java.gif");
            },
            function() {
                $(this).attr("src", "img/java.png");
            }                         
        );

        $("#language2").hover(
            function() {
                $(this).attr("src", "img/anime/php.gif");
            },
            function() {
                $(this).attr("src", "img/php.png");
            }                         
        );

        $("#language3").hover(
            function() {
                $(this).attr("src", "img/anime/sql.gif");
            },
            function() {
                $(this).attr("src", "img/sql_server.png");
            }                         
        );

        $("#language4").hover(
            function() {
                $(this).attr("src", "img/anime/c++.gif");
            },
            function() {
                $(this).attr("src", "img/c++.png");
            }                         
        );

        $("#language5").hover(
            function() {
                $(this).attr("src", "img/anime/net.gif");
            },
            function() {
                $(this).attr("src", "img/net.png");
            }                         
        );

        $("#language6").hover(
            function() {
                $(this).attr("src", "img/anime/scrum.gif");
            },
            function() {
                $(this).attr("src", "img/scrum.png");
            }                         
        );
    });

});

/*--- Animation logo map ---*/

function initMap(){
    var uluru = {lat: 43.6159579, lng:3.8659814999999753 };
    var map = new google.maps.Map(document.getElementById('map'),{
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