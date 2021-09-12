// captured variables 
const tryButton = document.querySelector('.tryButton');
const claimButton = document.querySelector('.claimButton');

// checks user input and test for email validation
function emailValidation() {
    const emailInput  = document.querySelector('.emailInput').value;
    const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    const errorIcon = document.querySelector('.emailIcon');
    const emailError = document.querySelector('.emailError');
    const emailInputBorder = document.querySelector('.emailInput');

    if (regx.test(emailInput)){

    } else {
        emailInputBorder.style.borderColor = "red"
        errorIcon.style.opacity = "1";
        emailError.style.opacity = "1";
    }
}

// checks user first name input if value is empty
function firstNameValidation() {
    const fnameInput = document.querySelector('.fname').value;
    const fnameIcon = document.querySelector('.fnameIcon');
    const fnameError = document.querySelector('.fnameError');
    const fnameBorder = document.querySelector('.fname');

    if ( fnameInput !== "" ){

    } else {
        fnameIcon.style.opacity = "1";
        fnameError.style.opacity = "1";
        fnameBorder.style.borderColor = "red";
    }
}

// checks user last name input if value is empty
function lastNameValidation() {
    const lnameInput = document.querySelector('.lname').value;
    const lnameIcon = document.querySelector('.lnameIcon');
    const lnameError = document.querySelector('.lnameError');
    const lnameBorder = document.querySelector('.lname');

    if ( lnameInput !== "" ){

    } else {
        lnameIcon.style.opacity = "1";
        lnameError.style.opacity = "1";
        lnameBorder.style.borderColor = "red";
    }
}

// checks if user pwd input value is empty
function pwdValidation() {
    const pwdInput = document.querySelector('.pwdInput').value;
    const pwdIcon = document.querySelector('.pwdIcon');
    const pwdError = document.querySelector('.pwdError');
    const pwdBorder = document.querySelector('.pwdInput');

    if ( pwdInput !== "" ){

    } else {
        pwdIcon.style.opacity = "1";
        pwdError.style.opacity = "1";
        pwdBorder.style.borderColor = "red";
    }
}

// waits for click to run function emailValidation()
claimButton.addEventListener('click', firstNameValidation);
claimButton.addEventListener('click', lastNameValidation);
claimButton.addEventListener('click', emailValidation);
claimButton.addEventListener('click', pwdValidation);
