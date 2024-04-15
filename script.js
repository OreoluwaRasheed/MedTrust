//  password toggler
// const showPassword = document.querySelector('#hide-password');
// const passwordField = document.querySelector('#password');

// showPassword.addEventListener('click', function(){
//     this.classList.toggle("fa-eye");
//     const type = passwordField.getAttribute('type')=== 'password' ? 'text': 'password'
//     passwordField.setAttribute('type',type)
// })

// other option
// let showPasswordBtn = document.querySelector('#hide-password')
// let passwordInp = document.querySelector('#password')
// let passwordChecklist = document.querySelector('.list-item');

// showPasswordBtn.addEventListener('click', ()=>{
//     // toggle icon
//     showPasswordBtn.classList.toggle('fa-eye');
//     showPasswordBtn.classList.toggle('fa-eye-slash');

//     passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password'
// })

// //  string password validation
// let validationRegex = [
//     { regex: /.{8,}/}, //minimum of 8 characters
//     { regex: /[0-9]/}, //numbers from 0-9
//     { regex: /[a-z]/}, //letters from a-z (lowercase)
//     { regex: /[A-Z]/}, //letters from A-Z (uppercase)
//     { regex: /[^A-Za-z0-9]/} //special characters
//  ]

//  passwordInp.addEventListener('keyup', ()=>{
//     validationRegex.forEach((item,  i) => {
//         let isValid = item.regex.test(passwordInp.value);
//         if(isValid){
//             passwordChecklist[i].classList.add("checked")
//         }
//         else{
//             passwordChecklist[i].classList.remove("checked")
//         }

//     })
//  })

let showPasswordBtn = document.querySelector("#hide-password");
let showConfirmPasswordBtn = document.querySelector("#hide-confirm-password");

let passwordInp = document.querySelector("#password");
let confirmPasswordInp = document.querySelector("#confirm-password");
let passwordChecklistItems = document.querySelectorAll(".list-item");
showPasswordBtn.addEventListener("click", () => {
  // toggle icon
  showPasswordBtn.classList.toggle("fa-eye");
  showPasswordBtn.classList.toggle("fa-eye-slash");

  passwordInp.type = passwordInp.type === "password" ? "text" : "password";
});

//same function for password. I did it for confirm password too. Seperate function for the two dfifferent eye icons. Each call their respective functio nand work
showConfirmPasswordBtn.addEventListener("click", () => {
  // toggle icon
  showConfirmPasswordBtn.classList.toggle("fa-eye");
  showConfirmPasswordBtn.classList.toggle("fa-eye-slash");

  confirmPasswordInp.type =
    confirmPasswordInp.type === "password" ? "text" : "password";
});

//  string password validation
let validationRegex = [
  { regex: /.{8,}/ }, //minimum of 8 characters
  { regex: /[0-9]/ }, //numbers from 0-9
  { regex: /[a-z]/ }, //letters from a-z (lowercase)
  { regex: /[A-Z]/ }, //letters from A-Z (uppercase)
  { regex: /[^A-Za-z0-9]/ }, //special characters
];

passwordInp.addEventListener("keyup", () => {
  //set that all conditions are met initially
  let allValid = true;
  validationRegex.forEach((item, i) => {
    let isValid = item.regex.test(passwordInp.value);

    if (isValid) {
      passwordChecklistItems[i].classList.add("checked");
    } else {
      passwordChecklistItems[i].classList.remove("checked");
      //set that all conditions are not met because at least one is not true
      allValid = false;
    }
  });
  //find the div that contains the entire popup
  const passwordDiv = document.querySelector(".password_checklist");

  if (allValid) {
    //hide it if all conditions are met
    passwordDiv.style.display = "none";
  } else {
    //display it if there is a condition that isn't met
    passwordDiv.style.display = "block";
  }
});

// check confirm password
function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let email = document.getElementById("email").value;
  let fullName = document.getElementById("user").value;
  console.log(password, confirmPassword);

  let messsage = document.getElementById("message");

  if (fullName.length == 0) {
    alert("Please enter your full name");
    return false;
  }
  if (email.length == 0) {
    alert("Please enter a valid email");
    return false;
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    alert("Please enter a valid email");
    return false;
  }

  if (password.length != 0) {
    if (password == confirmPassword) {
      message.textContent = "Password match";
      message.style.backgroundColor = "#3ae374";
      return true;
    } else {
      message.textContent = "Password doesn't match";
      message.style.backgroundColor = "#ff4d4d";
    }
  } else {
    message.textContent = "Password can't be empty";
    message.style.backgroundColor = "#ff4d4d";
  }
  return false;
}
//

// document.addEventListener("DOMContentLoaded", function() {
//     // Your code here
//     // Get the clickable element
// let clickableElement = document.getElementById("boluke");
// console.log(clickableElement);

// // Add a click event listener
// clickableElement.addEventListener("click", function() {
//     // Redirect to another page
//     window.location.href = "pharmacydetails.html";
// });

// });
// document.addEventListener("DOMContentLoaded", function() {
//     // Verify that the DOMContentLoaded event fires
//     console.log("DOMContentLoaded event fired");

//     // Get the clickable element
//     var clickableElement = document.getElementById("boluke");
//     console.log("boluke:", clickableElement);

//     // Check if the clickable element exists
//     if (clickableElement) {
//         // Add a click event listener
//         clickableElement.addEventListener("click", function() {
//             console.log("Clickable element clicked");

//             // Redirect to another page
//             window.location.href = "another_page.html";
//         });
//     } else {
//         console.log("Element with ID 'clickableElement' not found");
//     }
// });

// document.getElementById('boluke').onclick =function(){
//     window.location.replace('pharmacydetails.html')
// }
