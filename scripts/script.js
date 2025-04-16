const colors = ["red", "yellow", "green"];

const logDetails = {
  1: `Detail about the first log`,
  2: `Detailed information about the second log entry. More context here.`,
  3: `Third log entry details. Something important happened here.`,
};

// Function to update only the <p> inside terminal
window.showDetail = function (id) {
  const terminal = document.getElementById("terminal");

  if (!terminal || !logDetails[id]) {
    console.error("Terminal div or log detail not found!");
    return;
  }

  // Keep terminal structure and styling intact
  terminal.innerHTML = `
       <div class="section-header">
              <img src="./views/assets/color.png" alt="color" class="color"/>
              <h2 class="section-head">Terminal</h2>
          </div>
          <div class="terminal-screen" id="terminal">
              <p class="log-detail">${logDetails[id]}</p>
                <button class="back-button" onclick="goBack()">← Back</button>
            </div>
      
      `;
};

// Function to restore the original log list
window.goBack = function () {
  const terminal = document.getElementById("terminal");

  if (!terminal) {
    console.error("Terminal div not found!");
    return;
  }

  // Restore the original log entries while keeping styles
  terminal.innerHTML = `
     <div class="section-header">
            <img src="./views/assets/color.png" alt="color" class="color"/>
            <h2 class="about-me-head">Terminal</h2>
        </div>
        <div class="terminal-screen" id="terminal">
            <p onclick="showDetail(1)">First log entry...</p>
            <p onclick="showDetail(2)">Second log entry...</p>
            <p onclick="showDetail(3)">Third log entry...</p>
          </div>
    `;
};

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

const toggleBtn = document.getElementById("menu-toggle");
const navItems = document.getElementById("nav-items");

toggleBtn.addEventListener("click", () => {
  navItems.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  const landing = document.getElementById("landing");
  const header = document.querySelector("header");
  const landingHeight = landing.offsetHeight;

  if (window.scrollY < landingHeight) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
});

// const countdownText = document.getElementById("countdown-text");
// const skipBtn = document.getElementById("skip-btn");
// const messages = [
//   "Commencing Journey in ... 3",
//   "Commencing Journey in ... 2",
//   "Commencing Journey in ... 1",
//   "We have a lift off",
// ];

// let index = 0;
// let interval;

// // Lock scroll initially
// document.body.classList.add("noscroll");

// function startCountdown() {
//   interval = setInterval(() => {
//     countdownText.textContent = messages[index];
//     index++;

//     if (index === messages.length) {
//       clearInterval(interval);
//       finishIntro();
//     }
//   }, 1000);
// }

// function finishIntro() {
//   document.body.classList.remove("noscroll");
//   const nextSection = document.getElementById("about");
//   nextSection.scrollIntoView({ behavior: "smooth" });
// }

// // Start countdown
// startCountdown();

// // Handle skip
// skipBtn.addEventListener("click", () => {
//   clearInterval(interval); // stop countdown
//   finishIntro(); // skip to next section
// });
