// Prettily Popped — About screen (Erin's story)
function PPAbout({ onNav }) {
  const { Button, Tag, SectionHeading } = window.PrettilyPoppedDesignSystem_13a0cc;
  return (
    <div>
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px',
        display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '52px', alignItems: 'center' }}>
        {/* portrait placeholder */}
        <div style={{
          aspectRatio: '4 / 5', borderRadius: 'var(--radius-xl)',
          background: 'linear-gradient(150deg, #EEE6F2, #C9B6D6 60%, #EFC5C5)',
          boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-script)', fontSize: '34px', color: 'rgba(58,34,48,0.30)' }}>Erin's photo</span>
        </div>

        <div>
          <span style={{ fontFamily: 'var(--font-script)', fontSize: '30px', color: 'var(--primary)' }}>Hello, I'm Erin</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--plum-900)', margin: '8px 0 22px' }}>
            Owner &amp; balloon artist behind Prettily Popped.
          </h1>
          <div style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--text-body)' }}>
            <p>I've always had a strong passion for all things party and event related. I've been part of
              SO many gatherings where my role was to design, decorate and perfect the space — a role I
              <strong> love</strong>, take seriously and, quite frankly, am good at!</p>
            <p>After building a giant balloon garland for a work event and hearing how much everyone
              enjoyed it, I thought: hey, I just might have something here. And so, Prettily Popped was born.</p>
            <p>I'm having so much fun creating custom pieces for my hometown of Fredericton — and I'm certain
              I can make your next event pop, big or small.</p>
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '24px 0 28px' }}>
            <Tag tone="rose">Handmade</Tag>
            <Tag tone="gold">Fredericton, NB</Tag>
            <Tag tone="sage">Delivery & install</Tag>
          </div>
          <Button variant="primary" size="lg" onClick={() => onNav('Contact')}>Let's work together</Button>
        </div>
      </section>

      {/* values strip */}
      <section style={{ background: 'var(--surface-shell)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {[
            ['Made by hand', 'Every garland and column is built by me, piece by piece — never mass-produced.'],
            ['Your colours, your vibe', 'I design around your theme so it feels unmistakably yours.'],
            ['Stress-free', 'I deliver and install on-site, so you can simply enjoy the day.'],
          ].map(([t, d]) => (
            <div key={t}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--text-strong)', margin: '0 0 8px' }}>{t}</h3>
              <p style={{ margin: 0, color: 'var(--text-body)', fontSize: '15px', lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

window.PPAbout = PPAbout;
