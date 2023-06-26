//functions
function errPrompt(input) {
    if (input === "email") {
        emailError.innerText = "Email is not in the right format";
        emailError.style.display = "block";
        email.style.borderColor = "red";
        email.style.borderWeight = "1px";
    }
    else if (input === "password") {
        passwordError.innerText = "Password is not in the right format";
        passwordError.style.display = "block";
        password.style.borderColor = "red";
        password.style.borderWeight = "1px";
    }
}

function cleanUp() {
    emailError.innerText = "";
    emailError.style.display = "none";
    email.style.borderColor = "black";
    email.style.borderWeight = "2px";

    passwordError.innerText = "";
    passwordError.style.display = "none";
    password.style.borderColor = "black";
    password.style.borderWeight = "2px";
}

function validation(data) {
    const { emailData, passwordData } = data;

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const emailTest = emailReg.test(emailData);
    const passwordTest = passwordReg.test(passwordData);

    return { emailTest, passwordTest };
}

function handleclick(e) {
    e.preventDefault();
    cleanUp();

    const emailData = email.value
    const passwordData = password.value
    const messageData = message.value

    const data = {
        emailData,
        passwordData,
        messageData,
    };

    const valid = validation(data);

    console.log(valid);

    if (valid.emailTest && valid.passwordTest) {
        form.style.display = "none";
        header.innerText = "Loading...";

        loading.style.display = "block";
    }
    else if ((valid.emailTest === false) && (valid.passwordTest === false)) {
        errPrompt("email");
        errPrompt("password");
    }
    else if (!valid.emailTest) {
        errPrompt("email");
    }
    else {
        errPrompt("password");
    }
}

//variables
const header = document.querySelector("h2");
const button = document.querySelector("button");
const form = document.querySelector("form");
const login = document.querySelector(".login");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const message = document.querySelector(".message");
const loading = document.querySelector(".loading");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");

//operations
button.addEventListener("click", handleclick);
