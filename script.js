function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  if (!e.target.closest('.nav') && menu.classList.contains('open')) {
    menu.classList.remove('open');
  }
});

// Demo form
function handleDemo(e) {
  e.preventDefault();
  const form = e.target;
  const msg  = document.getElementById('cta-msg');
  const btn  = form.querySelector('button');

  btn.disabled = true;
  btn.textContent = 'Sending…';

  // Replace with actual form endpoint (Formspree, Cloudflare, etc.)
  const data = {
    name:  form.name.value,
    email: form.email.value,
    org:   form.org.value,
  };

  console.log('Demo request:', data);

  // Simulate submission — wire up to a real endpoint when ready
  setTimeout(() => {
    msg.textContent = "✓ Thanks! We'll be in touch within one business day.";
    form.reset();
    btn.disabled = false;
    btn.textContent = 'Request a demo';
  }, 800);
}

// Smooth scroll offset for sticky nav
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
