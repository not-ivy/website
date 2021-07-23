// jQuery hell
window.onload = () => {
  setTimeout(() => {
    $("#title").slideDown(1000, () => {
      $("#title").animate(
        {
          top: 0,
        },
        1000
      );
      $("html").css("backdrop-filter", "brightness(50%)");

      $("#navbar").fadeIn(1000, () => {
        $("#footer").fadeIn(1000, () => {
          // $("#title").css("border-bottom", "none");
          $(".placeholder").remove();
          $("#title").prependTo("#navbar");
          $("#title").css("position", "unset");
        });
      });
    });
  }, 500);
};
