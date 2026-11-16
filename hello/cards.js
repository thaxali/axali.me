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
