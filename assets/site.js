// Theme toggle (light default, dark optional, persisted)
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = htmlEl.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', next);
      try { localStorage.setItem('buffalogo-theme', next); } catch(e) {}
    });
  }

  // Lead form track toggle (Marketing / Merchandising / Both)
  const toggleOpts = document.querySelectorAll('.toggle-opt');
  const trackInput = document.getElementById('track-input');
  toggleOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      toggleOpts.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');
      if (trackInput) trackInput.value = opt.dataset.track;
    });
  });
});
