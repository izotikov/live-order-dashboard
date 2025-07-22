export const initTheme = () => {
  const root = document.getElementById('root');
  root.dataset.theme = localStorage.getItem('theme') || 'light';
};

export const toggleTheme = () => {
  const root = document.getElementById('root');
  const newTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
}