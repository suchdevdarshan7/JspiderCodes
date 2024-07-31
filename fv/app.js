let DataOfEveryOne = JSON.parse(localStorage.getItem('UserData'));
let container = document.querySelector('.container');
let button = document.querySelector('button');

function renderContent(element) {
    const html = `
        <div class="box">
            <p><span>User1:</span> ${element.firstName} ${element.lastName}</p>
            <p><span>Gender:</span> ${element.gender}</p>
            <p><span>Email:</span> ${element.email}</p>
            <p><span>PhoneNumber:</span> ${element.phoneNumber}</p>
            <p><span>Password:</span> ${element.password}</p>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
}

button.addEventListener('click', function() {
    let username = document.querySelector('.username').value.trim().toLowerCase();
    let email = document.querySelector('.email').value.trim().toLowerCase();
    let password = document.querySelector('.password').value.trim().toLowerCase();

    if (username === '' && email === '' && password === '') {
        console.log('Working');
        return;
    } else {
        // Remove all content with class 'hidden'
        document.querySelectorAll('.box').forEach(box => {
            box.classList.add('hidden');
        });

        // Filter and update only the matching data
        DataOfEveryOne.forEach((element) => {
            if (element.firstName.toLowerCase() === username ||
                element.email.toLowerCase() === email ||
                element.password.toLowerCase() === password) {
                // Show the matched content
                renderContent(element);
            }
        });
    }
});

// Render existing content on page load
DataOfEveryOne.forEach(renderContent);
