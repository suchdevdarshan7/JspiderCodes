const resetBtn = document.querySelector('#submit-btn');
const submitBtn = document.querySelector('#reset-btn');

const form = document.querySelector('.form');

document.addEventListener("DOMContentLoaded",()=>{
    
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const username = document.querySelector('#username').value;
        const email =  document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const number = document.querySelector('#phoneNumber').value;
        
        if(username=='' || password=='' || email==''){
            alert("Please Fill the form!")
        }
        else{
            localStorage.setItem("username",username);
            localStorage.setItem("password",password)
            localStorage.setItem("email",email)
            localStorage.setItem("number",number)
            alert("Form submitted sucessfully")
            window.open('./logIn.html')
        }
    })
    
})