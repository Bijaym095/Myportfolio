const navigation = document.querySelector("#navcontainer");
const navLinks = document.querySelectorAll(".nav-link");
const linksContainer = document.querySelector(".navbar-collapse");

window.addEventListener("scroll", () => {
  const position = window.scrollY;
  const navHeight = navigation.getBoundingClientRect().height;
  if (position > navHeight) {
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
  }
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    linksContainer.classList.remove("show");
  })
);
