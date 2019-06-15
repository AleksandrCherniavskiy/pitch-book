$(function(){
  $("button.feature-1__button_tab").on("click", function() {
    if( !$(this).hasClass("feature-1__button_tab-active" )) {
      $("button.feature-1__button_tab-active").removeClass("feature-1__button_tab-active");
      $(this).addClass("feature-1__button_tab-active");

      let title = $(this).text();
      $(".feature-1__title").text(title + ' title');
    }
  })
});
