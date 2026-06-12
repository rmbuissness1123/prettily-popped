// Prettily Popped — site navigation
const { Button: PPButton } = window.PrettilyPoppedDesignSystem_13a0cc;

function PPNav({ current, onNav }) {
  const links = ['Home', 'Services', 'Gallery', 'About', 'Contact'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(251,244,239,0.82)', backdropFilter: 'blur(12px)',
      borderBottom: '1.5px solid var(--border-soft)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px',
      }}>
        <button onClick={() => onNav('Home')} style={{
          display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer',
        }}>
          <span style={{ display: 'inline-flex', gap: '3px' }}>
            <span style={dot('var(--balloon-blush)')}></span>
            <span style={dot('var(--rose-500)')}></span>
            <span style={dot('var(--gold-400)')}></span>
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '22px', color: 'var(--plum-900)', letterSpacing: '-0.01em' }}>
            Prettily <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Popped</em>
          </span>
        </button>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {links.map((l) => (
            <button key={l} onClick={() => onNav(l)} style={{
              fontFamily: 'var(--font-body)', fontSize: '14.5px', fontWeight: 600,
              color: current === l ? 'var(--berry-600)' : 'var(--text-body)',
              background: current === l ? 'var(--rose-50)' : 'transparent',
              border: 'none', cursor: 'pointer', padding: '8px 14px', borderRadius: 'var(--radius-pill)',
              transition: 'background var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft)',
            }}>{l}</button>
          ))}
          <div style={{ marginLeft: '8px' }}>
            <PPButton variant="primary" size="sm" onClick={() => onNav('Contact')}>Book a consult</PPButton>
          </div>
        </nav>
      </div>
    </header>
  );
}

function dot(bg) {
  return { width: '11px', height: '14px', background: bg, borderRadius: '50% 50% 50% 50% / 46% 46% 54% 54%' };
}

window.PPNav = PPNav;
