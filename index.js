const submitBtn = document.getElementsByClassName("submit-btn");

submitBtn.addEventListener('click', validateEmail)

function validateEmail() {
    if (document.getElementsByClassName("input") === " ") {
        document.getElementsByClassName("error-msg").style.display = "block";
        document.getElementsByClassName("error-logo").style.display = "block"
    }
}