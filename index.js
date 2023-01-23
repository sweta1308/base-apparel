const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", validateEmail)

function validateEmail() {
    var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (document.querySelector(".input").ariaValueMax.match(mailFormat)) {
        return true;
    } else {
        document.querySelector(".error-msg").innerHTML = "Please provide a valid email"
        document.querySelector(".error-logo").style.visibility = "visible";
        return false;
    }
}