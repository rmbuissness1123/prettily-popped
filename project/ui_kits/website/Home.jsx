// Prettily Popped — Home screen
const PPDS = window.PrettilyPoppedDesignSystem_13a0cc;

function PPHome({ onNav }) {
  const { Button, Tag, ServiceCard, SectionHeading, Card } = PPDS;
  const data = window.PPData;

  return (
    <div>
      {/* ---- Hero ---- */}
      <section style={{ background: 'linear-gradient(180deg, var(--rose-50) 0%, var(--cream) 100%)' }}>
        <div style={{
          maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px 72px',
          display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '48px', alignItems: 'center',
        }}>
          <div>
            <span style={{ fontFamily: 'var(--font-script)', fontSize: '30px', color: 'var(--primary)' }}>Hello &amp; welcome —</span>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(40px, 5.5vw, 68px)',
              lineHeight: 1.02, letterSpacing: '-0.025em', color: 'var(--plum-900)', margin: '8px 0 18px',
            }}>
              Let's make your<br/>next event truly <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>pop</em>.
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'var(--text-body)', maxWidth: '46ch', margin: '0 0 28px' }}>
              Custom balloon decor, garlands and event styling — handmade in Fredericton,
              with delivery and installation included. Big or small, I'd love to bring your vision to life.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => onNav('Services')}>Browse services</Button>
              <Button variant="secondary" size="lg" onClick={() => onNav('Contact')}>Book a consult</Button>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '26px' }}>
              {data.eventTypes.slice(0, 4).map((e, i) => (
                <Tag key={e} tone={['rose','gold','sage','powder'][i]}>{e}</Tag>
              ))}
            </div>
          </div>

          {/* hero image placeholder */}
          <div style={{
            aspectRatio: '4 / 5', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            background: 'linear-gradient(150deg, #F7DCD9 0%, #EFC5C5 45%, #E6CB8E 100%)',
            boxShadow: 'var(--shadow-lg)', position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-script)', fontSize: '38px', color: 'rgba(58,34,48,0.30)', textAlign: 'center', lineHeight: 1.2 }}>
              your photo<br/>here
            </span>
            <div style={{ position: 'absolute', bottom: '16px', left: '16px' }}>
              <Tag tone="plum" solid>Organic balloon garland</Tag>
            </div>
          </div>
        </div>
      </section>

      {/* ---- How it works ---- */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 28px' }}>
        <SectionHeading align="center" eyebrow="How it works" title="Three easy steps to a" script="popping party" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px', marginTop: '40px' }}>
          {data.steps.map((s) => (
            <Card key={s.n} padding="lg" interactive>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '40px', color: 'var(--rose-300)', fontWeight: 600 }}>{s.n}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--text-strong)', margin: '8px 0 6px' }}>{s.t}</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-body)', margin: 0, lineHeight: 1.55 }}>{s.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ---- Services preview ---- */}
      <section style={{ background: 'var(--surface-shell)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '72px 28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px', flexWrap: 'wrap', marginBottom: '36px' }}>
            <SectionHeading eyebrow="What I offer" title="Balloons for every" script="occasion" />
            <Button variant="ghost" onClick={() => onNav('Services')}>See all services →</Button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '22px' }}>
            {data.services.slice(0, 3).map((s) => (
              <ServiceCard key={s.name} {...s} onSelect={() => onNav('Contact')} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- About teaser ---- */}
      <section style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: '80px 28px', textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-script)', fontSize: '32px', color: 'var(--primary)' }}>Meet your balloon artist</span>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 34px)', lineHeight: 1.3, color: 'var(--text-strong)', margin: '14px 0 24px', letterSpacing: '-0.01em' }}>
          "I take such pride in my work and simply love seeing a vision come to life by my own two hands."
        </p>
        <Button variant="secondary" onClick={() => onNav('About')}>Read my story</Button>
      </section>

      {/* ---- CTA band ---- */}
      <section style={{ background: 'var(--surface-ink)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px', textAlign: 'center' }}>
          <SectionHeading align="center" onDark eyebrow="Ready when you are" title="Let's make your event" script="unforgettable" />
          <div style={{ marginTop: '28px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => onNav('Contact')}>Request a quote</Button>
            <Button variant="gold" size="lg" onClick={() => onNav('Gallery')}>View the gallery</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.PPHome = PPHome;
