document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[href$=".html"]').forEach((link) => {
    if (link.getAttribute('href') === current || (current === '' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const cursor = document.querySelector('.cursor-follower');
  if (cursor) {
    window.addEventListener('mousemove', (event) => {
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
    });
    document.querySelectorAll('a, button, .work-item, .service-card, .nav-link').forEach((node) => {
      node.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      node.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }
});
