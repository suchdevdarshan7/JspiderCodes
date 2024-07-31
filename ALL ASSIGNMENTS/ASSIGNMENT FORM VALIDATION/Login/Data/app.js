let DataOfEveryOne = JSON.parse(localStorage.getItem('UserData'));
let container = document.querySelector('.container');
let errorDivision = document.querySelector('.error');
let inputs = document.querySelectorAll('input');

function renderContent(user) {
    const html = `
        <div class="box">
            <p><span>User1:</span> ${user.firstName} ${user.lastName}</p>
            <p><span>Gender:</span> ${user.gender}</p>
            <p><span>Email:</span> ${user.email}</p>
            <p><span>PhoneNumber:</span> ${user.phoneNumber}</p>
            <p><span>Password:</span> ${user.password}</p>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
}

function renderUsers(users) {
    container.innerHTML = "";
    if (users.length === 0) {
        errorDivision.textContent = 'No matching users found';
        return;
    }
    errorDivision.textContent = '';
    users.forEach(renderContent);
}

function filterUsers() {
    let username = document.querySelector('.username').value.trim().toLowerCase();
    let email = document.querySelector('.email').value.trim().toLowerCase();
    let password = document.querySelector('.password').value.trim().toLowerCase();

    let filteredUsers = DataOfEveryOne.filter(user => {
        let fullName = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;
        return fullName.includes(username) &&
            user.email.toLowerCase().includes(email) &&
            user.phoneNumber.toLowerCase().includes(password);
    });

    renderUsers(filteredUsers);
}

inputs.forEach(input => {
    input.addEventListener('input', filterUsers);
});

renderUsers(DataOfEveryOne);
