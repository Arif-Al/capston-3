

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

