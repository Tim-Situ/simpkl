const formInput = document.getElementById('formInput');
const formTitle = document.getElementById('formTitle');
const addButton = document.getElementById('addButton');
const editButton = document.getElementById('editButton');
const closeFormButton = document.getElementById('closeFormButton');

// Event listener for Add button
addButton.addEventListener('click', () => {
    formTitle.textContent = 'Tambah Kelompok Bimbingan';
    formInput.classList.add('show');
    console.log("Tes")
});

// Event listener for Edit button
editButton.addEventListener('click', () => {
    formTitle.textContent = 'Edit Kelompok Bimbingan';
    formInput.classList.add('show');
});

// Event listener for Close button
closeFormButton.addEventListener('click', () => {
    formInput.classList.remove('show');
});