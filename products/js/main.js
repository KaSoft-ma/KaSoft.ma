var images = document.getElementsByClassName("image");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var navbar = document.getElementById("navbar");
var slideIndex = 0;
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        var src = this.getAttribute("src");
        slideIndex = Array.from(images).indexOf(this);
        modal.style.display = "block";
        modalImg.src = src;
        document.body.classList.add("modal-open");
        navbar.classList.add("hiddenNav");
    });
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}
function showSlides(n) {
    var slides = Array.from(images);
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    if(slides[slideIndex]) modalImg.src = slides[slideIndex].getAttribute("src");
}
function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    navbar.classList.remove("hiddenNav");
}

showSlides(slideIndex);


var navbarToggler = document.querySelector("#newToggler");
navbarToggler.classList.add("hide");
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbarToggler.classList.remove("hide");
    } else {
        navbarToggler.classList.add("hide");
    }
};
  


(function ($) {
    "use strict";
    $(document).on('ready', function () {

        $(".carousel-inner .item:first-child").addClass("active");
        /* Mobile menu click then remove
        ==========================*/
        $(".mainmenu-area #mainmenu li a").on("click", function () {
            $(".navbar-collapse").removeClass("in");
        });

        /* Scroll to top
        ===================*/
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
        /* testimonials Slider Active
        =============================*/
        $('.testimonials').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });


        /* testimonials Slider Active
        =============================*/
        $('.gallery-slider').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                },
                1500: {
                    items: 4
                }
            }
        });



        /* testimonials Slider Active
        =============================*/
        $('.sponsors').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });

        /*--------------------
           MAGNIFIC POPUP JS
           ----------------------*/
        var magnifPopup = function () {
            $('.popup').magnificPopup({
                type: 'iframe',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        magnifPopup();

        /*-- Smoth-Scroll --*/

        // Select all links with hashes
        $('.mainmenu-area a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .on('click', function (event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });

        $("h1,h2,h3,h4,h5,h6").each(function () {
            var title_val = $(this).text();
            $(this).attr('title', title_val);
        });



        $('.mainmenu-area ul.nav').slicknav();
        $('.slicknav_menu').prepend('<a href="index.html"><img src="images/logo.png" alt=""></a>');
        $('.mainmenu-area ul.sub-menu').parent('li').append('<i class="fa fa-angle-right" ></i>');




    });
    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
        /*WoW js Active
        =================*/
        new WOW().init({
            mobile: true,
        });
    });
})(jQuery);