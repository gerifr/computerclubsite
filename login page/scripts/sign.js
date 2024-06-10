const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const greet = document.getElementById("greet");

signUpGreeting = "Join Us"
signInGreeting = "Welcome Back"

signUpButton.addEventListener("click", function () {
signInForm.style.display = "none";
signUpForm.style.display = "flex";
greet.innerText = signUpGreeting;


});
signInButton.addEventListener("click", function () {
signInForm.style.display = "flex";
signUpForm.style.display = "none";
greet.innerText = signInGreeting;
});


