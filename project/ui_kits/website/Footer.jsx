// Prettily Popped — site footer
function PPFooter({ onNav }) {
  return (
    <footer style={{ background: 'var(--surface-ink)', color: 'var(--text-on-ink)' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px 32px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '40px',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '26px', color: '#fff', marginBottom: '10px' }}>
            Prettily <em style={{ fontStyle: 'italic', color: 'var(--rose-300)' }}>Popped</em>
          </div>
          <p style={{ fontSize: '14.5px', lineHeight: 1.6, maxWidth: '34ch', opacity: 0.82, margin: '0 0 14px' }}>
            Custom balloon decor & event styling, handmade in Fredericton, New Brunswick.
          </p>
          <span style={{ fontFamily: 'var(--font-script)', fontSize: '26px', color: 'var(--gold-400)' }}>— Erin</span>
        </div>

        <div>
          <p style={ftHead}>Explore</p>
          {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((l) => (
            <button key={l} onClick={() => onNav(l)} style={ftLink}>{l}</button>
          ))}
        </div>

        <div>
          <p style={ftHead}>Get in touch</p>
          <p style={ftText}>Fredericton & surrounding areas</p>
          <p style={ftText}>Will travel for a small mileage fee</p>
          <p style={ftText}>hello@prettilypopped.com</p>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid rgba(247,231,226,0.14)', padding: '18px 28px',
        textAlign: 'center', fontSize: '12.5px', opacity: 0.6,
      }}>© 2023–2026 Prettily Made Events · Make your event pop</div>
    </footer>
  );
}

const ftHead = { fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.14em',
  fontSize: '11px', fontWeight: 700, color: 'var(--gold-400)', margin: '0 0 14px' };
const ftLink = { display: 'block', background: 'none', border: 'none', cursor: 'pointer', padding: '5px 0',
  fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-on-ink)', opacity: 0.82, textAlign: 'left' };
const ftText = { fontFamily: 'var(--font-body)', fontSize: '14px', margin: '0 0 9px', opacity: 0.82, lineHeight: 1.5 };

window.PPFooter = PPFooter;
