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
          $(".placeholder").remove();
          $("#title").prependTo("#navbar");
          $("#title").css("position", "unset");
        });
      });
    });
  }, 500);
};

function slideToggle(...elementId) {
  const togglables = ["home", "aboutme", "myprojects", "other", "music", "discord"]

  togglables.forEach(id => {
    if (id !== elementId) {
      $(`#${id}`).slideUp(1000, () => {})
    }
  })

  let ids = [];

  elementId.forEach((id) => {
    ids.push(`#${id}`)
  })

  $(ids.join(",")).slideToggle(1000, () => {} )
}