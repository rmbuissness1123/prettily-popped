'use strict';

/* ── Data ─────────────────────────────────────────────────────────────────── */

const DATA = {
  services: [
    {
      name: '6 ft Organic Garland', price: 'CA$65', tone: 'blush', tag: 'Garlands',
      blurb: 'A sweet, hand-built garland — perfect for a dessert table or backdrop.',
    },
    {
      name: '10 ft Organic Garland', price: 'CA$120', tone: 'peach', tag: 'Garlands',
      badge: 'Most popular',
      blurb: 'A lush, full garland in your colours — the showstopper of any space.',
    },
    {
      name: '16 ft Organic Garland', price: 'CA$185', tone: 'gold', tag: 'Garlands',
      blurb: 'Big, bold and beautiful — built to frame a whole feature wall.',
    },
    {
      name: 'Balloon Stack / Centrepiece', price: 'CA$60', tone: 'lilac', tag: 'Centrepieces',
      blurb: 'A charming stacked centrepiece to make every table feel special.',
    },
    {
      name: 'Balloon Tower / Column', price: 'CA$80', tone: 'powder', tag: 'Columns',
      blurb: 'A standing column to frame an entrance, stage, or photo corner.',
    },
    {
      name: 'Golden Arch — full fill', price: 'CA$200', tone: 'gold', tag: 'Arches',
      badge: 'Statement',
      blurb: 'Our golden arch, fully filled — an unforgettable backdrop.',
    },
  ],
  eventTypes: ['Birthdays', 'Weddings', 'Baby showers', 'Anniversaries', 'Corporate', 'Grand openings'],
  steps: [
    { n: '01', t: 'Tell me your vision', d: "Share your date, colours, and the vibe you're dreaming of." },
    { n: '02', t: 'I design your pieces', d: 'I plan garlands, columns and centrepieces to match your space.' },
    { n: '03', t: 'Delivered & installed', d: 'I bring it to life on-site — you just enjoy the day.' },
  ],
};

const GRADS = {
  blush:  'linear-gradient(135deg, #F7DCD9 0%, #EFC5C5 100%)',
  peach:  'linear-gradient(135deg, #F7E0CC 0%, #F3CBA8 100%)',
  gold:   'linear-gradient(135deg, #F6EAD0 0%, #E6CB8E 100%)',
  sage:   'linear-gradient(135deg, #E1EADF 0%, #AFC3AC 100%)',
  powder: 'linear-gradient(135deg, #E2EEF3 0%, #B7D2DD 100%)',
  lilac:  'linear-gradient(135deg, #EEE6F2 0%, #C9B6D6 100%)',
};

/* ── State ────────────────────────────────────────────────────────────────── */

const state = {
  page: 'home',
  servicesFilter: 'All',
  contactSent: false,
  contactOccasion: 'Birthdays',
};

/* ── Component helpers ────────────────────────────────────────────────────── */

function btn(label, variant, size, attrs) {
  return `<button class="btn btn--${variant} btn--${size}" ${attrs || ''}>${label}</button>`;
}

function btnNav(label, variant, size, page) {
  return btn(label, variant, size, `data-nav="${page}"`);
}

function tag(label, tone, solid, size) {
  const cls = ['tag', `tag--${tone}`, solid ? 'tag--solid' : '', size ? `tag--${size}` : '']
    .filter(Boolean).join(' ');
  return `<span class="${cls}">${label}</span>`;
}

function balloonDots() {
  return `<span class="balloon-dots">
    <span class="balloon-dot" style="background:var(--balloon-blush)"></span>
    <span class="balloon-dot" style="background:var(--rose-500)"></span>
    <span class="balloon-dot" style="background:var(--gold-400)"></span>
  </span>`;
}

function sectionHeading({ eyebrow, title, script, lead, center, dark }) {
  const wrap = ['section-heading', center ? 'section-heading--center' : ''].filter(Boolean).join(' ');
  return `<div class="${wrap}">
    ${eyebrow ? `<span class="section-heading__eyebrow${dark ? ' section-heading__eyebrow--dark' : ''}">${eyebrow}</span>` : ''}
    <h2 class="section-heading__title${dark ? ' section-heading__title--dark' : ''}">
      ${title}${script ? `<span class="section-heading__script${dark ? ' section-heading__script--dark' : ''}">${script}</span>` : ''}
    </h2>
    ${lead ? `<p class="section-heading__lead${dark ? ' section-heading__lead--dark' : ''}">${lead}</p>` : ''}
  </div>`;
}

function serviceCardHTML(s) {
  const unit = s.tag === 'Garlands' ? '/ garland' : '';
  return `<div class="service-card">
    <div class="service-card__image" style="background:${GRADS[s.tone] || GRADS.blush}">
      <span class="service-card__placeholder">Prettily Popped</span>
      ${s.badge ? `<div class="service-card__badge">${tag(s.badge, 'gold', true, 'sm')}</div>` : ''}
    </div>
    <div class="service-card__body">
      <h3 class="service-card__title">${s.name}</h3>
      ${s.blurb ? `<p class="service-card__blurb">${s.blurb}</p>` : ''}
      <div class="service-card__footer">
        <span>
          <span class="service-card__price">${s.price}</span>
          ${unit ? `<span class="service-card__unit">${unit}</span>` : ''}
        </span>
        <button class="service-card__cta" data-nav="contact">Request this <span>&rarr;</span></button>
      </div>
    </div>
  </div>`;
}

function fieldInput({ label, type, placeholder, id, required }) {
  const fid = id || label.toLowerCase().replace(/\s+/g, '-');
  return `<div class="field">
    ${label ? `<label class="field__label" for="${fid}">${label}</label>` : ''}
    <input class="field__input" id="${fid}" type="${type || 'text'}"
      placeholder="${placeholder || ''}" ${required ? 'required' : ''}>
  </div>`;
}

function fieldTextarea({ label, placeholder, id }) {
  const fid = id || label.toLowerCase().replace(/\s+/g, '-');
  return `<div class="field">
    ${label ? `<label class="field__label" for="${fid}">${label}</label>` : ''}
    <textarea class="field__input field__input--textarea" id="${fid}"
      placeholder="${placeholder || ''}"></textarea>
  </div>`;
}

/* ── Pages ────────────────────────────────────────────────────────────────── */

function homePage() {
  const heroTags = DATA.eventTypes.slice(0, 4)
    .map((e, i) => tag(e, ['rose', 'gold', 'sage', 'powder'][i]))
    .join('');

  const steps = DATA.steps.map(s => `
    <div class="card card--pad-lg card--interactive">
      <span style="font-family:var(--font-display);font-size:40px;color:var(--rose-300);font-weight:600;display:block;">${s.n}</span>
      <h3 style="font-family:var(--font-display);font-size:22px;color:var(--text-strong);margin:8px 0 6px;">${s.t}</h3>
      <p style="font-size:15px;color:var(--text-body);margin:0;line-height:1.55;">${s.d}</p>
    </div>`).join('');

  const servicePreviews = DATA.services.slice(0, 3).map(serviceCardHTML).join('');

  return `
    <!-- Hero -->
    <section style="background:linear-gradient(180deg,var(--rose-50) 0%,var(--cream) 100%);">
      <div class="container" style="padding-block:64px 72px;display:grid;grid-template-columns:1.05fr 0.95fr;gap:48px;align-items:center;">
        <div>
          <span style="font-family:var(--font-script);font-size:30px;color:var(--primary);display:block;">Hello &amp; welcome &mdash;</span>
          <h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(40px,5.5vw,68px);line-height:1.02;letter-spacing:-0.025em;color:var(--plum-900);margin:8px 0 18px;">
            Let&rsquo;s make your<br>next event truly <em style="font-style:italic;color:var(--primary);">pop</em>.
          </h1>
          <p style="font-size:18px;line-height:1.6;color:var(--text-body);max-width:46ch;margin:0 0 28px;">
            Custom balloon decor, garlands and event styling &mdash; handmade in Fredericton,
            with delivery and installation included. Big or small, I&rsquo;d love to bring your vision to life.
          </p>
          <div style="display:flex;gap:14px;flex-wrap:wrap;">
            ${btnNav('Browse services', 'primary', 'lg', 'services')}
            ${btnNav('Book now', 'secondary', 'lg', 'contact')}
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:26px;">
            ${heroTags}
          </div>
        </div>

        <div style="aspect-ratio:4/5;border-radius:var(--radius-xl);overflow:hidden;background:linear-gradient(150deg,#F7DCD9 0%,#EFC5C5 45%,#E6CB8E 100%);box-shadow:var(--shadow-lg);position:relative;display:flex;align-items:center;justify-content:center;">
          <span style="font-family:var(--font-script);font-size:38px;color:rgba(58,34,48,0.30);text-align:center;line-height:1.2;">your photo<br>here</span>
          <div style="position:absolute;bottom:16px;left:16px;">${tag('Organic balloon garland', 'plum', true)}</div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="container" style="padding-block:72px;">
      ${sectionHeading({ eyebrow: 'How it works', title: 'Three easy steps to a', script: 'popping party', center: true })}
      <div class="grid-3" style="margin-top:40px;">${steps}</div>
    </section>

    <!-- Services preview -->
    <section style="background:var(--surface-shell);">
      <div class="container" style="padding-block:72px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap;margin-bottom:36px;">
          ${sectionHeading({ eyebrow: 'What I offer', title: 'Balloons for every', script: 'occasion' })}
          ${btnNav('See all services &rarr;', 'ghost', 'md', 'services')}
        </div>
        <div class="grid-3 grid-3--gap-lg">${servicePreviews}</div>
      </div>
    </section>

    <!-- About teaser -->
    <section style="padding-block:80px;text-align:center;">
      <div class="container--narrow">
        <span style="font-family:var(--font-script);font-size:32px;color:var(--primary);display:block;">Meet your balloon artist</span>
        <p style="font-family:var(--font-display);font-size:clamp(24px,3vw,34px);line-height:1.3;color:var(--text-strong);margin:14px 0 24px;letter-spacing:-0.01em;">
          &ldquo;I take such pride in my work and simply love seeing a vision come to life by my own two hands.&rdquo;
        </p>
        ${btnNav('Read my story', 'secondary', 'md', 'about')}
      </div>
    </section>

    <!-- CTA band -->
    <section class="cta-band">
      <div class="cta-band__inner">
        ${sectionHeading({ eyebrow: 'Ready when you are', title: "Let&rsquo;s make your event", script: 'unforgettable', center: true, dark: true })}
        <div style="margin-top:28px;display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          ${btnNav('Request a quote', 'primary', 'lg', 'contact')}
          ${btnNav('View the gallery', 'gold', 'lg', 'gallery')}
        </div>
      </div>
    </section>`;
}

function servicesPage() {
  const cats = ['All', 'Garlands', 'Centrepieces', 'Columns', 'Arches'];
  const shown = state.servicesFilter === 'All'
    ? DATA.services
    : DATA.services.filter(s => s.tag === state.servicesFilter);

  const filterBtns = cats.map(c => {
    const active = c === state.servicesFilter;
    return `<button class="btn btn--${active ? 'primary' : 'secondary'} btn--md" data-filter="${c}">${c}</button>`;
  }).join('');

  const cards = shown.map(serviceCardHTML).join('');

  return `
    <section style="background:linear-gradient(180deg,var(--rose-50),var(--cream));">
      <div class="container" style="padding-block:56px 40px;">
        ${sectionHeading({
          eyebrow: 'Services &amp; pricing',
          title: 'Pick your',
          script: 'pop',
          lead: "Every piece is custom-built in your colours. Delivery and installation in the Fredericton area are included &mdash; I'll travel a little further for a small mileage fee.",
        })}
      </div>
    </section>

    <section class="container" style="padding-block:32px 80px;">
      <div class="filter-row">${filterBtns}</div>
      <div class="grid-3 grid-3--gap-lg">${cards}</div>
      <div class="upsell-banner">
        <div>
          <h3 class="upsell-banner__title">Something bigger in mind?</h3>
          <p class="upsell-banner__body">Custom arches, full-room styling and themed installs are my favourite. Let&rsquo;s dream it up together!</p>
        </div>
        ${btnNav('Request a custom quote', 'gold', 'lg', 'contact')}
      </div>
    </section>`;
}

function galleryPage() {
  const tiles = [
    { t: 'Birthday garland',    tone: 'blush',  span: 2, row: 2 },
    { t: 'Wedding arch',        tone: 'gold',   span: 1, row: 1 },
    { t: 'Baby shower',         tone: 'powder', span: 1, row: 1 },
    { t: 'Tabletop clusters',   tone: 'sage',   span: 1, row: 1 },
    { t: 'Golden arch',         tone: 'gold',   span: 2, row: 2 },
    { t: 'Anniversary column',  tone: 'lilac',  span: 1, row: 1 },
    { t: 'Grand opening',       tone: 'peach',  span: 1, row: 1 },
    { t: 'Corporate event',     tone: 'blush',  span: 1, row: 1 },
  ];

  const tileHTML = tiles.map(tile => `
    <div class="gallery-tile" style="grid-column:span ${tile.span};grid-row:span ${tile.row};background:${GRADS[tile.tone]};">
      <div class="gallery-tile__label">${tag(tile.t, 'plum', true, 'sm')}</div>
    </div>`).join('');

  return `
    <section class="container" style="padding-block:56px 80px;">
      ${sectionHeading({
        eyebrow: 'Gallery',
        title: 'A few of my favourite',
        script: 'creations',
        lead: 'A peek at recent pieces. Swap these placeholders for your own event photos.',
        center: true,
      })}
      <div class="gallery-grid" style="margin-top:40px;">${tileHTML}</div>
      <div style="text-align:center;margin-top:44px;">
        ${btnNav('Start your own', 'primary', 'lg', 'contact')}
      </div>
    </section>`;
}

function aboutPage() {
  const values = [
    ['Made by hand', 'Every garland and column is built by me, piece by piece &mdash; never mass-produced.'],
    ['Your colours, your vibe', 'I design around your theme so it feels unmistakably yours.'],
    ['Stress-free', 'I deliver and install on-site, so you can simply enjoy the day.'],
  ];

  return `
    <section class="container" style="padding-block:64px;display:grid;grid-template-columns:0.85fr 1.15fr;gap:52px;align-items:center;">
      <div style="aspect-ratio:4/5;border-radius:var(--radius-xl);background:linear-gradient(150deg,#EEE6F2,#C9B6D6 60%,#EFC5C5);box-shadow:var(--shadow-lg);display:flex;align-items:center;justify-content:center;">
        <span style="font-family:var(--font-script);font-size:34px;color:rgba(58,34,48,0.30);">Erin&rsquo;s photo</span>
      </div>
      <div>
        <span style="font-family:var(--font-script);font-size:30px;color:var(--primary);display:block;">Hello, I&rsquo;m Erin</span>
        <h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(32px,4vw,48px);line-height:1.08;letter-spacing:-0.02em;color:var(--plum-900);margin:8px 0 22px;">
          Owner &amp; balloon artist behind Prettily Popped.
        </h1>
        <div style="font-size:17px;line-height:1.7;color:var(--text-body);">
          <p>I&rsquo;ve always had a strong passion for all things party and event related. I&rsquo;ve been part of
            SO many gatherings where my role was to design, decorate and perfect the space &mdash; a role I
            <strong>love</strong>, take seriously and, quite frankly, am good at!</p>
          <p>After building a giant balloon garland for a work event and hearing how much everyone
            enjoyed it, I thought: hey, I just might have something here&hellip; And so, Prettily Popped was born.</p>
          <p>I&rsquo;m having so much fun creating custom pieces for my hometown of Fredericton &mdash; and I&rsquo;m certain
            I can make your next event pop, big or small.</p>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin:24px 0 28px;">
          ${tag('Handmade', 'rose')}
          ${tag('Fredericton, NB', 'gold')}
          ${tag('Delivery &amp; install', 'sage')}
        </div>
        ${btnNav("Let&rsquo;s work together", 'primary', 'lg', 'contact')}
      </div>
    </section>

    <section class="values-strip">
      <div class="values-strip__inner">
        ${values.map(([t, d]) => `
          <div>
            <h3 class="values-strip__title">${t}</h3>
            <p class="values-strip__body">${d}</p>
          </div>`).join('')}
      </div>
    </section>`;
}

function contactPage() {
  const infoRows = [
    ['Where', 'Fredericton &amp; surrounding areas'],
    ['Travel', 'A little further for a small mileage fee'],
    ['Email', 'hello@prettilypopped.com'],
  ].map(([k, v]) => `
    <div style="display:flex;gap:14px;align-items:baseline;">
      <span style="font-family:var(--font-body);text-transform:uppercase;letter-spacing:0.12em;font-size:11px;font-weight:700;color:var(--primary);width:64px;flex:none;">${k}</span>
      <span style="font-size:15.5px;color:var(--text-strong);">${v}</span>
    </div>`).join('');

  const occasionBtns = DATA.eventTypes.map(t => `
    <button class="occasion-btn" type="button" data-occasion="${t}">
      ${tag(t, t === state.contactOccasion ? 'rose' : 'plum', t === state.contactOccasion)}
    </button>`).join('');

  const formContent = state.contactSent
    ? `<div style="text-align:center;padding:28px 8px;">
        <div style="font-family:var(--font-script);font-size:40px;color:var(--primary);margin-bottom:10px;">Yay &mdash; thank you!</div>
        <p style="font-size:16px;color:var(--text-body);margin:0 0 22px;">
          Your request is on its way. I&rsquo;ll be in touch very soon to start planning your pieces!
        </p>
        <button class="btn btn--secondary btn--md" data-action="reset-contact">Send another</button>
      </div>`
    : `<form id="contact-form" novalidate style="display:flex;flex-direction:column;gap:16px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          ${fieldInput({ label: 'Your name', placeholder: 'Erin', required: true })}
          ${fieldInput({ label: 'Email', type: 'email', placeholder: 'you@email.com', required: true })}
        </div>
        ${fieldInput({ label: 'Event date', placeholder: 'e.g. Saturday, July 12' })}
        <div>
          <label class="field__label" style="display:block;margin-bottom:8px;">Occasion</label>
          <div class="occasion-tags" id="occasion-tags">${occasionBtns}</div>
        </div>
        ${fieldTextarea({ label: 'Tell me about your vision', placeholder: 'Colours, theme, size of space…' })}
        <button type="submit" class="btn btn--primary btn--lg btn--full">Send my request</button>
      </form>`;

  return `
    <section style="background:linear-gradient(180deg,var(--rose-50),var(--cream));">
      <div style="max-width:960px;margin-inline:auto;padding:64px 28px 80px;display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:start;">
        <div>
          ${sectionHeading({ eyebrow: 'Get in touch', title: "Let&rsquo;s make it", script: 'pop' })}
          <p style="font-size:17px;line-height:1.65;color:var(--text-body);margin:18px 0 28px;">
            Tell me a little about your event and I&rsquo;ll get back to you within a day with ideas and a quote.
            No question is too big or too small!
          </p>
          <div style="display:flex;flex-direction:column;gap:16px;">${infoRows}</div>
        </div>
        <div class="card card--pad-lg" style="box-shadow:var(--shadow-md);">${formContent}</div>
      </div>
    </section>`;
}

/* ── Shell (nav + footer) ─────────────────────────────────────────────────── */

function navHTML() {
  const pages = ['home', 'services', 'gallery', 'about', 'contact'];
  const labels = { home: 'Home', services: 'Services', gallery: 'Gallery', about: 'About', contact: 'Contact' };
  const links = pages.map(p => `
    <button class="site-nav__link${state.page === p ? ' is-active' : ''}" data-nav="${p}">
      ${labels[p]}
    </button>`).join('');

  return `<header class="site-nav">
    <div class="site-nav__inner">
      <button class="site-nav__logo" data-nav="home">
        ${balloonDots()}
        <span class="site-nav__wordmark">Prettily <em>Popped</em></span>
      </button>
      <nav class="site-nav__links">
        ${links}
        <div class="site-nav__cta">
          ${btnNav('Book now', 'primary', 'sm', 'contact')}
        </div>
      </nav>
    </div>
  </header>`;
}

function footerHTML() {
  const pages = ['home', 'services', 'gallery', 'about', 'contact'];
  const labels = { home: 'Home', services: 'Services', gallery: 'Gallery', about: 'About', contact: 'Contact' };
  const links = pages.map(p => `<button class="site-footer__nav-link" data-nav="${p}">${labels[p]}</button>`).join('');

  return `<footer class="site-footer">
    <div class="site-footer__inner">
      <div>
        <p class="site-footer__wordmark">Prettily <em>Popped</em></p>
        <p class="site-footer__tagline">Custom balloon decor &amp; event styling, handmade in Fredericton, New Brunswick.</p>
        <span class="site-footer__sign">&mdash; Erin</span>
      </div>
      <div>
        <p class="site-footer__col-head">Explore</p>
        ${links}
      </div>
      <div>
        <p class="site-footer__col-head">Get in touch</p>
        <p class="site-footer__text">Fredericton &amp; surrounding areas</p>
        <p class="site-footer__text">Will travel for a small mileage fee</p>
        <p class="site-footer__text">hello@prettilypopped.com</p>
      </div>
    </div>
    <div class="site-footer__copy">&copy; 2023&ndash;2026 Prettily Made Events &middot; Make your event pop</div>
  </footer>`;
}

/* ── Renderer ─────────────────────────────────────────────────────────────── */

function renderPage() {
  const pages = { home: homePage, services: servicesPage, gallery: galleryPage, about: aboutPage, contact: contactPage };
  document.getElementById('main').innerHTML = (pages[state.page] || homePage)();
  updateNavState();
}

function updateNavState() {
  document.querySelectorAll('.site-nav__link').forEach(el => {
    el.classList.toggle('is-active', el.dataset.nav === state.page);
  });
}

/* ── Navigation ───────────────────────────────────────────────────────────── */

function navigate(page) {
  state.page = page;
  renderPage();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Event delegation ─────────────────────────────────────────────────────── */

document.addEventListener('click', (e) => {
  const navEl = e.target.closest('[data-nav]');
  if (navEl) {
    navigate(navEl.dataset.nav);
    return;
  }

  const filterEl = e.target.closest('[data-filter]');
  if (filterEl) {
    state.servicesFilter = filterEl.dataset.filter;
    renderPage();
    return;
  }

  const occasionEl = e.target.closest('[data-occasion]');
  if (occasionEl) {
    state.contactOccasion = occasionEl.dataset.occasion;
    // Update occasion tags in place without re-rendering the whole form
    const container = document.getElementById('occasion-tags');
    if (container) {
      container.querySelectorAll('[data-occasion]').forEach(btn => {
        const occ = btn.dataset.occasion;
        const isSelected = occ === state.contactOccasion;
        btn.innerHTML = tag(occ, isSelected ? 'rose' : 'plum', isSelected);
      });
    }
    return;
  }

  const resetEl = e.target.closest('[data-action="reset-contact"]');
  if (resetEl) {
    state.contactSent = false;
    state.contactOccasion = 'Birthdays';
    renderPage();
    return;
  }
});

document.addEventListener('submit', (e) => {
  if (e.target.id === 'contact-form') {
    e.preventDefault();
    state.contactSent = true;
    renderPage();
  }
});

/* ── Init ─────────────────────────────────────────────────────────────────── */

document.getElementById('header-slot').innerHTML = navHTML();
document.getElementById('footer-slot').innerHTML = footerHTML();
renderPage();
