let userdata = document.getElementById("form");
console.log(userdata);
userdata.addEventListener("click", (e) => {
  //   e.preventDefault();
});

let passbox = document.getElementById("pass");
let showpass = document.getElementById("showpassWord");
showpass.addEventListener("click", () => {
  if (passbox.type === "password") {
    passbox.type = "text";
  } else {
    passbox.type = "password";
  }
});
