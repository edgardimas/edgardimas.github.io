import { projects } from "./projects.js";
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

function showProjectModal(project) {
  const modal = document.getElementById("project-modal");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-description");
  const image = document.getElementById("modal-image");
  const closeButton = modal.querySelector(".close-button");
  const detail = document.getElementById("modal-detail-description");
  const skill = document.getElementById("modal-skill-applied");

  title.textContent = project.title;
  desc.textContent = project.description;
  image.src = project.image;
  detail.textContent = project.detail || "No additional details provided.";
  skill.textContent = project.skills || "No specific skills listed.";

  modal.classList.remove("hidden2");
  document.body.classList.add("modal-open");

  closeButton.onclick = () => {
    modal.classList.add("hidden2");
    document.body.classList.remove("modal-open");
  };

  // Close modal when clicking outside the modal content
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden2");
      document.body.classList.remove("modal-open");
    }
  };
}

const projectContainer = document.getElementById("projects-container");

projects.forEach((project, index) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  let buttonColorClass = "";
  let lineClass = "";

  if (index % 3 === 0) {
    buttonColorClass = "red-button";
    lineClass = "line-red";
  } else if (index % 3 === 1) {
    buttonColorClass = "orange-button";
    lineClass = "line-orange";
  } else {
    buttonColorClass = "teal-button";
    lineClass = "line-teal";
  }

  projectDiv.innerHTML = `
    <h3>${project.title}</h3>
    <div class="horizontal-line-3 ${lineClass}"></div>
    <p>${project.description}</p>
    <button class="detail-button black-button" data-index="${index}">Details</button>
  `;

  projectContainer.appendChild(projectDiv);

  // Add event listener to the newly created button
  const detailButton = projectDiv.querySelector(".detail-button");
  detailButton.addEventListener("click", () => {
    showProjectModal(project);
  });
});

const toggleBtn = document.getElementById("menu-toggle");
const navItems = document.getElementById("nav-items");

toggleBtn.addEventListener("click", () => {
  navItems.classList.toggle("show");
});

window.addEventListener("DOMContentLoaded", () => {
  fetch("../components/navbar.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("header-placeholder").innerHTML = html;
    })
    .catch((err) => console.error("Failed to load header:", err));
});
