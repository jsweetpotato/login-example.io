function emailValidation(){
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("email-text");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let valid = "emailValid"
    let invalid = "emailInvalid"

    if (email.match(pattern)) {
        form.classList.add(valid);
        form.classList.remove(invalid);
        text.innerHTML = "Your Email Address in Valid."
        text.style.color = "#00ff00"
    } else{
        form.classList.remove(valid);
        form.classList.add(invalid);
        text.innerHTML = "Please Enter Valid Email Address"
        text.style.color = "#ff0000"
    }
    if (email == "") {
        form.classList.remove(valid);
        form.classList.remove(invalid);
        text.innerHTML = ""
        text.style.color = "#00ff00"
    } 
}

function pwValidation(){
    let form = document.getElementById("form");
    let password = document.getElementById("password").value;
    let text = document.getElementById("password-text");
    let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,}).*$/;
    let valid = "pwValid";
    let invalid = "pwInvalid";

    if (password.match(pattern)) {
        form.classList.add(valid);
        form.classList.remove(invalid);
        text.innerHTML = "Your password in Valid."
        text.style.color = "#00ff00"
    } else{
        form.classList.remove(valid);
        form.classList.add(invalid);
        text.innerHTML = "Please Enter Valid Password <br/> have to Uppercase, lowercase, number"
        text.style.color = "#ff0000"
    }
    if (password == "") {
        form.classList.remove(valid);
        form.classList.remove(invalid);
        text.innerHTML = ""
        text.style.color = "#00ff00"
    } 
}