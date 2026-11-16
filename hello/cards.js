document.querySelectorAll('.action').forEach(card => {
  const front = card.querySelector('.card-front');
  const panel = card.querySelector('.card-panel');
  const back = card.querySelector('.card-back');
  front.setAttribute('role', 'button');
  front.setAttribute('aria-expanded', 'false');
  function open(event) {
    event.preventDefault();
    card.style.minHeight = `${card.getBoundingClientRect().height}px`;
    front.hidden = true;
    panel.hidden = false;
    card.classList.add('is-open');
    front.setAttribute('aria-expanded', 'true');
    const iframe = panel.querySelector('iframe');
    if (iframe && !iframe.src) iframe.src = iframe.dataset.src;
    back.focus({ preventScroll: true });
  }
  function close() {
    panel.hidden = true;
    front.hidden = false;
    card.classList.remove('is-open');
    card.style.minHeight = '';
    front.setAttribute('aria-expanded', 'false');
    front.focus({ preventScroll: true });
  }
  front.addEventListener('click', open);
  card.addEventListener('click', event => {
    if (event.target === card && panel.hidden) open(event);
  });
  front.addEventListener('keydown', event => {
    if (event.key === ' ') open(event);
  });
  back.addEventListener('click', close);
  card.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) close();
  });
});
