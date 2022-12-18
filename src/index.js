let hover1 = document.getElementById("hover1");
let slidepanel = document.getElementById("slidepanel");

hover1.addEventListener("mouseover", () => {
  slidepanel.style.width = "500px";
});

let close = document.getElementById("closebtn");
close.addEventListener("click", () => {
  slidepanel.style.width = "0px";
});
