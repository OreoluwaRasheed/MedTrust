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

let showPasswordBtn = document.querySelector('#hide-password');
let passwordInp = document.querySelector('#password');
let passwordChecklistItems = document.querySelectorAll('.list-item');

showPasswordBtn.addEventListener('click', () => {
    // toggle icon
    showPasswordBtn.classList.toggle('fa-eye');
    showPasswordBtn.classList.toggle('fa-eye-slash');

    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';
});

//  string password validation
let validationRegex = [
    { regex: /.{8,}/ },  //minimum of 8 characters
    { regex: /[0-9]/ },  //numbers from 0-9
    { regex: /[a-z]/ },  //letters from a-z (lowercase)
    { regex: /[A-Z]/ },  //letters from A-Z (uppercase)
    { regex: /[^A-Za-z0-9]/ } //special characters
];

passwordInp.addEventListener('keyup', () => {
    validationRegex.forEach((item, i) => {
        let isValid = item.regex.test(passwordInp.value);
        if (isValid) {
            passwordChecklistItems[i].classList.add("checked");
        } else {
            passwordChecklistItems[i].classList.remove("checked");
        }
    });
});

// check confirm password
function checkPassword(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    console.log(password, confirmPassword)

let messsage = document.getElementById("message");

if (password.length !=0){
    if (password == confirmPassword){
        message.textContent = "Password match"
        message.style.backgroundColor = "#3ae374";
    }
    else{
        message.textContent = "Password doesn't match"
        message.style.backgroundColor = "#ff4d4d";
    }
}
else{
    alert("Password can't be empty");
    messsage.textContent = '';
}
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

