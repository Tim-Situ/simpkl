$(document).ready(function () {
  $("#edit-score").click(function () {
    $(".modal").css("display", "block");
  });

  $(".close").click(function () {
    $(".modal").css("display", "none");
  });
});
