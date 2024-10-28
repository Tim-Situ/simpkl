document.addEventListener("DOMContentLoaded", function() {
    const approveButton = document.querySelector(".status.green");
    const rejectButton = document.querySelector(".status.red");
  
    approveButton.addEventListener("click", function() {
      approveButton.textContent = "Disetujui";
      approveButton.classList.remove("green");
      approveButton.disabled = true;
      rejectButton.style.display = "none";
    });
  
    rejectButton.addEventListener("click", function() {
      rejectButton.textContent = "Ditolak";
      rejectButton.classList.remove("red");
      rejectButton.disabled = true;
      approveButton.style.display = "none";
    });
  });
 
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
