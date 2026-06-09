export function loadSectionFragment(sectionId, url) {
  const section = document.getElementById(sectionId);
  if (!section || !url) return;

  if (!section.innerHTML.trim()) {
    section.innerHTML = `
      <div style="padding: 20px; background: rgba(255,255,255,0.08); border-radius: 12px; margin-bottom: 40px;">
        <p>Loading section content…</p>
      </div>
    `;
  }

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const fragment = doc.getElementById(sectionId);

      if (fragment) {
        section.innerHTML = fragment.innerHTML;
      } else {
        section.innerHTML = html;
      }
    })
    .catch((error) => {
      section.innerHTML = `
        <div style="padding: 20px; background: rgba(255,255,255,0.08); border-radius: 12px; margin-bottom: 40px;">
          <p>Unable to load section content. ${error.message}</p>
        </div>
      `;
      console.error(error);
    });
}

export function initSectionLoader() {
  const fragmentSections = document.querySelectorAll("section[data-include]");
  fragmentSections.forEach((section) => {
    const url = section.dataset.include;
    if (url) {
      loadSectionFragment(section.id, url);
    }
  });
}
