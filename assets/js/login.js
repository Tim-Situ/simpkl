$(document).ready(function() {
    const $loginForm = $('form');
    const $usernameInput = $('#username');
    const $passwordInput = $('#password');
    
    // Tambahkan elemen error di bawah input
    $usernameInput.after('<div class="error-text username-error"></div>');
    $passwordInput.after('<div class="error-text password-error"></div>');

    $loginForm.on('submit', function(e) {
        e.preventDefault();
        resetErrors();

        const username = $usernameInput.val().trim();
        const password = $passwordInput.val().trim();

        // Validasi input kosong
        if (!username || !password) {
            if (!username) showError($usernameInput, 'Username tidak boleh kosong');
            if (!password) showError($passwordInput, 'Password tidak boleh kosong');
            return;
        }

        // Panggil data JSON
        $.getJSON('./assets/data/akun.json', function(userData) {
            processLogin(userData, username, password);
        }).fail(function() {
            alert('Error loading user data');
        });
    });

    function processLogin(userData, username, password) {
        const user = userData.akun.find(u => u.username === username && u.password === password);

        if (!user) {
            showError($usernameInput, 'Username atau password salah');
            return;
        }

        // Login berhasil
        sessionStorage.setItem('userLoggedIn', JSON.stringify({ username: user.username, role: user.role }));
        $loginForm.fadeOut(300, function() {
            showLoadingScreen(user);
            setTimeout(() => redirectToDashboard(user.role), 2000);
        });
    }

    function showError($input, message) {
        $input.addClass('error');
        $input.next('.error-text').text(message).slideDown();
    }

    function resetErrors() {
        $('.error-text').slideUp().prev().removeClass('error');
    }

    function showLoadingScreen(user) {
        const loadingHTML = `
            <div class="login-success">
                <div class="success-icon">✓</div>
                <h3>Login Berhasil!</h3>
                <p>Selamat datang, ${user.username}</p>
                <p class="role-badge ${user.role}">${user.role.toUpperCase()}</p>
                <div class="loading-bar"></div>
                <p>Mengarahkan ke Dashboard ${user.role}...</p>
            </div>
        `;
        $('.login-section').html(loadingHTML).hide().fadeIn(300);
    }

    function redirectToDashboard(role) {
        let dashboardUrl;
        switch(role.toLowerCase()) {
            case 'admin':
                dashboardUrl = '/index.html';
                break;
            case 'guru':
                dashboardUrl = '/pembimbing/index.html';
                break;
        }
        window.location.href = dashboardUrl;
    }
});
