//! Variables 
let large_image = document.querySelector('.large-image')
let imageDesc = document.querySelector('.image-desc');
let animals = ["tiger","lion","giraffe","elephant","rhino"];
let image = document.querySelectorAll('.images');

image.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        large_image.src = element.src;
        imageDesc.textContent = animals[index];
    })

})