(() => {
  const body = document.body;
  const welcome = document.getElementById('welcomeScreen');
  const skip = document.getElementById('welcomeSkip');
  const preview = new URLSearchParams(location.search).has('preview');
  const hideWelcome = () => {
    if (!welcome) return;
    welcome.classList.add('is-hidden');
    body.classList.remove('intro-lock');
    sessionStorage.setItem('lawxygenWelcomeSeen', '1');
    setTimeout(() => welcome.remove(), 800);
  };
  if (welcome) {
    if (preview || sessionStorage.getItem('lawxygenWelcomeSeen')) {
      welcome.remove();
      body.classList.remove('intro-lock');
    } else {
      setTimeout(hideWelcome, 5800);
      skip?.addEventListener('click', hideWelcome);
    }
  }

  const header = document.getElementById('siteHeader');
  const updateHeader = () => header?.classList.toggle('scrolled', scrollY > 18);
  updateHeader();
  addEventListener('scroll', updateHeader, { passive: true });

  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  menuToggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('mobile-open');
    menuToggle.setAttribute('aria-expanded', String(Boolean(open)));
  });

  document.querySelectorAll('.has-menu > .nav-link').forEach(button => {
    button.addEventListener('click', event => {
      if (innerWidth > 1100) return;
      event.preventDefault();
      const item = button.closest('.has-menu');
      document.querySelectorAll('.has-menu.open').forEach(other => other !== item && other.classList.remove('open'));
      item?.classList.toggle('open');
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const services = [
    ['Private Limited Company', '#services'], ['LLP Registration', '#services'], ['One Person Company', '#services'],
    ['GST Registration', 'legal-tax-compliance.html'], ['GST Return Filing', 'legal-tax-compliance.html'],
    ['GST Notice Support', 'legal-tax-compliance.html'], ['Trademark Registration', '#services'],
    ['Trademark Objection', '#services'], ['Annual ROC Filing', 'legal-tax-compliance.html'],
    ['Director KYC', 'legal-tax-compliance.html'], ['Income Tax Return', 'legal-tax-compliance.html'],
    ['TDS Return Filing', 'legal-tax-compliance.html'], ['FSSAI Registration', '#services'],
    ['Import Export Code', '#services'], ['Udyam MSME Registration', '#services'],
    ['Accounting & Bookkeeping', 'legal-tax-compliance.html']
  ];
  const input = document.getElementById('serviceSearch');
  const results = document.getElementById('searchResults');
  const form = document.getElementById('serviceSearchForm');
  const renderResults = query => {
    if (!results) return;
    const q = query.trim().toLowerCase();
    if (!q) { results.classList.remove('show'); results.innerHTML = ''; return; }
    const matches = services.filter(([name]) => name.toLowerCase().includes(q)).slice(0, 6);
    results.innerHTML = matches.length
      ? matches.map(([name, href]) => `<a href="${href}"><span>${name}</span><b>→</b></a>`).join('')
      : '<p>No matching service found. Try GST, company, trademark or ROC.</p>';
    results.classList.add('show');
  };
  input?.addEventListener('input', () => renderResults(input.value));
  input?.addEventListener('focus', () => input.value && renderResults(input.value));
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const first = results?.querySelector('a');
    if (first) location.href = first.getAttribute('href');
    else renderResults(input?.value || '');
  });
  document.addEventListener('click', event => {
    if (results && form && !form.contains(event.target)) results.classList.remove('show');
  });

  document.querySelectorAll('.accordion article button').forEach(button => {
    button.addEventListener('click', () => {
      const article = button.closest('article');
      const wasOpen = article?.classList.contains('open');
      document.querySelectorAll('.accordion article.open').forEach(item => item.classList.remove('open'));
      if (!wasOpen) article?.classList.add('open');
    });
  });
})();
