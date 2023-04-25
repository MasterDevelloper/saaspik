var PIXELSIGNS = PIXELSIGNS || {};

(function($) {

    /*!----------------------------------------------
        # This beautiful code written with heart
        # by Mominul Islam <hello@mominul.me>
        # In Dhaka, BD at the PixelSigns Theme workstation.
        ---------------------------------------------*/

    // USE STRICT
    "use strict";

    PIXELSIGNS.initialize = {

        init: function() {
            PIXELSIGNS.initialize.general();
            // PIXELSIGNS.initialize.mobileMenu();
            PIXELSIGNS.initialize.sectionSwitch();
        },

        /*========================================================*/
        /*=           Collection of snippet and tweaks           =*/
        /*========================================================*/

        general: function() {

            /* Wow Js Init */

            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true,
                scrollContainer: null,
            });
            wow.init();



        },

        /*==========================================*/
        /*=           Section Background           =*/
        /*==========================================*/

        sectionBackground: function() {
            // Section Background Image
            $('[data-bg-image]').each(function() {
                var img = $(this).data('bg-image');
                $(this).css({
                    backgroundImage: 'url(' + img + ')',
                });
            });
        },

        /*=====================================*/
        /*=           Section Switch          =*/
        /*=====================================*/

        sectionSwitch: function() {

            $('[data-type="section-switch"], a, .site-logo a').on('click', function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    if (target.length > 0) {

                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        $('html,body').animate({
                            scrollTop: target.offset().top - (83)
                        }, 1000);
                        return false;
                    }
                }
            });
        },

    };

    PIXELSIGNS.documentOnReady = {
        init: function() {
            PIXELSIGNS.initialize.init();

        },
    };

    PIXELSIGNS.documentOnLoad = {
        init: function() {
            $(".page-loader").fadeOut("slow");
        },
    };

    PIXELSIGNS.documentOnResize = {
        init: function() {

        },
    };

    PIXELSIGNS.documentOnScroll = {
        init: function() {
            PIXELSIGNS.initialize.sectionBackground();

            if ($(window).scrollTop() > 300) {
                $('.return-to-top').addClass('back-top');
            } else {
                $('.return-to-top').removeClass('back-top');
            }

            /* Header Sticky */
            /* Sticky Menu */
            if ($(this).scrollTop() > 0) {
                $('.site-header').addClass("pix-header-fixed")
            } else {
                $('.site-header').removeClass("pix-header-fixed")
            }
        },
    };

    // Initialize Functions
    $(document).ready(PIXELSIGNS.documentOnReady.init);
    $(window).on('load', PIXELSIGNS.documentOnLoad.init);
    $(window).on('resize', PIXELSIGNS.documentOnResize.init);
    $(window).on('scroll', PIXELSIGNS.documentOnScroll.init);

})(jQuery);