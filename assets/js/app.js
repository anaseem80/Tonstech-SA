var tonsetech = tonsetech || {};
(function () {
  "use strict";
  // window.onload = function() {
  //   $("#preloader").delay(0).fadeOut("fade");
  // };
  $("#preloader").delay(0).fadeOut("fade");
  
  //dropdown menu hover js
  $("ul.nav li.dropdown").hover(function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
  }, function () {
    $(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
  });

  //sticky header
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 2) {
      $("nav.sticky-header").removeClass("affix");
    } else {
      $("nav.sticky-header").addClass("affix");
    }
  });

  //swiper slide js
  var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay:true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1142: {
        slidesPerView: 2,
        spaceBetween: 25
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  //swiper slide js
  var swiper = new Swiper(".testimonialThreeSwiper", {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  //app two review slider
  var swiper = new Swiper(".appTwoReviewSwiper", {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  //logo
  var swiper = new Swiper(".brand-logo-slider", {
    slidesPerView: 2,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
  });
  //testimonial cyber
  var swiper = new Swiper(".cyber-testimonial-slider", {
    slidesPerView: 1,
    speed: 700,
    pagination: {
      clickable: true,
      el: ".swiper-pagination"
    },
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 1
      }
    }
  });
  //cyber blog
  var swiper = new Swiper(".cyber-blog", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 2500
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      }
    }
  });
  //crypto testimonial blog
  var swiper = new Swiper(".crypto-testimonial", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
      delay: 2500
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      }
    }
  });
  //hero-slider
  var swiper = new Swiper(".hero-slider", {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3000
    }
  });

  //payment brand logo
  var swiper = new Swiper(".payment-brand-logo", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 2500
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 5
      }
    }
  });
  //payment testimonial 
  var swiper = new Swiper(".payment-testimonial-slider", {
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 3000
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      }
    }
  });

  //digital marketing brand logo logo
  var swiper = new Swiper(".digi-logo-slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    autoplay: {
      delay: 2500
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 6
      }
    }
  });

  //digital marketing testimonial
  var swiper = new Swiper(".digi-testimonial-wrapper", {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: ".digi-nav-control .swiper-button-next",
      prevEl: ".digi-nav-control .swiper-button-prev"
    }
  });

  //digital marketing testimonial
  var swiper = new Swiper(".ev-testimonial-slider", {
    slidesPerView: 1,
    autoplay:true,
    loop: true,
    speed: 800,
    pagination: {
      clickable: true,
      el: ".eve-pagination.swiper-pagination"
    }
  });

  //insurance gallery slider
  var swiper = new Swiper(".ins-gallery-slider", {
    slidesPerView: 3,
    loop: true,
    speed: 800,
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false
      },
      768: {
        slidesPerView: 3,
        centeredSlides: true
      }
    }
  });

  //insurance feedback slider
  var swiper = new Swiper(".ins-feedback-slider", {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev'
    },
    breakpoints: {
      0: {
        spaceBetween: 40
      },
      1200: {
        spaceBetween: 90
      }
    }
  });

  //insurance brand slider
  var swiper = new Swiper(".ins-brand-slider", {
    slidesPerView: 4,
    loop: true,
    speed: 800,
    spaceBetween: 10,
    autoplay: true,
    breakpoints: {
      0: {
        slidesPerView: 2
      },
      575: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
  var crmTotalSlide = $(".crm-htw-slider .swiper-wrapper .crm-htw-single").length;
  if (crmTotalSlide < 10) {
    $(".crm_total_value").text("0" + crmTotalSlide);
  } else {
    $(".crm_total_value").text(crmTotalSlide);
  }

  //crm htw slider
  var swiper = new Swiper(".crm-htw-slider", {
    slidesPerView: 4,
    loop: false,
    speed: 800,
    spaceBetween: 24,
    navigation: {
      nextEl: '.crm-next-control',
      prevEl: '.crm-prev-control'
    },
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 1
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
  var crmFeedbackSlider = new Swiper('.crm-feedback-slider', {
    spaceBetween: 10,
    autoplay: true,
    speed: 800,
    navigation: {
      nextEl: '.crm-next-control',
      prevEl: '.crm-prev-control'
    },
    loop: true,
    loopedSlides: 4
  });
  var crmFeedbackThumbSlider = new Swiper('.crm-feedback-control-slider', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 5,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    speed: 800,
    loopedSlides: 4,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      scale: 1,
      stretch: 12,
      depth: 185
    }
  });
  crmFeedbackSlider.controller.control = crmFeedbackThumbSlider;
  crmFeedbackThumbSlider.controller.control = crmFeedbackSlider;
  var dgPortfolioSlider = new Swiper(".dg-portfolio-slider", {
    spaceBetween: 24,
    pagination: {
      el: '.dg-portfolio-slider-control',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
  var dgTeamSlider = new Swiper(".dg-team-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '.dg-team-slider-controls',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      425: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 2
      },
      1400: {
        slidesPerView: 3
      }
    }
  });
  var dgFeedbackSlider = new Swiper(".dg-feedback-slider", {
    spaceBetween: 24,
    autoplay: true,
    speed: 700,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
  var scFeedbackSlider = new Swiper(".sc-feedback-slider", {
    autoplay: true,
    loop: true,
    speed: 700,
    spaceBetween: 24,
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });

  //slide controls 
  $(".crm-next-control-outer").on("click", function () {
    $(".crm-next-control").trigger('click');
  });
  $(".crm-prev-control-outer").on("click", function () {
    $(".crm-prev-control").trigger("click");
  });

  //mk accordion
  $(".mk-accordion").each(function () {
    var accordionButton = $(this).find(".accordion-button");
    accordionButton.each(function () {
      $(this).on("click", function () {
        $(this).parents(".mk-accordion").find(".accordion-item.active").removeClass('active');
        $(this).parents(".accordion-item").addClass("active");
      });
    });
  });

  //mk pricing plan
  $(".mk-pricing-control li a").each(function () {
    $(this).on("click", function () {
      $(this).parents(".mk-pricing-control").find('a.active').removeClass("active");
      $(this).addClass("active");
    });
  });
  $(".mk-pricing-control .mk_monthly_switch").on("click", function () {
    $(".mk_monthly_price").show();
    $(".mk_yearly_price").hide();
    return false;
  });
  $(".mk-pricing-control .mk_yearly_switch").on("click", function () {
    $(".mk_monthly_price").hide();
    $(".mk_yearly_price").show();
    return false;
  });

  //mk feedback slider
  var mkCarousel = $("#mkCarousel");
  $("#mkCarouselControl button").each(function () {
    $(this).on("click", function () {
      $(this).parent().find('button.active').removeClass("active");
      $(this).addClass("active");
    });
  });
  mkCarousel.on("slide.bs.carousel", function () {
    var findNumber = mkCarousel.find(".active").index();
    findNumber = findNumber + 2;
    var totalSlides = $('#mkCarousel .carousel-item').length;
    if (findNumber > totalSlides) {
      findNumber = 1;
    }
    $('#mkCarouselControl').find('button.active').removeClass("active");
    $('#mkCarouselControl button:nth-child(' + findNumber + ')').addClass("active");
  });
  $(".crm-monthly").on("click", function () {
    $('.crm-checkbox-switch').prop('checked', false);
  });
  $(".crm-yearly").on("click", function () {
    $(".crm-checkbox-switch").prop("checked", true);
  });
  $(".crm-pricing-switch").on("click", function () {
    var isBoxChecked = $(".crm-checkbox-switch").is(":checked");
    if (isBoxChecked !== true) {
      $(".crm_monthly_price").show();
      $(".crm_yearly_price").hide();
    } else {
      $(".crm_yearly_price").show();
      $(".crm_monthly_price").hide();
    }
  });

  //hd accordion
  $(".hd-accordion .accordion-header a").each(function () {
    $(this).on("click", function () {
      $(this).parents('.hd-accordion').find(".accordion-item.active").removeClass("active");
      $(this).parents(".accordion-item").addClass("active");
    });
  });

  //sc pricing component
  if ($(".sc-pricing-switch").length) {
    var pricingSwitchBtn = $(".sc-pricing-switch");
    var dataActiveValue = pricingSwitchBtn.find("button.active").data("value");
    if (dataActiveValue == 'monthly') {
      $(".sc-pricing-column").find(".pricing-amount.yearly").hide();
      $(".sc-pricing-column").find(".pricing-amount.monthly").show();
    } else if (dataActiveValue == 'yearly') {
      $(".sc-pricing-column").find(".pricing-amount.yearly").show();
      $(".sc-pricing-column").find(".pricing-amount.monthly").hide();
    }
    $(".sc-pricing-switch button").each(function () {
      $(this).on("click", function () {
        var dataActiveValue = $(this).data("value");
        $(this).parents(".sc-pricing-switch").find("button.active").removeClass("active");
        $(this).addClass("active");
        if (dataActiveValue == 'monthly') {
          $(".sc-pricing-column").find(".pricing-amount.yearly").hide();
          $(".sc-pricing-column").find(".pricing-amount.monthly").show();
        } else if (dataActiveValue == 'yearly') {
          $(".sc-pricing-column").find(".pricing-amount.yearly").show();
          $(".sc-pricing-column").find(".pricing-amount.monthly").hide();
        }
      });
    });
  }
  tonsetech.initialize = {
    init: function () {
      tonsetech.initialize.general();
    },
    general: function () {
      // Mouse Move Parallax Element
      var $scene = $(".parallax-element").parallax({
        scalarX: 100,
        scalarY: 100
      });
    }
  };
  tonsetech.documentOnReady = {
    init: function () {
      tonsetech.initialize.init();
    }
  };
  $(document).ready(tonsetech.documentOnReady.init);
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  });

  //animated js
  AOS.init({
    easing: "ease-in-out",
    // default easing for AOS animations
    once: true,
    // whether animation should happen only once - while scrolling down
    duration: 500 // values from 0 to 3000, with step 50ms
  });
  //magnific popup js
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  $(".popup-with-form").magnificPopup({
    type: "inline",
    preloader: false,
    focus: "#name"
  });
  $(window).on("load", function () {
    $('.masonry_grid').masonry({
      itemSelector: '.grid_item',
      columnWidth: 2,
    });
  });
})();


// var index = 0;
// var text = 'LOADING OPPORTUNITIES';
// var speed = 50;

// setTimeout(() => {
//     for(i=0;i<text.length;i++){
//     document.getElementById("effect").innerHTML += text.charAt(i);}
// }, speed);

// const currentDate = new Date();
// const month = currentDate.toLocaleString('default', { month: 'long' }).toLocaleUpperCase();
// const day = currentDate.getDate();
// date.innerHTML = `${month}. ${day}`;

// new Typed('#effect',{
//   strings : ['LOADING OPPORTUNITIES'],
//   typeSpeed: 60,
//   startDelay: 600,
//   backSpeed: 20,
//   backDelay: 500,
//   loop: false,
//   showCursor: true,
//   cursorChar: "|",
//   attr: null,
//   contentType: 'html',
// });
// function getURL(url){
//   $("#social_iframe").attr('src',url)
// }




  
/*!
 * jQCloud Plugin for jQuery
 *
 * Version 1.0.4
 *
 * Copyright 2011, Luca Ongaro
 * Licensed under the MIT license.
 *
 * Date: 2013-05-09 18:54:22 +0200
*/

(function( $ ) {
  "use strict";
  $.fn.jQCloud = function(word_array, options) {
    // Reference to the container element
    var $this = this;
    // Namespace word ids to avoid collisions between multiple clouds
    var cloud_namespace = $this.attr('id') || Math.floor((Math.random()*1000000)).toString(36);

    // Default options value
    var default_options = {
      width: $this.width(),
      height: $this.height(),
      center: {
        x: ((options && options.width) ? options.width : $this.width()) / 2.0,
        y: ((options && options.height) ? options.height : $this.height()) / 2.0
      },
      delayedMode: word_array.length > 50,
      shape: false, // It defaults to elliptic shape
      encodeURI: true,
      removeOverflowing: true
    };

    options = $.extend(default_options, options || {});

    // Add the "jqcloud" class to the container for easy CSS styling, set container width/height
    $this.addClass("jqcloud").width(options.width).height(options.height);

    // Container's CSS position cannot be 'static'
    if ($this.css("position") === "static") {
      $this.css("position", "relative");
    }

    var drawWordCloud = function() {
      // Helper function to test if an element overlaps others
      var hitTest = function(elem, other_elems) {
        // Pairwise overlap detection
        var overlapping = function(a, b) {
          if (Math.abs(2.0*a.offsetLeft + a.offsetWidth - 2.0*b.offsetLeft - b.offsetWidth) < a.offsetWidth + b.offsetWidth) {
            if (Math.abs(2.0*a.offsetTop + a.offsetHeight - 2.0*b.offsetTop - b.offsetHeight) < a.offsetHeight + b.offsetHeight) {
              return true;
            }
          }
          return false;
        };
        var i = 0;
        // Check elements for overlap one by one, stop and return false as soon as an overlap is found
        for(i = 0; i < other_elems.length; i++) {
          if (overlapping(elem, other_elems[i])) {
            return true;
          }
        }
        return false;
      };

      // Make sure every weight is a number before sorting
      for (var i = 0; i < word_array.length; i++) {
        word_array[i].weight = parseFloat(word_array[i].weight, 10);
      }

      // Sort word_array from the word with the highest weight to the one with the lowest
      word_array.sort(function(a, b) { if (a.weight < b.weight) {return 1;} else if (a.weight > b.weight) {return -1;} else {return 0;} });

      var step = (options.shape === "rectangular") ? 18.0 : 2.0,
          already_placed_words = [],
          aspect_ratio = options.width / options.height;

      // Function to draw a word, by moving it in spiral until it finds a suitable empty place. This will be iterated on each word.
      var drawOneWord = function(index, word) {
        // Define the ID attribute of the span that will wrap the word, and the associated jQuery selector string
        var word_id = cloud_namespace + "_word_" + index,
            word_selector = "#" + word_id,
            angle = 6.28 * Math.random(),
            radius = 0.0,

            // Only used if option.shape == 'rectangular'
            steps_in_direction = 0.0,
            quarter_turns = 0.0,

            weight = 5,
            custom_class = "",
            inner_html = "",
            word_span;

        // Extend word html options with defaults
        word.html = $.extend(word.html, {id: word_id});

        // If custom class was specified, put them into a variable and remove it from html attrs, to avoid overwriting classes set by jQCloud
        if (word.html && word.html["class"]) {
          custom_class = word.html["class"];
          delete word.html["class"];
        }

        // Check if min(weight) > max(weight) otherwise use default
        if (word_array[0].weight > word_array[word_array.length - 1].weight) {
          // Linearly map the original weight to a discrete scale from 1 to 10
          weight = Math.round((word.weight - word_array[word_array.length - 1].weight) /
                              (word_array[0].weight - word_array[word_array.length - 1].weight) * 9.0) + 1;
        }
        word_span = $('<span>').attr(word.html).addClass('w' + weight + " " + custom_class);

        // Append link if word.url attribute was set
        if (word.link) {
          // If link is a string, then use it as the link href
          if (typeof word.link === "string") {
            word.link = {href: word.link};
          }

          // Extend link html options with defaults
          if ( options.encodeURI ) {
            word.link = $.extend(word.link, { href: encodeURI(word.link.href).replace(/'/g, "%27") });
          }

          inner_html = $('<a>').attr(word.link).text(word.text);
        } else {
          inner_html = word.text;
        }
        word_span.append(inner_html);

        // Bind handlers to words
        if (!!word.handlers) {
          for (var prop in word.handlers) {
            if (word.handlers.hasOwnProperty(prop) && typeof word.handlers[prop] === 'function') {
              $(word_span).bind(prop, word.handlers[prop]);
            }
          }
        }

        $this.append(word_span);

        var width = word_span.width(),
            height = word_span.height(),
            left = options.center.x - width / 2.0,
            top = options.center.y - height / 2.0;

        // Save a reference to the style property, for better performance
        var word_style = word_span[0].style;
        word_style.position = "absolute";
        word_style.left = left + "px";
        word_style.top = top + "px";

        while(hitTest(word_span[0], already_placed_words)) {
          // option shape is 'rectangular' so move the word in a rectangular spiral
          if (options.shape === "rectangular") {
            steps_in_direction++;
            if (steps_in_direction * step > (1 + Math.floor(quarter_turns / 2.0)) * step * ((quarter_turns % 4 % 2) === 0 ? 1 : aspect_ratio)) {
              steps_in_direction = 0.0;
              quarter_turns++;
            }
            switch(quarter_turns % 4) {
              case 1:
                left += step * aspect_ratio + Math.random() * 2.0;
                break;
              case 2:
                top -= step + Math.random() * 2.0;
                break;
              case 3:
                left -= step * aspect_ratio + Math.random() * 2.0;
                break;
              case 0:
                top += step + Math.random() * 2.0;
                break;
            }
          } else { // Default settings: elliptic spiral shape
            radius += step;
            angle += (index % 2 === 0 ? 1 : -1)*step;

            left = options.center.x - (width / 2.0) + (radius*Math.cos(angle)) * aspect_ratio;
            top = options.center.y + radius*Math.sin(angle) - (height / 2.0);
          }
          word_style.left = left + "px";
          word_style.top = top + "px";
        }

        // Don't render word if part of it would be outside the container
        if (options.removeOverflowing && (left < 0 || top < 0 || (left + width) > options.width || (top + height) > options.height)) {
          word_span.remove()
          return;
        }


        already_placed_words.push(word_span[0]);

        // Invoke callback if existing
        if ($.isFunction(word.afterWordRender)) {
          word.afterWordRender.call(word_span);
        }
      };

      var drawOneWordDelayed = function(index) {
        index = index || 0;
        if (!$this.is(':visible')) { // if not visible then do not attempt to draw
          setTimeout(function(){drawOneWordDelayed(index);},10);
          return;
        }
        if (index < word_array.length) {
          drawOneWord(index, word_array[index]);
          setTimeout(function(){drawOneWordDelayed(index + 1);}, 10);
        } else {
          if ($.isFunction(options.afterCloudRender)) {
            options.afterCloudRender.call($this);
          }
        }
      };

      // Iterate drawOneWord on every word. The way the iteration is done depends on the drawing mode (delayedMode is true or false)
      if (options.delayedMode){
        drawOneWordDelayed();
      }
      else {
        $.each(word_array, drawOneWord);
        if ($.isFunction(options.afterCloudRender)) {
          options.afterCloudRender.call($this);
        }
      }
    };

    // Delay execution so that the browser can render the page before the computatively intensive word cloud drawing
    setTimeout(function(){drawWordCloud();}, 10);
    return $this;
  };
})(jQuery);

var word_arrays = [
    {text: "San Francisco", weight: 20, html: {class: "category credit"}},
    {text: "Bangalore", weight: 10.5, html: {class: "category credit"}},
    {text: "London", weight: 9.4, html: {class: "category credit"}},
    {text: "Tokyo", weight: 8, html: {class: "category credit"}},
    {text: "New York City", weight: 7.5, html: {class: "category credit"}},
    {text: "Singapore", weight: 8, html: {class: "category card"}},
    {text: "Berlin", weight: 6.8, html: {class: "category card"}},
    {text: "Mumbai", weight: 6.1, html: {class: "category card"}},
    {text: "Toronto", weight: 6.1, html: {class: "category card"}},
    {text: "Sydney", weight: 3, html: {class: "category card"}},
    {text: "Dubai", weight: 30, html: {class: "category fees"}},
    {text: "Shanghai", weight: 2.8, html: {class: "category fees"}},
    {text: "Seoul", weight: 1.75, html: {class: "category fees"}},
    {text: "Paris", weight: 4, html: {class: "category fees"}},
    {text: "Sao Paulo", weight: 16, html: {class: "category fees"}},
    {text: "Amsterdam", weight: 70, html: {class: "category money"}},
    {text: "Hong Kong", weight: 1, html: {class: "category money"}},
    {text: "Stockholm", weight: 9, html: {class: "category money"}},
    {text: "Zurich", weight: 4, html: {class: "category money"}},
    {text: "Moscow", weight: 12, html: {class: "category money"}},
    {text: "Los Angeles", weight: 30, html: {class: "category withdraw"}},
    {text: "Helsinki", weight: 7, html: {class: "category withdraw"}},
    {text: "Barcelona", weight: 3, html: {class: "category withdraw"}},
    {text: "Vancouver", weight: 4, html: {class: "category withdraw"}},
    {text: "Copenhagen", weight: 9.1, html: {class: "category withdraw"}},
    {text: "Buenos Aires", weight: 9.1, html: {class: "category withdraw"}},
    {text: "Dublin", weight: 9.1, html: {class: "category withdraw"}},
    {text: "Prague", weight: 9.1, html: {class: "category withdraw"}},
    {text: "Auckland", weight: 9.1, html: {class: "category withdraw"}},
    {text: "Istanbul", weight: 9.1, html: {class: "category withdraw"}},
    {text: "Riyadh", weight: 9.1, html: {class: "category withdraw"}},
    {text: "Cape Town", weight: 9.1, html: {class: "category withdraw"}},
    {text: "Riyadh", weight: 9.1, html: {class: "category withdraw"}},
    {text: "Manama", weight: 9.1, html: {class: "category withdraw"}},


  ];


  $("#word-cloud").jQCloud(word_arrays, {
    // width: 500,
    height: 350,
    afterCloudRender: function() {
      $('#word-cloud > span').on('click', function(e){
        e.preventDefault();
        console.log(e.target.innerHTML);
        $('.detailed-tags').prepend("<div class='tag'>" + e.target.innerHTML + "</div>")
      });
    }
  });


  $(document).ready(function(){
    $('.floatingButton').on('click',
        function(e){
            e.preventDefault();
            $(this).toggleClass('open');
            if($(this).children('.fa').hasClass('fa-phone'))
            {
                $(this).children('.fa').removeClass('fa-phone');
                $(this).children('.fa').addClass('fa-close');
                $(this).removeClass('success-bg-gradient');
                $(this).addClass('danger-bg-gradient');
                $(this).addClass('animation');
                $(this).children('.fa').addClass('animation');

            } 
            else if ($(this).children('.fa').hasClass('fa-close')) 
            {
                $(this).children('.fa').removeClass('fa-close');
                $(this).children('.fa').addClass('fa-phone');
                $(this).addClass('success-bg-gradient');
                $(this).removeClass('danger-bg-gradient');
                $(this).removeClass('animation');
                $(this).children('.fa').removeClass('animation');

            }
            $('.floatingMenu').stop().slideToggle();
        }
    );
    $(this).on('click', function(e) {
      
        var container = $(".floatingButton");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) 
        {
            if(container.hasClass('open'))
            {
                container.removeClass('open');
            }
            if (container.children('.fa').hasClass('fa-close')) 
            {
                container.children('.fa').removeClass('fa-close');
                container.children('.fa').addClass('fa-phone');
            }
            $('.floatingMenu').hide();
        }
      
        // if the target of the click isn't the container and a descendant of the menu
        if(!container.is(e.target) && ($('.floatingMenu').has(e.target).length > 0)) 
        {
            $('.floatingButton').removeClass('open');
            $('.floatingMenu').stop().slideToggle();
        } 
    });
});

// function scrollingTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// } 
// window.onscroll = function() {
//   scrollingButton()
// };

// function scrollingButton() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     $(myBtn).removeClass("fade")
//   } else {
//     $(myBtn).addClass("fade")
//   }
// }


(function($) { "use strict";

	//Switch dark/light
		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		// var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, 0);
			return false;
		})
		
		
	});
	
})(jQuery); 


let options = {
  root: null,
  rootMargin: '0px',
  threshold: .25,
}
let callback = function(entries, observer){
  entries.forEach(entry=>{
      if(entry.isIntersecting && entry.target.classList.contains('lazy_image')){
          let imageUrl = entry.target.getAttribute('data-img');
          if(imageUrl){
              $(entry.target).fadeOut()
              setTimeout(() => {
                  entry.target.src = imageUrl
                  $(entry.target).fadeIn()
                  // $(entry.target).prev().fadeOut()
                  // console.log($(entry.target).prev())
              }, 0);
              // observer.unobserver(entry.target)
          }
      }
  })
}
let observer = new IntersectionObserver(callback, options);
document.querySelectorAll(".lazy_image").forEach(image=> observer.observe(image))


document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector(".main-header .navbar");
  let prevScrollPos = window.pageYOffset;
  function toggleNavbar() {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
            navbar.classList.add('visible-nav');
            navbar.classList.remove('hidden-nav');
      } else {
          navbar.classList.add('hidden-nav');
          navbar.classList.remove('visible-nav');
      }
      
      prevScrollPos = currentScrollPos;
  }

  // Initial call to toggleNavbar
  toggleNavbar();

  // Listen for scroll events
  window.addEventListener('scroll', toggleNavbar);
});