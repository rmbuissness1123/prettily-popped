// Prettily Popped — Contact / quote request screen
function PPContact({ onNav }) {
  const { Button, Tag, Input, Card, SectionHeading } = window.PrettilyPoppedDesignSystem_13a0cc;
  const data = window.PPData;
  const [sent, setSent] = React.useState(false);
  const [type, setType] = React.useState('Birthdays');

  return (
    <section style={{ background: 'linear-gradient(180deg, var(--rose-50), var(--cream))' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '64px 28px 80px',
        display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'start' }}>
        <div>
          <SectionHeading eyebrow="Get in touch" title="Let's make it" script="pop" />
          <p style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--text-body)', margin: '18px 0 28px' }}>
            Tell me a little about your event and I'll get back to you within a day with ideas and a quote.
            No question is too big or too small!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              ['Where', 'Fredericton & surrounding areas'],
              ['Travel', 'A little further for a small mileage fee'],
              ['Email', 'hello@prettilypopped.com'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: '14px', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.12em',
                  fontSize: '11px', fontWeight: 700, color: 'var(--primary)', width: '64px', flex: 'none' }}>{k}</span>
                <span style={{ fontSize: '15.5px', color: 'var(--text-strong)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        <Card padding="lg" tone="card" style={{ boxShadow: 'var(--shadow-md)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '28px 8px' }}>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: '40px', color: 'var(--primary)', marginBottom: '10px' }}>Yay — thank you!</div>
              <p style={{ fontSize: '16px', color: 'var(--text-body)', margin: '0 0 22px' }}>
                Your request is on its way. I'll be in touch very soon to start planning your pieces!
              </p>
              <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <Input label="Your name" placeholder="Erin" required />
                <Input label="Email" type="email" placeholder="you@email.com" required />
              </div>
              <Input label="Event date" type="text" placeholder="e.g. Saturday, July 12" />
              <div>
                <label style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
                  color: 'var(--text-strong)', paddingLeft: '4px', display: 'block', marginBottom: '8px' }}>Occasion</label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {data.eventTypes.map((t) => (
                    <button type="button" key={t} onClick={() => setType(t)}
                      style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}>
                      <Tag tone={type === t ? 'rose' : 'plum'} solid={type === t}>{t}</Tag>
                    </button>
                  ))}
                </div>
              </div>
              <Input label="Tell me about your vision" textarea placeholder="Colours, theme, size of space…" />
              <Button variant="primary" size="lg" fullWidth type="submit">Send my request</Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

window.PPContact = PPContact;
