/*Navigation menu */
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

// Close navlist when a link is clicked
let navlink = document.querySelectorAll(".navlinks");

navlink.forEach((link) =>
  link.addEventListener("click", () => {
    close.click();
  })
);

/*Chooses image based on screen width */

const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const project4 = document.getElementById("project4");

if (document.documentElement.clientWidth > 600) {
  project1.src = "styles/Images/desktop/room-homepage-1.png";
  project2.src = "styles/Images/desktop/loopstudios.png";
  project3.src = "styles/Images/desktop/easybank-v2.png";
  project4.src = "styles/Images/desktop/portfolio.png";
} else {
  project1.src = "styles/Images/mobile/room-homepage.png";
  project2.src = "styles/Images/mobile/loopstudios.png";
  project3.src = "styles/Images/mobile/easybank.png";
  project4.src = "styles/Images/mobile/portfolio.png";
}

/*Form validation*/

const email = document.getElementById("email");
const name = document.getElementById("name");

name.addEventListener("invalid", () => {
  if (name.value === "") {
    name.setCustomValidity("Don't be shy! Enter your first name.");
  } else if (name.validity.tooShort) {
    name.setCustomValidity(
      "Please enter a valid name longer than 2 characters"
    );
  } else {
    name.setCustomValidity("No numbers or symbols please!");
  }
});

email.addEventListener("invalid", () => {
  if (email.value === "") {
    email.setCustomValidity("Please enter an email address");
  } else if (email.typeMismatch) {
    email.setCustomValidity(
      "Please enter a valid email in the format xxx@xx.xxx"
    );
  }
});
