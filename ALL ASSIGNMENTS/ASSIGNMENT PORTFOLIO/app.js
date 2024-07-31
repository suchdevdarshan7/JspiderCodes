const aboutMe = document.querySelector('.aboutMe-btn')

const aboutMeSection = document.querySelector('#section1');

aboutMe.addEventListener('click',function(){
    aboutMeSection.scrollIntoView({behavior:"smooth"});
})