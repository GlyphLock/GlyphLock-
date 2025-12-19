const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const form = document.querySelector('.contact__form');
const statusEl = document.querySelector('.form__status');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const requiredFields = ['name', 'email', 'phone', 'origin', 'destination', 'vehicle'];
    const missing = requiredFields.filter((field) => !formData.get(field));

    if (missing.length) {
      statusEl.textContent = 'Please fill out all required fields.';
      statusEl.style.color = '#ffb347';
      return;
    }

    statusEl.textContent = 'Thanks! A dispatcher will confirm your quote shortly.';
    statusEl.style.color = '#4ac0ff';
    form.reset();
  });
}
