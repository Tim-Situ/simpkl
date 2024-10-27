$(document).ready(function () {
  loadAttendance();
});

function loadAttendance() {
  $.getJSON("../assets/data/datakehadiran.json", function (data) {
    console.log(data);
    if (data && data.dataKehadiran) {
      const test = JSON.stringify(data.dataKehadiran);
      populateTable(data.dataKehadiran);
      console.log(data);
    } else {
      alert("No attendance data found in the JSON file.");
    }
  }).fail(function () {
    alert("Failed to load the attendance data. Please check the file path.");
  });
}

function populateTable(kehadiranData) {
  var tableBody = $("#attendanceTable tbody");
  tableBody.empty(); // Kosongkan tabel sebelum menambahkan data baru
    console.log(kehadiranData)
  kehadiranData.forEach(function (item, index) {
    var row = $("<tr></tr>");

    // Kolom No
    var cellNo = $("<td></td>").text(item.no);
    row.append(cellNo);

    // Kolom NIS/NISN
    var cellNis = $("<td></td>").text(item.nis_nisn);
    row.append(cellNis);

    // Kolom Nama
    var cellNama = $("<td></td>").text(item.nama);
    row.append(cellNama);

    // Kolom Kehadiran dengan radio button
    ["hadir", "izin", "sakit", "alfa"].forEach(function (status) {
      var cell = $("<td></td>");
      var radio = $("<input>")
        .attr("type", "radio")
        .attr("name", `kehadiran[${index + 1}]`) // Buat unique name untuk setiap baris
        .attr("value", status)
        .prop("checked", item.kehadiran[status]); // Set radio button checked berdasarkan data JSON

      cell.append(radio);
      row.append(cell);
    });

    tableBody.append(row); // Tambahkan baris ke tabel
  });
}
