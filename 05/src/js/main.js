const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('panel--open');
}

function toggleActive(e) {
  if (!e.propertyName.includes('flex')) { return; }
  this.classList.toggle('panel--active');
}

panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});
