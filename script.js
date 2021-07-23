window.onload = () => {
  setTimeout(() => {
    $("#title").slideDown(1000, () => {
      $("#title").animate(
        {
          top: 0,
        },
        1000
      );

      $("#navbar").fadeIn(1000, () => {
        $("#title").css("border-bottom", "none");
        setTimeout(() => {
          $(".placeholder").remove();
          $("#title").prependTo("#navbar");
          $("#title").css("position", "unset");
        }, 500);
      });
    });
  }, 500);
};
