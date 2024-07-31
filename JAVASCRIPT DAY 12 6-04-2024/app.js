'use strict';

let boxes = document.querySelectorAll('.box');

boxes.forEach((element)=>{
    element.addEventListener("click",()=>{
        remove();
        element.classList.toggle('active');
    })
})

function remove(){
    boxes.forEach(element=>{
        element.classList.remove('active');
    })
}