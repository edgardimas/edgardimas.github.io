export function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.section-link');

  if (!sections.length || !navLinks.length) {
    return;
  }

  function updateActiveLink() {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 300;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href').slice(1) === current,
      );
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
}
