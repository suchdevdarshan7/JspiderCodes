let form = document.getElementById("form");
console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value; 
    let confirmPassword = document.getElementById("pwd1").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    let errorMessage = document.getElementById("errorMessage");
    let successMessage = document.getElementById("successMessage");
    let date = document.getElementById("date").value;
    let gender = document.getElementById("gender").value;
    let user = JSON.parse(localStorage.getItem("user")) || [];
  
    successMessage.innerText = "";
    errorMessage.innerText = "";

    console.log(firstName, lastName, password, confirmPassword, number, email);

    if (firstName == "" || lastName == "" || password == "" ||  confirmPassword == "" || number == "" || email == "") {
        alert("Fill the Complete Form");
        return;
    }
    
    if (confirmPassword !== "" && password !== "") {
        if (confirmPassword !== password) {
            error3.innerText = "Not matching with password";
            error3.style.display = "block";
            return;
        } else {
            error3.innerText = "";
        }
    }
    if (email === "" || !email.includes("@")) {
        error2.innerText = "email must be email@gmail.com";
        error2.style.display = "block";
        return;
    } 
    if (number !== "") {
        if (number.length !== 10) {
            error2.innerText = "Number must be of 10 characters";
            error2.style.display = "block";
            return;
        } else {
            error2.innerText = "";
        }
    }
    if (firstName !== "") {
        if (firstName.match(/[0-9]/)) {
            error1.innerText = "Name must be in alphabets only";
            error1.style.display = "block";
            return;
        } else {
            error1.innerText = "";
        }
    } 
    
    let userExistsByNumber = user.some((existingUser) => existingUser.number === number);
    let userExistsByEmail = user.some((existingUser) => existingUser.email === email);
        
    if (userExistsByNumber || userExistsByEmail) {
        errorMessage.innerText = "Phone number or Email already exists";
        errorMessage.style.display = "block";
        return;
    }

    let obj = {
        firstName: firstName,
        lastName: lastName,
        number: number,
        email: email,
        password: password, 
        confirmPassword: confirmPassword, 
        date: date,
        gender: gender,
    };

    user.push(obj);
    localStorage.setItem("user", JSON.stringify(user)); 
    console.log(user);
    window.open('./index2.html');

    successMessage.innerText = " Registered Successfully";
    successMessage.style.display = "block";
});
