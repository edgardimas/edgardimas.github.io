// The section loader looks for `data-include` on <section> elements.
// It uses `scripts/loader.js` to fetch the provided URL, then inserts
// the matching fragment (an element with the same id) or the full HTML
// into the section. This enables reusing separate HTML files for page
// sections like headers, footers, or content blocks.
import { initSectionLoader } from "./loader.js";
import { setupDropdowns } from "./dropdown.js";
import { initScrollSpy } from "./scrollspy.js";
import { initTerminal } from "./terminal.js";

function initIntersectionObserver() {
  const sections = document.querySelectorAll("section");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });
}

function initMenuToggle() {
  const toggleBtn = document.getElementById("menu-toggle");
  const navItems = document.getElementById("nav-items");
  if (!toggleBtn || !navItems) return;

  toggleBtn.addEventListener("click", () => {
    navItems.classList.toggle("show");
  });
}

function initHeaderScroll() {
  const landing = document.getElementById("landing");
  const header = document.querySelector("header");
  if (!landing || !header) return;

  window.addEventListener("scroll", () => {
    const landingHeight = landing.offsetHeight - 50;
    if (window.scrollY < landingHeight) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
  });
}

function initNavScrollButtons() {
  const container = document.querySelector(".section-nav-li-container");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");
  if (!container || !leftBtn || !rightBtn) return;

  leftBtn.addEventListener("click", () => {
    container.scrollBy({ left: -200, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    container.scrollBy({ left: 200, behavior: "smooth" });
  });
}

function runApp() {
  initSectionLoader();
  initIntersectionObserver();
  initMenuToggle();
  initHeaderScroll();
  initNavScrollButtons();
  initScrollSpy();
  setupDropdowns();
  initTerminal();
}

export function initApp() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runApp);
  } else {
    runApp();
  }
}
