(() => {
  const button = document.querySelector('.contraste-toggle');
  const key = 'box89-alto-contraste';
  function apply(active) {
    document.documentElement.classList.toggle('alto-contraste', active);
    button.setAttribute('aria-pressed', String(active));
    const label = (active ? 'Desativar' : 'Ativar') + ' alto contraste';
    button.setAttribute('aria-label', label);
    button.title = label;
  }
  let saved = false;
  try { saved = localStorage.getItem(key) === 'true'; } catch (_) {}
  apply(saved);
  button.addEventListener('click', () => {
    const active = !document.documentElement.classList.contains('alto-contraste');
    apply(active);
    try { localStorage.setItem(key, String(active)); } catch (_) {}
  });
})();
