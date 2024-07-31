let userame = document.querySelector('#username')
let pass = document.querySelector('#password')
let button = document.querySelector('#show_pwd');
let value = true; 
button.addEventListener("click",()=>{
    if(value){
        pass.type = 'text';
        value = false; 
    }
    else{
        pass.type = 'password';
        value = true; 
    }
})