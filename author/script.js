import { projects } from "./projects.js";
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
