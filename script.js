// Mobile navigation toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Booking form: simple confirmation (no backend wired up yet)
const bookingForm = document.getElementById('foglalas');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = bookingForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Elküldve — hamarosan hívunk!';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      bookingForm.reset();
    }, 3200);
  });
}
