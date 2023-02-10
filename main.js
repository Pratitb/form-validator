const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
// const inputElementArr = [username, email, password, password2];

//form submit listener
form.addEventListener('submit', function(event){
    console.log('submit')
    event.preventDefault()
    checkLength(username, 4, 16)
    checkEmail(email)
    checkLength(password, 8, 16)
    checkPasswords(password, password2)
})
//username keyup
username.addEventListener('keyup', function(){
    checkLength(username, 4, 16)
})
//email keyup
email.addEventListener('keyup', function(){
    checkEmail(email)
})
//password keyup
password.addEventListener('keyup', function(){
    checkLength(password, 8, 16)

})
//password2 keyup
password2.addEventListener('keyup', function(){
    checkPasswords(password, password2)
    checkLength(password, 8, 16)
})

//error function
function showError(input, message){
    const formControl = input.parentElement;
    formControl.classList.remove('success')
    formControl.classList.add('error')
    const userError = formControl.querySelector('.error_message')
    userError.innerText = message
}

//success function
function showSuccess(input){
    const formControl = input.parentElement
    formControl.classList.remove('error')
    formControl.classList.add('success')
}

//check all inputs for empty on submit
/* function checkInput(inputElementArr){
    inputElementArr.forEach(function(input){
        if(input.value.trim() == ''){
            showError(input, `${input.id} cannot be empty`)
        }
        else{
            showSuccess(input)
        }
    })
} */

//check input length on submit
function checkLength(input, min, max){
    if(input.value == ''){
        showError(input, `${input.id} cannot be empty`)
    }
    else if(input.value.length<min){
        showError(input, `${input.id} must be at least ${min} characters`)
    }
    else if(input.value.length>max){
        showError(input, `${input.id} must be less than ${max} characters`)
    }
    else{
        showSuccess(input)
    }
}

//check username on keyup
/* function checkUsername(input){
    if(input.value == ''){
        showError(input, `${input.id} cannot be empty`)
    }
    else if(input.value.length<4){
        showError(input, `${input.id} must be atleast 4 characters`)
    }
    else{
        showSuccess(input)

    }
} */

//check email on keyup
function checkEmail(input){
    const emailRegex = /^[a-z A-z 0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;
    if(emailRegex.test(input.value.trim())){
        showSuccess(input)
    }
    else if(input.value == ''){
        showError(input, `${input.id} cannot be empty`)
    }
    else{
        showError(input, `${input.id} is not valid`)
    }
}

//check for password match
function checkPasswords(input1, input2){
    if(input2.value == ''){
        showError(input2, 'this cannot be empty')
    }
    else if(input2.value !== input1.value){
        showError(input2, 'this does not match the above password')
    }
    else{
        showSuccess(input2)
    }
}
