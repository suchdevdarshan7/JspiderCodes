const container = document.querySelector('.container');
const OtpBtn = document.querySelector('#getOtp');
const time = document.querySelector('#time');

let count = 60;
let result;
let second;

OtpBtn.addEventListener("click", function () {
    result = setInterval(() => {
        
        
        count--;
        if(count>=55){
            container.classList.add('activer');
        }
        else {
            container.classList.remove('activer');
        }
        OtpBtn.classList.remove('active');
        OtpBtn.classList.add('disable');
        OtpBtn.textContent = "OTP sent"
        time.style.display = "block";
        time.innerHTML = count;

        if (count === 0) {
            count = 60;
            clearInterval(result);
            OtpBtn.classList.remove('disable');
            OtpBtn.classList.add('active');
            time.style.display = "none";
            OtpBtn.textContent = "Send OTP";
            container.classList.remove('activer');

        }

    }, 1000)
})