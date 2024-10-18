

let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById("inputEmail").value;
  let password = document.getElementById("inputPassword").value;

  console.log(email, password);

  if (email && password) {
    localStorage.setItem ('mail', email)
    localStorage.setItem ('Password', password)
   
    window.location.href = "../pages/login.html";
  }
});
