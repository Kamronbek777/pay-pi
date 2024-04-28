let elBtn = document.querySelector(".header__btn");

elBtn.addEventListener("click", () => {
  document.body.classList.toggle("header__btn--active");
});