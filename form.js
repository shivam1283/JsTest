const form = document.getElementById('form')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')


form.addEventListener( 'submit', (event) =>{
    event.preventDefault();
    checkInputs()
})

function checkInputs(){
    const usernameValue = input1.value.trim()
    const emailValue = input2.value.trim()
    const passwordValue = input3.value.trim()
    const passwordValue2 = input4.value.trim()

    if (usernameValue === ''){
        addErrorClass(input1,'Username cannot be blank')
    } else {
        addSuccessClass(input1)
    }

    if (emailValue === ''){
        addErrorClass(input2,'email cannot be blank')
    } else if(!isEmail(emailValue)){
        addErrorClass(input2,'not a valid email')
    } else{
        addSuccessClass(input2)
    }

    if (passwordValue === ''){
        addErrorClass(input3,'Password cannot be blank')
    } else {
        addSuccessClass(input3)
    }

    if (passwordValue2 === ''){
        addErrorClass(input4,'Password2 cannot be blank')
    } else if(passwordValue !== passwordValue2){
        addErrorClass(input4,'Passwords don\'t match')
    } else {
        addSuccessClass(input4)
    }

}


function addErrorClass(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;
    formControl.className = 'form-control error'
}

function addSuccessClass(input){
    
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
