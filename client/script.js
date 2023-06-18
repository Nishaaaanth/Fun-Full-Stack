//functions
function validation(data) {
    const {email, password} = data;

    const emailReg = /[a-z]+/;
    const passwordReg = /[a-z]+/;

    const emailTest = emailReg.test(email);
    const passwordTest = passwordReg.test(password);

    var error = emailTest === false ? "email" : passwordTest === false ? "password" : false;
    
    if(error) console.log(error + " should be fixed asap to proceed");

    return emailTest && passwordTest;
}

function handleclick(e) {
    e.preventDefault();
    
    const emailData = email.value
    const passwordData = password.value
    const messageData = message.value

    const data = {
        emailData,
        passwordData,
        messageData,
    };

    if(validation(data)) {
        console.log(data);

        form.style.display = "none";
        header.innerText = "Loading...";

        loading.style.display = "block";
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


//operations
button.addEventListener("click", handleclick);
