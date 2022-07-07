const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const passErrorMsg = document.getElementById("pass-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email !== "sankey901@solutions.com") {
        document.getElementById("login-error-msg").innerHTML = "Invalid username"
        loginErrorMsg.style.opacity = 1;

    }
    else if (password !== "mindset") {
        document.getElementById("login-error-msg").innerHTML = "Invalid password"
        loginErrorMsg.style.opacity = 1;
    }
    else {
        location.href = "/index.html";
        alert("You have successfully logged in.");
    }
})