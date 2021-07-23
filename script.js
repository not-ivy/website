// jQuery hell
window.onload = () => {
  document.getElementById("bgm").volume = 0.2;
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

function slideToggle(elementId, type) {
  const togglables = ["home", "aboutme", "myprojects", "other", "music"]

  togglables.forEach(id => {
    if (id !== elementId) {
      $(`#${id}`).slideUp(1000, () => {})
    }
  })

  $(`#${elementId}`).slideToggle(1000, () => {} )
}