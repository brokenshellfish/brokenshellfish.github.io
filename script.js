// Load the Lottie animation
lottie.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://assets10.lottiefiles.com/packages/lf20_ktwnwv5m.json'
});

const toggle = document.getElementById('toggleTheme');
const htmlEl = document.documentElement;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  htmlEl.classList.remove('dark-mode');
  toggle.checked = true;
} else {
  htmlEl.classList.add('dark-mode');
}

// Update theme on toggle
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    htmlEl.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  } else {
    htmlEl.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
});