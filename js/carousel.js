$(function () {
  let interval = window.setInterval(rotateSlides, 3000);
  let $carousel = $(".carousel");
  
  function rotateSlides() {
    let $firstSlide = $carousel.find('.carousel-item:first');
    let width = $firstSlide.outerWidth();

    $firstSlide.animate({marginLeft: -width}, 1000, function () {
      let $lastsSlide = $carousel.find('.carousel-item:last');
      $lastsSlide.after($firstSlide);
      $firstSlide.css({marginLeft: 0});
    })
  }

  $(".arrow-left").on("click", function () {
      window.clearInterval(interval);
      let $currentSlide = $carousel.find(".carousel-item:first");
      let width = $currentSlide.outerWidth();
      let $previousSlide = $carousel.find(".carousel-item:last");

      $previousSlide.css({marginLeft: -width});
      $currentSlide.before($previousSlide);
      $previousSlide.animate({marginLeft: 0}, 1000, function(){
        interval = window.setInterval(rotateSlides, 3000);
      })
    });

  $(".arrow-right").on("click", function () {
    window.clearInterval(interval);
    let $currentSlide = $carousel.find(".carousel-item:first");
    let width = $currentSlide.outerWidth();

    $currentSlide.animate({marginLeft: -width}, 1000, function () {
      let $lastSlide = $carousel.find(".carousel-item:last");
      $lastSlide.after($currentSlide);
      $currentSlide.css({marginLeft: 0});
      interval = window.setInterval(rotateSlides, 3000);
      })
    });

  });


