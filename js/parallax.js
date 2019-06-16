$(function () {
  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    let parallaxStart = 4300;
    let parallaxEnd = 4600;

    if (scrollTop >= parallaxStart && scrollTop <= parallaxEnd) {
      let backgroundPosition = ((parallaxStart - scrollTop) * 0.76).toFixed(2);

      $(".parallax").css({backgroundPositionY: backgroundPosition + "px"});
    }
  })
});
