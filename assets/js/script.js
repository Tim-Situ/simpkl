$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $("aside").toggleClass("open");
  });

  $(".close-menu").click(function () {
    $("aside").toggleClass("open");
  });

  $(".darkmode-toggle").on("click", function () {
    $("body").toggleClass("dark-mode");
  });

  $(".close").click(function () {
    $(".modal").css("display", "none");
  });
});
