'use strict';

document.addEventListener("DOMContentLoaded",()=>{
    const form = document.querySelector('.form');
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;
        
        let checkPasswordDB = localStorage.getItem(password);
        console.log(username);
        console.log(password)
        console.log(checkUsernameDB)
        console.log(checkPasswordDB)
        if(username===checkUsernameDB && checkPasswordDB===password){
            alert("Crenditials do not match ");
        }
        else{
            alert("Logged in successfully! ")
            window.open('./home.html');
        }
        
    })

})

