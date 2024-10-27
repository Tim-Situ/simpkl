// Ambil elemen tombol dan form
const openFormButton = document.getElementById('openFormButton');
const closeFormButton = document.getElementById('closeFormButton');
const formContainer = document.getElementById('formContainer');

// Tambahkan event listener untuk membuka form
openFormButton.addEventListener('click', () => {
    formContainer.classList.add('active');
});

// Tambahkan event listener untuk menutup form
closeFormButton.addEventListener('click', () => {
    formContainer.classList.remove('active');
});
