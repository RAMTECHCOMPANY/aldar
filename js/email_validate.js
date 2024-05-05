function validateEmail(event) {
    event.preventDefault();

    var emailInput = document.getElementById("email");
    var nameInput = document.getElementById("name");
    var numberInput = document.getElementById("number");
    var detailInput = document.getElementById("detail");
    var errorEmail = document.getElementById("errorEmail");

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (nameInput.value == "") {
    //     errorName.textContent = "Enter Your Name";
    //     errorEmail.textContent = "";
    // }
    // else if (emailInput.value == "") {
    //     errorEmail.textContent = "Enter email";
    //     errorName.textContent = "";
    // }
    // else if (emailInput.value.match(emailRegex)) {
    //     errorEmail.textContent = "";
    //     errorName.textContent = "";
    // }
    // else if (!emailInput.value.match(emailRegex)) {
    //     errorEmail.textContent = "The email is wrong";
    //     errorName.textContent = "";
    // }
    // else if (numberInput.value == "") {
    //     errorNumber.textContent = "Enter Your Phone Number";
    // }
    // else if (detailInput.value == "") {
    //     errorDetail.textContent = "Enter Details";
    // }
}

var form = document.getElementById("myForm");
form.addEventListener("submit", validateEmail);