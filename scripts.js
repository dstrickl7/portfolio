const navbar = document.querySelector(".navbar").classList;
const close = document.getElementById("close");
const hamburger = document.getElementById("hamburger");
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const project4 = document.getElementById("project4");

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

if (document.documentElement.clientWidth > 600) {
  project1.src = "styles/Images/desktop/room-homepage.png";
  project2.src = "styles/Images/desktop/loopstudios-desktop.png";
  // project3.src=;
  project4.src = "styles/Images/desktop/portfolio-desktop.png";
} else {
  project1.src = "styles/Images/mobile/room-homepage-mobile.png";
  project2.src = "styles/Images/mobile/loopstudios-mobile.png";
  // project3.src=;
  project4.src = "styles/Images/mobile/portfolio-mobile.png";
}
