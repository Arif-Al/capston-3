

let submitDetails = document.getElementById ('submitDetails')

submitDetails.addEventListener ('submit', function(e){
    e.preventDefault()
    let userEmail = document.getElementById('registerEmail').value
    let userpassword = document.getElementById('registerPassword').value 
    
    console.log(userEmail, userpassword )

    if(userEmail && userpassword){
        localStorage.setItem('Email',userEmail)
        localStorage.setItem('password',userpassword) 
    }

});

let loginForm = document.getElementById('loginForm')

loginForm.addEventListener ('submit' , function (e){
    e.preventDefault()

    let localMail = localStorage.getItem('Email')
    let localpassword = localStorage.getItem('password')


    let loginEmail = document.getElementById('loginEmail').value
    let loginPassword = document.getElementById('loginPassword').value
  

   if( loginEmail === localMail && loginPassword === localpassword){
    alert('Login Successful')
    window.location.href = '../index.html'
   } else {
    alert('Some thhing wrong')


}
    
})

