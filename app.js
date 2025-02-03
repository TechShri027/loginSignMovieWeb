let signform=document.querySelector('.signup')
let name=document.querySelector('.name')
let name_error=document.querySelector('.name_error')
let number=document.querySelector('.number')
let number_error=document.querySelector('.number_error')
let email=document.querySelector('.email')
let email_error=document.querySelector('.email_error')
let password=document.querySelector('.password')
let password_error=document.querySelector('.password_error')

if(signform){
// console.log(form)
signform.addEventListener('submit',(e)=>{   
    
    let isValid=true;
    if(name.value==='' || name.value===null){
        e.preventDefault()
        name_error.innerHTML="please provide name!"
        isValid=false;
    }else{
        name_error.innerHTML=""
    }
    if(number.value.length !==10 || isNaN(number.value) ){
        e.preventDefault()
        number_error.innerHTML="please enter valid number!"
        isValid=false;
    }else{
        number_error.innerHTML=""
    }
    let emailpattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailpattern.test(email.value)){
        e.preventDefault();
        email_error.innerHTML="enter valid email address!"
        isValid=false;
    }else{
        email_error.innerHTML=""
    }
    if(password.value.length<8){
        e.preventDefault()
        password_error.innerHTML="password must be atleast 8 characters!"
        isValid=false;
    }else{
        password_error.innerHTML=""
    }


    if(isValid){
        let UserDetails=JSON.parse(localStorage.getItem('userdata')) ?? [];
        console.log(UserDetails)
        UserDetails.push({
            'username':name.value,
            'usernumber':number.value,
            'useremail':email.value,
                'userpass':password.value
            
        })  
    


     localStorage.setItem('userdata',JSON.stringify(UserDetails));
     console.log(UserDetails);
    }
    
})
}

// signup page end here


let loginform=document.querySelector('.loginform')
let loginemail=document.querySelector('.loginemail')
let loginemail_error=document.querySelector('.loginemail_error')
let loginpassword=document.querySelector('.loginpassword')
let loginpassword_error=document.querySelector('.loginpassword_error')

console.log(loginform)
if(loginform){
loginform.addEventListener('submit',(e)=>{

    let isValid=true;
    let emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailpattern.test(loginemail.value)){
      e.preventDefault()
      loginemail_error.innerHTML='please enter valid email'
      isValid=false;
    }else{
        loginemail_error.innerHTML=""
    }

    if(loginpassword.value.length<8){
        e.preventDefault()
        loginpassword_error.innerHTML='please enter atleast 8 digit password'
        isValid=false;
    }else{
        loginpassword_error.innerHTML=""
    }
     

    if(isValid){
        let UserDetails=JSON.parse(localStorage.getItem('userdata'))

        let userFound=UserDetails.find(user=>
            user.useremail===loginemail.value && user.userpass===loginpassword.value
        )

        if(userFound){
            alert("login successfully")
            
        }else{
            alert("please try again")
        }
    }
  

})   
    
}
