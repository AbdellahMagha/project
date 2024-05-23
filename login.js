document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;
    var errorMessage = document.getElementById('loginErrorMessage');
    var successMessage = document.getElementById('loginSuccessMessage');

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    } else {
        successMessage.textContent = 'Login successful!';
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';

        setTimeout(function() {
            window.location.href = 'file:///C:/Users/azertyuiop/Desktop/our%20planet/project-home.html';
        }, 2000); 
    }
});
