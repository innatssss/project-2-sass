// cards information
$(document).ready(function () {
  $(".card").hover(
    function () {
      $(this).find(".main-text").fadeIn();
      $(this).find(".h3-header").fadeOut();
    },
    function () {
      $(this).find(".main-text").fadeOut();
      $(this).find(".h3-header").fadeIn();
    }
  );
});
