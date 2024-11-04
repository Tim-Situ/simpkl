$(document).ready(function () {
  $.getJSON("/assets/data/jurnal-siswa.json", function (data) {
    var tableBody = $("#jurnal-siswa");
    tableBody.empty();

    $.each(data.jurnal_siswa, function (index, student) {
      var row = $("<tr></tr>");
      row.append("<td>" + (index + 1) + "</td>");
      row.append("<td>" + student.nama + "</td>");
      row.append("<td>" + student.perusahaan + "</td>");
      row.append('<td><button class="btn btn-orange"><img src="../assets/svg/eye-fill.svg" alt=""></button></td>');
      row.append('<td><button id="btnSetuju" class="btn btn-green">&#10004;</button><button id="btnTolak" class="btn btn-red">&#10008;</button></td>')
      row.append('<td><button id="btnCatatan" class="btn btn-orange"><img src="../assets/svg/chat-fill.svg" alt=""></button></td>');
      tableBody.append(row);
    });
  });

  $(document).on('click', '#btnCatatan', function() {
    console.log("Tes")
    $(".modal").css("display", "block"); 
  });
}
)