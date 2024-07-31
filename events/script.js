let heading = document.querySelector('#heading');
let button =  document.querySelector('a');
let value = true; 


function cssToggle(){
    heading.classList.toggle('demo');

    if(value){
        button.textContent = "REMOVE CSS";
        value = false; 
    }
    else{
        button.textContent = "ADD CSS";
        value = true;
    }
}