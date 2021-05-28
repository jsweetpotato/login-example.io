const submit = document.getElementById("submit");
const form = document.getElementById("form");


function login(){
    if (form.className == "emailValid") {
        console.log("log In");
    }else {
        console.log("not log in");
    }
}
login();