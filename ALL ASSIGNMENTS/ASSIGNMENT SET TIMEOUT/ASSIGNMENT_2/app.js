const buttonStart = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')
const buttonReset = document.querySelector('#reset')

let display = document.querySelector('#display');

let count = 0 ; 
buttonStart.addEventListener("click",()=>{
    count+=2;  // count = count + 2 
    display.textContent = count;
})

buttonStop.addEventListener("click",()=>{
    count-=3; // count = count - 3  
    display.textContent = count; 
})

buttonReset.addEventListener("click",()=>{
    count = 0 ; 
    display.textContent = count;
})