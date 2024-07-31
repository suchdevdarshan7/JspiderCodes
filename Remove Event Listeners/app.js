//! create html using only javascript 


let div = document.createElement('div');
let body = document.body; 
let form = document.createElement('form')
let username = document.createElement("input")
let password= document.createElement("input")

password.type = 'password';

let btn = document.createElement('button');

btn.addEventListener('click',function(e){

    e.preventDefault()
    password.type = 'text';
})
btn.textContent = "Login"

body.prepend(div);
div.append(form);
form.append(username);
form.append(password);
form.append(btn);


//! remove event listeners :


