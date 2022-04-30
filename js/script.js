{
  const welcome = () => {
    console.log("Cześć! Dziękuję, że tu zaglądasz ;)");
  };

  const changeBackground = () => {
    const button = document.querySelector(".button");
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");

    button.addEventListener("click", () => {
      body.classList.toggle("dark");
      themeName.innerText = body.classList.contains("dark")
        ? "Jasny"
        : "Ciemny";
    });
  };
  const init = () => {
    welcome();
    changeBackground();
  };
  init();
}
