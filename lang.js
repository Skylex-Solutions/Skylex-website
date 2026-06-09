/**
 * Skylex — Bilingual language toggle (EN / FR)
 * Visibility is handled purely by CSS: [lang="en"] .lang-fr { display:none }
 * This script only updates the <html lang> attribute and button state.
 */

const LANG_KEY = 'skylex_lang';

function setLang(lang, save = true) {
  document.documentElement.setAttribute('lang', lang);
  if (save) localStorage.setItem(LANG_KEY, lang);

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === lang);
  });
}

// Apply saved preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(LANG_KEY) || 'en';
  setLang(saved, false);
});
