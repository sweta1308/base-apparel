const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", validateEmail)

function validateEmail() {
    var mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (document.querySelector(".input").value.match(mailFormat)) {
        return true;
    } else {
        document.querySelector(".error-msg").innerHTML = "Please provide a valid email";
        document.querySelector(".error-logo").style.display = "block";
        return false;
    }
}