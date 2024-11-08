$(document).ready(function () {
  $.getJSON("/assets/data/data-siswa.json", function (data) {
    var tableBody = $("#data-siswa");
    tableBody.empty();

    $.each(data.data_siswa, function (index, student) {
      var row = $("<tr></tr>");
      row.append("<td>" + (index + 1) + "</td>");
      row.append("<td>" + student.nis + " / " + student.nisn + "</td>");
      row.append("<td>" + student.nama + "</td>");
      row.append("<td>" + student.perusahaan + "</td>");
      row.append(
        '<td><button class="btn warning edit-score" data-nisn="' +
          student.nisn +
          '"><img src="/assets/svg/ic-edit.svg" alt="Edit" /></button></td>'
      );
      tableBody.append(row);
    });
  });

  $(document).on("click", ".edit-score", function () {
    var nisn = $(this).data("nisn");

    $.getJSON("/assets/data/data-nilai-akhir.json", function (data) {
      $.each(data.data_nilai_akhir, function (index, nilaiAkhir) {
        if (nilaiAkhir.nisn == nisn) {
          var tableBody = $("#nilai-siswa");
          tableBody.empty();

          $.each(nilaiAkhir.nilai_akhir, function (index, aspek) {
            $.each(aspek.sub_aspek, function (subIndex, subAspek) {
              var row = $("<tr></tr>");
              row.append("<td>" + (index + 1) + "</td>");
              row.append("<td>" + aspek.aspek + "</td>");
              row.append("<td>" + subAspek.nama + "</td>");
              row.append(
                "<td><input type='number' min='0' max='100' value='" +
                  subAspek.nilai +
                  "' /></td>"
              );
              row.append(
                "<td><textarea>" +
                  (subAspek.deskripsi || "Belum ada deskripsi") +
                  "</textarea></td>"
              );
              tableBody.append(row);
            });
          });
        }
      });
    });

    $(".modal").css("display", "block");
  });
});
