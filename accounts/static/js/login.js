document.addEventListener("DOMContentLoaded", function(){

    const loginForm = document.getElementById("login-form");
    const loginButton = document.getElementById("loginButton");
    const buttonText = document.getElementById("buttonText");
    const spinner = document.getElementById("loadingSpinner");

    loginForm.addEventListener("submit", function(){
        spinner.style.display = "inline-block";
        buttonText.textContent = "Logging in...";
        loginButton.disabled = true;
    });

});