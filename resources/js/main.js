$(document).ready(function() {
    $('.selector').animatedHeadline({
        animationType: 'rotate-2'


    });

    //scroll
    $('#scroll_top').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }), 100;
    });
    $('#scroll_top').hide();
    $(window).scroll(function() {
        var count = $(this).scrollTop();

        if (count < 100) {
            $('#scroll_top').fadeOut();
        } else {
            $('#scroll_top').fadeIn();
        }
    });


    /*Partical js */
    particlesJS('particles-js',

        {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#f1c40f", "#e74c3c", "#d35400", "#182C61", "#6D214F", '#2C3A47', '#EAB543', '#ff3838', '#fff200']
                },
                "shape": {
                    "type": ["circle", 'polygon', 'stroke', 'star'],
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": .8,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 100,
                    "color": "#2c2c54",
                    "opacity": 0.7,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );

    /*owl carousel */
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        autoplay: true,
        autoplayTime: 10
    });

    /*Magnafic popup */
    $('.test').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });


});