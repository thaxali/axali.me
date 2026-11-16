document.querySelectorAll('[data-dialog]').forEach(button => {
  const dialog = document.getElementById(button.dataset.dialog);
  button.addEventListener('click', () => {
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
    dialog.querySelector('.dialog-close').focus({ preventScroll: true });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    button.focus({ preventScroll: true });
  });
});

const posterCycle = document.querySelector('.poster-cycle');
if (posterCycle) {
  const posters = [...posterCycle.querySelectorAll('.poster')];
  const toggle = posterCycle.querySelector('.poster-toggle');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let paused = reducedMotion.matches;
  let timer;
  function syncRotation() {
    clearInterval(timer);
    toggle.textContent = paused ? '▶' : 'Ⅱ';
    toggle.setAttribute('aria-label', paused ? 'Play poster rotation' : 'Pause poster rotation');
    if (paused || document.hidden) return;
    timer = setInterval(() => {
      const next = (current + 1) % posters.length;
      if (!posters[next].complete || !posters[next].naturalWidth) return;
      posters[current].classList.remove('is-active');
      posters[current].setAttribute('aria-hidden', 'true');
      current = next;
      posters[current].classList.add('is-active');
      posters[current].removeAttribute('aria-hidden');
    }, 3000);
  }
  toggle.addEventListener('click', () => { paused = !paused; syncRotation(); });
  document.addEventListener('visibilitychange', syncRotation);
  reducedMotion.addEventListener('change', event => { paused = event.matches; syncRotation(); });
  syncRotation();
}
