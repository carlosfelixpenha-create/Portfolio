
const btn = document.getElementById('toggle-dark');

// Verifica se já existe preferência salva
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
  document.body.classList.add('dark');
  btn.textContent = 'Modo Claro';
} else {
  btn.textContent = 'Modo Escuro';
}

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    btn.textContent = 'Modo Claro';
    localStorage.setItem('mode', 'dark');
  } else {
    btn.textContent = 'Modo Escuro';
    localStorage.setItem('mode', 'light');
  }
});
