window.onload = () => {
  setTimeout(() => {
    $("#title").slideDown( 1000, function() {
      $("#title").animate({
        top: 0,
      }, 1000)

      $("#navbar").fadeIn(1000, function() {
        $("#title").css("border-bottom", "none")
      })
    });
  }, 500)
}