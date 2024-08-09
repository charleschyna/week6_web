document.addEventListener('DOMContentLoaded', () => {
    // Load user data, setup event listeners, etc.
    checkAuth();
});

function checkAuth() {
    if (!localStorage.getItem('token')) {
        window.location.href = 'index.html';
    }
}

document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
});
