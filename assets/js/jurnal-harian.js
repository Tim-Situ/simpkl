$(document).ready(function () {
  $.getJSON("/assets/data/jurnal-siswa.json", function (data) {
    var tableBody = $("#jurnal-siswa");
    tableBody.empty();

    $.each(data.jurnal_siswa, function (index, student) {
      var row = $("<tr></tr>");
      row.append("<td>" + (index + 1) + "</td>");
      row.append("<td>" + student.nama + "</td>");
      row.append("<td>" + student.perusahaan + "</td>");
      row.append('<td><button class="btn jurnal-harian"><img src="assets/svg/eye-fill.svg" alt=""></button></td>');
      row.append('<td><button class="btn status-green">&#10004;</button><button class="btn status-red">&#10008;</button></td>')
      row.append('<td><button class="btn catatan-anda"><img src="assets/svg/chat-fill.svg" alt=""></button></td>');
      tableBody.append(row);
    });
  });
}
)
