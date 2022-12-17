let userLogDetails = document.getElementById("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];

userLogDetails.addEventListener("submit", (e) => {
  e.preventDefault();
  let flag = false;
  for (let i = 0; i <= userData.length - 1; i++) {
    if (
      userData[i].Email === form.email.value &&
      userData[i].Password === form.pass.value
    ) {
      flag = true;
      break;
    }
  }
  if (flag === true) {
    alert("Login Successfull");
    window.location.href = "./index.html";
  } else {
    alert("Wrong Credentials");
  }
});

// PassWord visibility code
let passbox = document.getElementById("pass");
let showpass = document.getElementById("showpassWord");
showpass.addEventListener("click", () => {
  if (passbox.type === "password") {
    passbox.type = "text";
  } else {
    passbox.type = "password";
  }
});
