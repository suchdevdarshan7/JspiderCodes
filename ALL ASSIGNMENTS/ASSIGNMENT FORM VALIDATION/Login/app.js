document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('button');
    loginBtn.addEventListener('click', function() {
        const usernameInput = document.querySelector('input[type="email"]');
        const passwordInput = document.querySelector('input[type="password"]');
        const errorDiv = document.querySelector('.error');
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;
        const storedUserData = JSON.parse(localStorage.getItem('UserData'));
        const matchedUser = storedUserData.find(user => user.email === enteredUsername && user.password === enteredPassword);

        if (matchedUser) {
            // alert('Login successful!');
            window.open('Data/index.html');
            
        } else {
            errorDiv.textContent = 'Invalid username or password. Please try again.';
        }
    });
});
