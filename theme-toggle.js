const toggleTheme = document.querySelector('#toggle-theme');

// check local storage
let localS = localStorage.getItem('theme');
let themeToSet = localS;
// if local storage not set check system preference
if (!localS) {
  themeToSet = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}
// set theme
document.documentElement.setAttribute('data-theme', themeToSet);
toggleTheme.setAttribute('aria-label', themeToSet);

function switchTheme() {
  const rootElement = document.documentElement;
  let dataTheme = rootElement.getAttribute('data-theme');
  let newTheme = dataTheme === 'light' ? 'dark' : 'light';
  rootElement.setAttribute('data-theme', newTheme);
  toggleTheme.setAttribute('aria-label', newTheme);
  localStorage.setItem('theme', newTheme);
}

toggleTheme.addEventListener('click', switchTheme);
