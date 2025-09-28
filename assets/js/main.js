/*
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 *
 * Template Name: Munu - Beauty HTML5 Template   
 * Template URI: https://thememarch.com/demo/html/munu/
 * Description: Munu is a fully responsive beauty HTML template which comes with the unique and clean design. It built with latest bootstrap 4 framework which makes the template fully customizable. It has also e-commerce support. E-commerce pages are included on this template.
 * Author: Thememarch
 * Author URI: https://thememarch.com
 * Version: 1.2
 *
 * %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 */


(function ($) {
    'use strict';


    $.fn.exists = function () {
        return this.length > 0;
    };

    /* Preloader */
    $('.tm-preloader .tm-button').on('click', function () {
        $('.tm-preloader').fadeOut();
    });
    $(window).on('load', function () {
        $('.tm-preloader').fadeOut();
    });


    var munu = {

        databgImage: function () {
            $('[data-bgimage]').each(function () {
                var url = $(this).data('bgimage');

                $(this).css({
                    'background-image': 'url(' + url + ')'
                });
            });
        },

        meanmenuActivation: function () {
            $('.tm-header-nav').meanmenu({
                meanMenuContainer: '.tm-mobilenav',
                meanScreenWidth: '991',
                meanMenuOpen: '<i class="ti-menu"></i>',
                meanMenuClose: '<i class="ti-close"></i>',
                onePage: true
            });
        },

        beforeafterImage: function () {
            $('.tm-beforeafter-image').twentytwenty();
        },

        niceSelectActive: function () {
            $('select').niceSelect();
        },

        countdownActivation: function () {
            $('.tm-countdown').each(function () {
                var $this = $(this),
                    finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime(
                        '<div class="tm-countdown-pack tm-countdown-day"><h2 class="tm-countdown-count">%-D</h2><h6>Days</h6></div><div class="tm-countdown-pack tm-countdown-hour"><h2 class="tm-countdown-count">%-H</h2><h6>Hours</h6></div><div class="tm-countdown-pack tm-countdown-minutes"><h2 class="tm-countdown-count">%M</h2><h6>Minutes</h6></div><div class="tm-countdown-pack tm-countdown-seconds"><h2 class="tm-countdown-count">%S</h2><h6>Seconds</h6></div>'));
                });
            });
        },

        scrollToSection: function () {
            $('.hash-scroll-link').on('click', function (event) {
                event.preventDefault();
                var $anchor = $(this);
                var headerHeight = $('.tm-header-bottomarea').height();
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - headerHeight)
                }, 1000);
            });
        },

        sliderActivations: {
            herosliderSliderActivation: function () {
                $('.tm-heroslider-slider').slick({
                    infinite: true,
                    autoplay: true,
                    pauseOnHover: false,
                    speed: 2000,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    dots: true,
                    rtl: true
                });
            },

            testimonialSliderActivation: function () {
                $('.tm-testimonial-slider').slick({
                    infinite: true,
                    autoplay: true,
                    pauseOnHover: false,
                    speed: 2000,
                    autoplaySpeed: 5000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    rtl: true
                });
            },

            brandlogoSliderActivation: function () {
                $('.tm-brandlogo-slider').slick({
                    infinite: true,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    pauseOnHover: false,
                    arrows: false,
                    dots: false,
                    rtl: true,
                    responsive: [{
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                            }
                        }, {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 420,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            teamMemberSlider: function () {
                $('.tm-member-slider').slick({
                    infinite: true,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    pauseOnHover: false,
                    dots: true,
                    rtl: true,
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            productDetailsGallery: function () {
                $('.tm-prodetails-largeimages').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    loop: false,
                    asNavFor: '.tm-prodetails-thumbnails',
                    rtl: true,
                });
                $('.tm-prodetails-thumbnails').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    loop: false,
                    asNavFor: '.tm-prodetails-largeimages',
                    dots: false,
                    centerMode: true,
                    centerPadding: '50px',
                    arrows: false,
                    focusOnSelect: true,
                    rtl: true,
                });
            },

            blogDetailsSliderActivation: function () {
                $('.tm-blog-imageslider').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="slick-prev slick-arrow"><i class="ti ti-angle-left"></i></button>',
                    nextArrow: '<button class="slick-next slick-arrow"><i class="ti ti-angle-right"></i></button>',
                    dots: false,
                    rtl: true,
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false
                            }
                        }
                    ]
                });
            },

            init: function () {
                this.herosliderSliderActivation();
                this.testimonialSliderActivation();
                this.brandlogoSliderActivation();
                this.teamMemberSlider();
                this.productDetailsGallery();
                this.blogDetailsSliderActivation();
            }
        },

        fancyboxSlick: function () {
            $('[data-fancybox]').fancybox({
                beforeShow: function () {
                    $('.tm-product-quickview .tm-prodetails-largeimages').slick('slickNext');
                }
            });
        },

        ajaxMailchimp: function () {
            $('#tm-mailchimp-form').ajaxChimp({
                language: 'en',
                callback: mailChimpResponse,
                // ADD YOUR MAILCHIMP URL BELOW HERE!
                url: 'YOUR_MAILCHIMP_URL_HERE'
            });

            function mailChimpResponse(resp) {
                if (resp.result === 'success') {
                    $('.tm-mailchimp-success').html('' + resp.msg).fadeIn(900);
                    $('.tm-mailchimp-error').fadeOut(400);
                } else if (resp.result === 'error') {
                    $('.tm-mailchimp-error').html('' + resp.msg).fadeIn(900);
                }
            }
        },

        searchForm: function () {
            $('.tm-header-searchtrigger').on('click', function (e) {
                e.preventDefault();
                $('.tm-header-searcharea').toggleClass('is-visible');
            })

            $('.tm-header-searchclose').on('click', function (e) {
                e.preventDefault();
                $('.tm-header-searcharea').removeClass('is-visible');
            })
        },

        stickyHeader: function () {
            if ($('.tm-header-sticky').exists()) {
                var headerHeight = $('.tm-header').height();
                $('.tm-heroslider, .tm-breadcrumb-area').css({
                    marginTop: headerHeight + 'px'
                });

                $(window).on('scroll', function () {
                    var scrollPos = $(this).scrollTop();
                    if (scrollPos > 250) {
                        $('.tm-header').addClass('is-sticky');
                    } else {
                        $('.tm-header').removeClass('is-sticky');
                    }
                });
            }
        },

        scrollToTop: function () {
            var trigger = $('#back-top-top');
            trigger.css({
                'visibility': 'hidden',
                'opacity': 0
            });

            trigger.on('click', function () {
                $('html, body').stop().animate({
                    scrollTop: 0
                }, 1000);
            });

            $(window).on('scroll', function () {
                var scrollPos = $(window).scrollTop();
                var winHeight = $(window).height();
                if (scrollPos > winHeight) {
                    trigger.css({
                        'visibility': 'visible',
                        'opacity': 1
                    })
                } else {
                    trigger.css({
                        'visibility': 'hidden',
                        'opacity': 0
                    });
                }
            });

        },

        herosliderHeight: function () {
            var headerHeight = $('.tm-header').height();
            $('.tm-heroslider').css({
                'min-height': 'calc(100vh - ' + headerHeight + 'px)'
            })
        },

        rangeSlider: function () {
            $('.tm-rangeslider').nstSlider({
                'left_grip_selector': '.tm-rangeslider-leftgrip',
                'right_grip_selector': '.tm-rangeslider-rightgrip',
                'value_bar_selector': '.tm-rangeslider-bar',
                'value_changed_callback': function (cause, leftValue, rightValue) {
                    $(this).parent().find('.tm-rangeslider-leftlabel').text(leftValue);
                    $(this).parent().find('.tm-rangeslider-rightlabel').text(rightValue);
                }
            });
        },

        productRatingInput: function () {
            $('.tm-ratingbox-input').each(function () {
                $(this).find('span').on('mouseenter', function () {
                    $('.tm-ratingbox-input span').addClass('is-active');
                    $(this).nextAll('span').removeClass('is-active');
                });

            });
        },

        productQuantityBox: function () {
            $('.tm-quantitybox').append('<div class="decrement-button tm-quantitybox-button">-</i></div><div class="increment-button tm-quantitybox-button">+</div>');
            $('.tm-quantitybox-button').on('click', function () {
                var button = $(this);
                var quantityOldValue = button.parent().find('input').val();
                var quantityNewVal;
                if (button.text() == "+") {
                    quantityNewVal = parseFloat(quantityOldValue) + 1;
                } else {
                    if (quantityOldValue > 1) {
                        quantityNewVal = parseFloat(quantityOldValue) - 1;
                    } else {
                        quantityNewVal = 1;
                    }
                }
                button.parent().find('input').val(quantityNewVal);
            });
        },


        instafeedActive: function () {
            var userFeed = new Instafeed({
                get: 'user',
                userId: 12620117360,
                accessToken: '12620117360.1677ed0.73a0ac15057c4edcada08b9df21cfa49',
                resolution: 'low_resolution',
                limit: 8,
                template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /><ul class="tm-instaphotos-counter"><li><i class="ti ti-heart"></i> {{likes}}</li><li><i class="ti ti-comment"></i> {{comments}}</li></ul></a></li>',
            });
            userFeed.run();
        },

        scrollAnimation: function () {
            var controller = new ScrollMagic.Controller();
            $('.tm-scrollanim').each(function (i) {
                new ScrollMagic.Scene({
                        triggerElement: this,
                        triggerHook: 0.8,
                        reverse: false,
                    })
                    .setClassToggle(this, 'scrollanim-action')
                    .addTo(controller);
            });
        },


        differentAddressFormToggle: function () {
            $('#billform-dirrentswitch').on('change', function () {
                if ($(this).is(':checked')) {
                    $('.tm-checkout-differentform').slideDown();
                } else {
                    $('.tm-checkout-differentform').slideUp();
                }
            });
        },

        checkoutPaymentMethod: function () {
            $('.tm-checkout-payment input[type="radio"]').each(function () {
                if ($(this).is(':checked')) {
                    $(this).siblings('.tm-checkout-payment-content').slideDown();
                }
                $(this).siblings('label').on('click', function () {
                    $('.tm-checkout-payment input[type="radio"]').prop('checked', false).siblings('.tm-checkout-payment-content').slideUp();
                    $(this).prop('checked', true).siblings('.tm-checkout-payment-content').slideDown();
                });
            });
        },

        loginPassShower: function () {
            $('input[name="register-pass-show"]').on('change', function () {
                var type = $('input[name="register-pass"]').attr('type');
                if (type == 'password') {
                    $('input[name="register-pass"]').attr('type', 'text');
                } else {
                    $('input[name="register-pass"]').attr('type', 'password');
                }
            });
        },

        scrollSpyActive: function () {
            var headerMiddleHeight = $('.tm-header-bottomarea').height();
            $('.tm-header-nav').scrollspy({
                offset: -1 * (headerMiddleHeight - 1),
                activeClass: 'current',
                animate: 'swing',
            });
        },

        menuOverflow: function () {
            $('.tm-header-nav ul li').on('mouseenter mouseleave', function (e) {
                if ($('ul', this).length) {
                    var listElem = $('ul:first', this);
                    var listElemOffset = listElem.offset();
                    var leftValue = listElemOffset.left - $('body').offset().left;
                    var widthValue = listElem.width();

                    if (listElem.find('ul').length) {
                        widthValue = listElem.width() * 2;
                    }

                    var docW = $('body').width();
                    var isEntirelyVisible = (leftValue + widthValue <= docW);

                    if (!isEntirelyVisible) {
                        $(this).addClass('overflow-element');
                    } else {
                        $(this).removeClass('overflow-element');
                    }
                }
            });
        },

        dropdownHasChildren: function () {
            $('.tm-header-nav-dropdown ul li').each(function () {
                if ($(this).children('ul').length) {
                    $(this).addClass('has-child');
                }
            });
        },

        /* Ajax Contact Form */
        ajaxContactForm: function () {
            $(function () {
                // Get the form.
                var form = $('#tm-contactform');

                // Get the messages div.
                var formMessages = $('.form-messages');

                // TODO: The rest of the code will go here...

                // Set up an event listener for the contact form.
                $(form).submit(function (event) {
                    // Stop the browser from submitting the form.
                    event.preventDefault();

                    // Serialize the form data.
                    var formData = $(form).serialize();

                    // Submit the form using AJAX.
                    $.ajax({
                            type: 'POST',
                            url: $(form).attr('action'),
                            data: formData
                        })


                        .done(function (response) {
                            // Make sure that the formMessages div has the 'success' class.
                            $(formMessages).removeClass('error');
                            $(formMessages).addClass('success');

                            // Set the message text.
                            $(formMessages).text(response);

                            // Clear the form.
                            $('#tm-contactform input:not([type="submit"]), #tm-contactform textarea').val('');
                        })

                        .fail(function (data) {
                            // Make sure that the formMessages div has the 'error' class.
                            $(formMessages).removeClass('success');
                            $(formMessages).addClass('error');

                            // Set the message text.
                            if (data.responseText !== '') {
                                $(formMessages).text(data.responseText);
                            } else {
                                $(formMessages).text('Oops! An error occured and your message could not be sent.');
                            }
                        });
                });
            });
        },

        /* Ajax Appointment Form */
        ajaxAppointmentForm: function () {
            $(function () {
                // Get the form.
                var form = $('#tm-appointment-form');

                // Get the messages div.
                var formMessages = $('.appointment-messages');

                // TODO: The rest of the code will go here...

                // Set up an event listener for the contact form.
                $(form).submit(function (event) {
                    // Stop the browser from submitting the form.
                    event.preventDefault();

                    // Serialize the form data.
                    var formData = $(form).serialize();

                    // Submit the form using AJAX.
                    $.ajax({
                            type: 'POST',
                            url: $(form).attr('action'),
                            data: formData
                        })


                        .done(function (response) {
                            // Make sure that the formMessages div has the 'success' class.
                            $(formMessages).removeClass('error');
                            $(formMessages).addClass('success');

                            // Set the message text.
                            $(formMessages).text(response);

                            // Clear the form.
                            $('#tm-appointment-form input:not([type="submit"]),  #tm-appointment-form select, #tm-appointment-form textarea').val('');
                        })

                        .fail(function (data) {
                            // Make sure that the formMessages div has the 'error' class.
                            $(formMessages).removeClass('success');
                            $(formMessages).addClass('error');

                            // Set the message text.
                            if (data.responseText !== '') {
                                $(formMessages).text(data.responseText);
                            } else {
                                $(formMessages).text('Oops! An error occured and your message could not be sent.');
                            }
                        });
                });
            });
        },

        init: function () {
            munu.databgImage();
            munu.meanmenuActivation();
            munu.beforeafterImage();
            munu.niceSelectActive();
            munu.countdownActivation();
            munu.scrollToSection();
            munu.sliderActivations.init();
            munu.fancyboxSlick();
            munu.ajaxMailchimp();
            munu.searchForm();
            munu.stickyHeader();
            munu.scrollToTop();
            munu.herosliderHeight();
            munu.rangeSlider();
            munu.productRatingInput();
            munu.productQuantityBox();
            munu.instafeedActive();
            munu.scrollAnimation();
            munu.differentAddressFormToggle();
            munu.checkoutPaymentMethod();
            munu.loginPassShower();
            munu.scrollSpyActive();
            munu.menuOverflow();
            munu.dropdownHasChildren();
            munu.ajaxContactForm();
            munu.ajaxAppointmentForm();
        }
    }

    munu.init();


})(jQuery);