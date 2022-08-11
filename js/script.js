$(document).ready(function () {
  $(".works-main a").attr("data-fancybox", "gallery");

  // projects slick slider
  $(".project-slide").slick({
    slidesToShow: 3,
    autoplay: true,
    arrows: true,
    speed: 400,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToScroll: 1,
    dots: false,
    prevArrow:
      '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.68 12" fill="#2e3134" width="17" height="12"><path d="M14.68,5.19H1V6.82H14.68Z"></path><path d="M7.15,1.15,6,0,0,6,1.15,7.15Z"></path> <path d="M7.15,10.85l-6-6L0,6l6,6Z"></path></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14.72" fill="#2e3134" width="17" height="12"> <path d="M0 6.36H16.72V8.36H0z"></path><path transform="rotate(-45 13.615 4.38)" d="M12.62 -0.82H14.61V9.59H12.62z"></path><path transform="rotate(-45 13.61 10.333)" d="M8.41 9.34H18.82V11.33H8.41z"></path></svg></button>',

    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Slider text parallax

  let rellax = new Rellax(".rellax");

  // scticy class on scroll
  window.addEventListener("scroll", function () {
    let header = document.querySelector(".header-bottom");
    let headHeight = $(".header-bottom").outerHeight();
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  //burger click function

  $(function () {
    $(".burger").on("click", function () {
      $(".mobile-nav").toggleClass("mobile-active");
      $(".burger").toggleClass("toggle");
    });
  });

  window.addEventListener("click", function (e) {
    if (
      !document.querySelector(".burger").contains(e.target) &&
      !document.querySelector(".mobile-nav").contains(e.target)
    ) {
      $(".burger").removeClass("toggle");
      $(".mobile-nav").removeClass("mobile-active");
    }
  });
  //referances page background
  if (window.location.href.toLowerCase().indexOf("referances") != -1) {
    $(".static-main").css("background", "#30373c0d");
  }

  //cloud animation
  let lastScrollTop2 = 0;
  let wScroll2 = 1;
  let elementfromTop = $(".services").offset().top;
  $(window).scroll(function (event) {
    let st2 = $(this).scrollTop();
    if (st2 > elementfromTop / 2) {
      if (st2 > lastScrollTop2) {
        wScroll2 -= 1;
      } else {
        wScroll2 += 1;
      }
      $(".services .image-section img").css(
        "transform",
        "translateX(" + wScroll2 + "px)"
      );
      lastScrollTop2 = st2;
    }
  });
});
