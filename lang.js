/**
 * Skylex — Bilingual language toggle (EN / FR)
 * Persists the user's choice in localStorage across all pages.
 *
 * Usage: add class="lang-en" or class="lang-fr" to any element.
 * The active language's elements are shown; the other is hidden.
 * Call setLang('en') or setLang('fr') from nav buttons.
 */

const LANG_KEY = 'skylex_lang';

function setLang(lang, save = true) {
  document.documentElement.setAttribute('lang', lang);
  if (save) localStorage.setItem(LANG_KEY, lang);

  // Show/hide content blocks
  document.querySelectorAll('.lang-en, .lang-fr').forEach(el => {
    el.style.display = el.classList.contains('lang-' + lang) ? '' : 'none';
  });

  // Update toggle buttons
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.langBtn === lang);
  });
}

// Apply on page load
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(LANG_KEY) || 'en';
  setLang(saved, false);
});
