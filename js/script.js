console.log("Cześć! Dziękuję, że tu zaglądasz ;)");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeName.innerText = body.classList.contains("dark") ? "Jasny" : "Ciemny";
});
