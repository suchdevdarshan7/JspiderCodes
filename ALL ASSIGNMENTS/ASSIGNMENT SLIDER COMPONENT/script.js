let btnOne = document.querySelector('.btn--1');
let btnTwo = document.querySelector('.btn--2');
let slider = document.querySelector('.slider');
let values = ['rhino.jpeg','lion.jpeg','tiger.jpeg','giraffe.jpeg','elephant.jpeg'];
let i = 0;

    function add(){
        i = (i + 1) % values.length; 
        slider.src = values[i];
    }

    function subtract(){
        i = (i - 1 + values.length) % values.length; 
        slider.src = values[i];
    }

    
    btnOne.addEventListener('click', add)
    btnTwo.addEventListener('click', subtract);
    
//     function change(){
//         setInterval(()=>{
//             i = (i + 1) % values.length; 
//             slider.src = values[i];
//         },3000)
// }

// change();

