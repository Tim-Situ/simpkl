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

  $("#edit-score").click(function () {
    $(".modal").css("display", "block");
  });

  $(".close").click(function () {
    $(".modal").css("display", "none");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const approveButton = document.querySelector(".status.green");
  const rejectButton = document.querySelector(".status.red");
  const noteButton = document.getElementById("noteButton");
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");
  const saveNoteButton = document.getElementById("saveNote");
  const noteInput = document.getElementById("noteInput");

  let savedNote = ""; 

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

  noteButton.addEventListener("click", function() {
    modal.style.display = "block";
    noteInput.value = savedNote; 
  });

  closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });

  saveNoteButton.addEventListener("click", function() {
    savedNote = noteInput.value; 
    modal.style.display = "none"; 
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
