const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

const display = document.querySelector('p');
let count = 0 ; 
let interval; 
startBtn.addEventListener("click",()=>{
    interval = setInterval(()=>{
        count ++; 
        display.textContent = count; 
    },1000)
})


stopBtn.addEventListener("click",()=>{
    clearInterval(interval);
})