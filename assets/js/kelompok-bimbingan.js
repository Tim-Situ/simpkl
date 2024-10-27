$(document).ready(function() {
    const formInput = $('#formInput');
    const formTitle = $('#formTitle');
    const addButton = $('#addButton');
    const closeFormButton = $('#closeFormButton');

    let dataKelompokBimbingan = [];

    // Fungsi untuk mengambil data dari JSON
    function loadData() {
        $.getJSON('../assets/data/kelompok-bimbingan.json', function(data) {
            dataKelompokBimbingan = data.dataKelompokBimbingan;
            renderTable();
        }).fail(function() {
            console.error("Request Failed: " + err);
        });
    }

    // Fungsi untuk merender tabel
    function renderTable() {
        const tableBody = $('table tbody');
        tableBody.empty();
        dataKelompokBimbingan.forEach((item, index) => {
            const row = `<tr>
                <td>${index + 1}</td>
                <td>${item.nis} / ${item.nisn}</td>
                <td>${item.nama}</td>
                <td>${item.pembimbing}</td>
                <td>${item.perusahaan}</td>
                <td>${item.status ? 'Aktif' : 'Nonaktif'}</td>
                <td>
                    <button class="btn btn-blue">
                        <img src="/assets/svg/ic-power.svg" alt="Aktif / Non-Aktifkan" />
                    </button>
                    <button class="btn btn-orange editButton" data-index="${index}">
                        <img src="/assets/svg/ic-edit.svg" alt="Edit" />
                    </button>
                    <button class="btn btn-red" id="deleteButton">
                        <img src="/assets/svg/ic-delete.svg" alt="Hapus" />
                    </button>
                </td>
            </tr>`;
            tableBody.append(row);
        });

        $('#dataTable').DataTable();
    }

    // Event listener for Add button
    addButton.on('click', () => {
        formTitle.text('Tambah Kelompok Bimbingan');
        formInput.addClass('show');
    });

    // Event delegation for Edit button
    $(document).on('click', '.editButton', function() {
        const index = $(this).data('index');
        const item = dataKelompokBimbingan[index];
        formTitle.text('Edit Kelompok Bimbingan');
        formInput.addClass('show');
        // Isi form dengan data yang akan diedit
        $('#siswa').val(item.nis);
        $('#pembimbing').val(item.pembimbing);
        $('#perusahaan').val(item.perusahaan);
    });

    // Event listener for Close button
    closeFormButton.on('click', () => {
        formInput.removeClass('show');
    });

    // Load data saat halaman dimuat
    loadData();

    $(document).on('click', '#deleteButton', function() {
        console.log("Tombol delete diklik");
        $(".modal").css("display", "block"); // Pastikan modal ditampilkan
    });
});
