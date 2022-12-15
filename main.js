const navigation = document.querySelector("#navcontainer");
const navLinks = document.querySelectorAll(".nav-link");
const linksContainer = document.querySelector(".navbar-collapse");
const navHeight = navigation.getBoundingClientRect().height;

//sticky navbar
window.addEventListener("scroll", () => {
  const position = window.scrollY;
  if (position > navHeight) {
    navigation.classList.add("sticky");
  } else {
    navigation.classList.remove("sticky");
  }
});

//active menu class while scrolling the window
window.addEventListener("scroll", () => {
  const scrollPosition = scrollY;
  const sections = document.querySelectorAll("section");
  let current = "";
  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      current = section.getAttribute("id");
    }
  });
  //removing active link from all nav-links as default
  if (current) {
    navLinks.forEach((li) => {
      li.classList.remove("active-link");
      if (li.classList.contains(current)) {
        li.classList.add("active-link");
      }
    });
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    linksContainer.classList.remove("show");
  });
});
