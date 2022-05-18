const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const thePassword = document.getElementById('thePassword');
const confirmPassword = document.getElementById('confirmPassword ');
var btn_click = document.getElementById('click')
var cards = document.getElementById('card')
btn_click.onclick =function(){
    if(cards.classList.contains('card')){
    cards.classList.add('hide')
    cards.classList.remove('card')
    }
    else{ 
        cards.classList.add('card')
        cards.classList.remove('hide')
    }



}

form.addEventListener('submit',(e)=> {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue= phoneNumber.value.trim();
    const thePasswordValue = thePassword.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
     
    if(usernameValue === ' '){
        setErrorFor(username, 'User name cannot be blank')
    }else{
        setSuccessFor(username);
    }

    if(phoneNumberValue === ' '){
        setErrorFor(phoneNumber, 'Phone number cannot be blank');
    }else if(!isPhone(phoneNumberValue)){
        setErrorFor(phoneNumber, 'Phone number is not valid');
    } else{
        setSuccessFor(phoneNumber);
    }
    if(emailValue === ' '){
        setErrorFor(email, 'Email cannot be blank');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else{
        setSuccessFor(email);
    }

    if(thePasswordValue === ' '){
        setErrorFor(thePassword,'password cannot be blank')
    }else{
        setSuccessFor(thePassword);
    }

    if(confirmPasswordValue === ' '){
        setErrorFor(confirmPasswordValue, 'password cannot be blank')
    }else if(thePasswordValue !== confirmPasswordValue){
        setErrorFor(confirmPassword, 'Passwords does not match');
    }else {
        setSuccessFor(confirmPassword);
    }
}

function setErrorFor(input, message){
    const row = input.parentElement;
    const small = row.querySelector('small');

    small.innerText = message;
    row.className ='row Error'
}

function setSuccessFor(input){
    const row = input.parentElement;
    row.className ='row Success'
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
function isPhone(phoneNumber) {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber);
};

function thisPassword(){
    let first = document.getElementById("thePassword");
    let second = document.getElementById("hide1");
    let third = document.getElementById("hide2");
    
    if(first.type === "password"){
        first.type = "text";
        second.style.display = "block";
        third.style.display = "none";
    }else{
        first.type = "password";
        second.style.display = "none";
        third.style.display = "block";
    }
}

function checkPassword(){
    let firstOne = document.getElementById("confirmPassword");
    let secondOne = document.getElementById("hide3");
    let thirdOne = document.getElementById("hide4");
    
    if(firstOne.type === "password"){
        firstOne.type = "text";
        secondOne.style.display = "block";
        thirdOne.style.display = "none";
    }else{
        firstOne.type = "password";
        secondOne.style.display = "none";
        thirdOne.style.display = "block";
    }
}
