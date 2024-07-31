const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const passWord = document.querySelector('#passWord');
const DateOfBirth = document.querySelector('#dob');
const phoneNumber = document.querySelector('#phoneNumber');
const emailId = document.querySelector('#emailId');
const confirmPassword = document.querySelector('#confirm-password');
const form = document.querySelector('form');
const GenderMale = document.querySelector('.male');
const GenderFemale = document.querySelector('.female');
const registerButton = document.querySelector('#register');
let error = document.querySelector('.error');
let gender;
let inputTags = document.querySelectorAll('.input-tags');
let DataOfEveryOne = JSON.parse(localStorage.getItem('UserData')) || [];


console.log(DataOfEveryOne)
GenderMale.addEventListener('click', function () {
    gender = 'Male';
});

GenderFemale.addEventListener('click', function () {
    gender = 'Female';
});

function removeBorder(){
    inputTags.forEach((element)=>{
        element.classList.remove('error-box')
    })
}

function CheckPassword(password1, password2) {
    return password1 === password2;
}

function validatePassword(pass) {
    if (pass === '') {
        return false;
    } else {
        let passwordToString = String(pass);
        if (passwordToString.length < 3) {
            return false;
        }
    }
    return true;
}

function containsNumbers(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}

function DuplicatesExists(obj) {
    return DataOfEveryOne.some(index =>
        ((index.email === obj.email || index.phoneNumber === obj.phoneNumber) && index.dob === obj.dob)
    );
}

function isValid(email) {
    let tempEmail = String(email);

    for (let i = 0; i < tempEmail.length; i++) {
        if (tempEmail.charAt(i) === '@') {
            return true;
        }
    }
    return false;
}

function isValidPhoneNumber(phoneNumber) {
    for (let i = 0; i < phoneNumber.length; i++) {
        const digit = phoneNumber.charCodeAt(i);
        if (digit < 48 || digit > 57) {
            return false;
        }
    }
    return true;
}

document.addEventListener('DOMContentLoaded', () => {

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let password1 = passWord.value;
        let password2 = confirmPassword.value;
        let firstname = firstName.value.trim();
        let lastname = lastName.value.trim();
        let dob = DateOfBirth.value;
        let email = emailId.value;
        let submittedGender = gender;
        let phonenumber = phoneNumber.value;

        if (firstname === '' || lastname === '' || dob === '' || email === '' || submittedGender === undefined) {
            error.classList.remove('hidden');
            error.textContent = "Please fill the form";
            return;
        }

        if (containsNumbers(firstname) || containsNumbers(lastname)) {
            removeBorder();
            firstName.classList.add('error-box');
            lastName.classList.add('error-box');
            error.textContent = "Firstname and lastname must not contain numbers";
            return;
        }

        if (!isValid(email)) {
            removeBorder();
            emailId.classList.add('error-box');
            error.textContent = "Please enter a valid email";
            return;
        }

        if (!isValidPhoneNumber(phonenumber)) {
            removeBorder();
            phoneNumber.classList.add('error-box');
            error.textContent = "Phone number must only contain digits";
            return;
        }
        if (password1 !== '' && password2 !== '') {
            removeBorder();
            console.log(password1)
            console.log(password2)
            passWord.classList.add('error-box')
            confirmPassword.classList.add('error-box')
            if (CheckPassword(password1, password2) && validatePassword(password1) && validatePassword(password2)) {
                let dataElement = {
                    firstName: firstname,
                    lastName: lastname,
                    password: password1,
                    DateOfBirth: dob,
                    email: email,
                    gender: gender,
                    phoneNumber: phonenumber,
                };
                removeBorder()
                console.log(DuplicatesExists(dataElement))
                if (DuplicatesExists(dataElement)) {
                    
                    error.classList.remove('hidden');
                    error.textContent = "User Exists";
                } else {
                    DataOfEveryOne.push(dataElement);
                    localStorage.setItem('UserData', JSON.stringify(DataOfEveryOne));
                    console.log(DataOfEveryOne);
                    removeBorder();
                    error.style.display = 'none';
                    alert("Form submitted successfully!");
                    window.open('Login/index.html');
                    form.reset();
                }
            } else {
                error.textContent = "Passwords you have entered do not match or are not valid.";
            }
        } else {
            error.textContent = "Fill the form first";
        }
    });
});
