let form=document.querySelector('.signup')
let name=document.querySelector('.name')
let name_error=document.querySelector('.name_error')
let number=document.querySelector('.number')
let number_error=document.querySelector('.number_error')
let email=document.querySelector('.email')
let email_error=document.querySelector('.email_error')
let password=document.querySelector('.password')
let password_error=document.querySelector('.password_error')

// console.log(form)
form.addEventListener('submit',(e)=>{
    if(name.value==='' || name.value===null){
        e.preventDefault()
        name_error.innerHTML="please provide name!"
    }else{
        name_error.innerHTML=""
    }
    if(number.value.length<10 || number.value.length>10 ){
        e.preventDefault()
        number_error.innerHTML="please enter valid number!"
    }else{
        name_error.innerHTML=""
    }
    let emailpattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailpattern.test(email.value)){
        e.preventDefault();
        email_error.innerHTML="enter valid email address!"
    }else{
        name_error.innerHTML=""
    }
    if(password.value<8){
        e.preventDefault()
        password_error.innerHTML="password must be atleast 8 characters!"
    }else{
        name_error.innerHTML=""
    }

    
})


