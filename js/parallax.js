$(function () {
  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let parallaxStart = 4300;
    let parallaxEnd = 4600;
    let coefficientParallax = 0.76;

    if (scrollTop >= parallaxStart && scrollTop <= parallaxEnd) {
      let backgroundPosition = ((parallaxStart - scrollTop) * coefficientParallax).toFixed(2);

      $(".parallax").css({backgroundPositionY: backgroundPosition + "px"});
    }
  })
});
