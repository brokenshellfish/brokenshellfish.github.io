document.addEventListener('DOMContentLoaded', function () {
  // Load Lottie animation
  lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/packages/lf20_usmfx6bp.json'
  });

  // Theme toggle logic
  const toggle = document.getElementById('toggleTheme');
  const htmlEl = document.documentElement;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    htmlEl.classList.remove('dark-mode');
    toggle.checked = true;
  } else {
    htmlEl.classList.add('dark-mode');
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      htmlEl.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      htmlEl.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  });

  // Show site after loading
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loadingScreen = document.getElementById('loadingScreen');
      const mainContent = document.getElementById('mainContent');

      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.visibility = 'visible';
        mainContent.style.opacity = '1';
      }, 800);
    }, 2000); // Adjust delay here
  });
});