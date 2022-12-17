let form = document.getElementById("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];
let success = document.getElementById("formHead");
let goLogin = document.getElementById("log");
let loglink = document.getElementById("link");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    form.username.value == "" &&
    form.username.value == "" &&
    form.passbox.value == ""
  ) {
    success.textContent = "Please fill the mandatory fields";
    success.style.color = "Red";
  } else if (form.email.value == "") {
    success.textContent = "Please check your email";
    success.style.color = "Red";
    form.email.style.borderColor = "red";
  } else if (form.username.value == "") {
    success.textContent = "Please check your username";
    success.style.color = "Red";
    form.username.style.borderColor = "red";
  } else if (form.passbox.value == "") {
    success.textContent = "Please check your password";
    success.style.color = "Red";
    form.passbox.style.borderColor = "red";
  } else {
    let obj = {
      Email: form.email.value,
      Username: form.username.value,
      Password: form.passbox.value,
    };
    userData.push(obj);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Registration Successfull😊");
    window.location.href = "./login.html";
    log.textContent = "";

    form.email.value = "";
    form.username.value = "";
    form.passbox.value = "";
  }
});

// PassWord Visibility Functionality

let showpass = document.getElementById("pass");
let passbox = document.getElementById("passbox");
showpass.addEventListener("click", () => {
  if (passbox.type === "password") {
    passbox.type = "text";
  } else {
    passbox.type = "password";
  }
});
