window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".section-link");

  function onScroll() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 300;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
});

function toggleDropdown(element) {
  element.classList.toggle("open");
  const arrow = element.querySelector(".arrow");
  arrow.classList.toggle("rotate");
}
