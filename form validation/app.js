const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const emailId = document.getElementById('email')
const phoneNumber = document.getElementById('phonenumber')
const form = document.getElementById('form');
const button = document.getElementById('submit-btn');
console.log(firstName,lastName,email,phoneNumber,form)

document.addEventListener('DOMContentLoaded',function(){

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let firstname = firstName.value;
        let lastname = lastName.value;
        let email = email.value; 
        let phonenumber = phoneNumber.value;
        
        console.log(firstname,lastname,email,phonenumber)


    
    })
    

})