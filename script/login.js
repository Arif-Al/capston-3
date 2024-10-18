

let loginEmail = document.getElementById ('loginEmail')
let loginPassword = document.getElementById ('loginPassword')
let loginBtn = document.getElementById ('loginBtn')

loginBtn.addEventListener ('click' , function (e) {
    e.preventDefault ()

    let storedMail = localStorage.getItem ('mail')
    let storedpassword = localStorage.getItem ('Password')

    let loginEmail = document.getElementById ('loginEmail').value
    let loginPassword = document.getElementById ('loginPassword').value

    if (loginEmail === storedMail && loginPassword === storedpassword) {

        alert('login Success full')

        window.location.href = "../index.html"
    }
    else {
      alert  ("Some thing is Wrong")
    }
});