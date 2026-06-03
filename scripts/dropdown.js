export function toggleDropdown(element) {
  if (!element) return;

  element.classList.toggle('open');
  const arrow = element.querySelector('.arrow');
  if (arrow) {
    arrow.classList.toggle('rotate');
  }
}

export function setupDropdowns() {
  window.toggleDropdown = toggleDropdown;
}
