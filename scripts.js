const navbar = document.querySelector(".navbar").classList;
const close = document.getElementById("close");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navbar.toggle("active");
  close.classList.toggle("active");
  hamburger.classList.toggle("active");
});

close.addEventListener("click", () => {
  navbar.toggle("active");
  close.classList.toggle("active");
  hamburger.classList.toggle("active");
});
