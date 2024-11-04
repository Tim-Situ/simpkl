$(document).ready(function () {
  $.getJSON("/assets/data/jurnal-siswa.json", function (data) {
    var tableBody = $("#jurnal-siswa");
    tableBody.empty();

    $.each(data.jurnal_siswa, function (index, student) {
      var row = $("<tr></tr>");
      row.append("<td>" + (index + 1) + "</td>");
      row.append("<td>" + student.nama + "</td>");
      row.append("<td>" + student.perusahaan + "</td>");
      row.append('<td><button id="btnJurnal" class="btn btn-orange"><img src="../assets/svg/eye-fill.svg" alt=""></button></td>');
      row.append('<td><button id="btnSetuju" class="btn btn-green">&#10004;</button><button id="btnTolak" class="btn btn-red">&#10008;</button></td>')
      row.append('<td><button id="btnCatatan" class="btn btn-orange"><img src="../assets/svg/chat-fill.svg" alt=""></button></td>');
      tableBody.append(row);
    });
  });

  let activeRow;

  $(document).on('click', '#btnSetuju', function() {
    var statusCell = $(this).closest('td'); 
    statusCell.html('<span>Disetujui</span>'); 
  });

  $(document).on('click', '#btnTolak', function() {
    var statusCell = $(this).closest('td'); 
    statusCell.html('<span>Ditolak</span>');
  });

  $(document).on('click', '#btnJurnal', function() {
    console.log("Tes")
    $("#jurnalSiswa").css("display", "block"); 
  });

  $(document).on('click', '#btnCatatan', function() {
    console.log("Tes")
    activeRow = $(this).closest('tr');
    $("#catatanGuru").css("display", "block"); 
  });

  $('#jurnalSiswa').on('click', '.btn.primary', function() {
    alert("Jurnal berhasil disimpan!");
    $('#jurnalSiswa').css("display", "none");
  });

  $('#catatanGuru').on('click', '.btn.primary', function() {
    var noteText = $('#catatanGuru textarea').val(); 
    if (noteText.trim()) { 
      activeRow.find('.saved-note').text(noteText); 
      $('#catatanGuru').css("display", "none");
    } else {
      alert("Masukkan catatan sebelum menyimpan!"); 
    }
  });

  $('#catatanGuru').on('click', '.btn.danger', function() {
    $('#catatanGuru').css("display", "none"); 
    $('#catatanGuru textarea').val('');
  });
}
)