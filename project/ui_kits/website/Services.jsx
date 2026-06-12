// Prettily Popped — Services screen (filterable grid)
function PPServices({ onNav }) {
  const { Button, Tag, ServiceCard, SectionHeading } = window.PrettilyPoppedDesignSystem_13a0cc;
  const data = window.PPData;
  const cats = ['All', 'Garlands', 'Centrepieces', 'Columns', 'Arches'];
  const [cat, setCat] = React.useState('All');
  const shown = cat === 'All' ? data.services : data.services.filter((s) => s.tag === cat);

  return (
    <div>
      <section style={{ background: 'linear-gradient(180deg, var(--rose-50), var(--cream))' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px 40px' }}>
          <SectionHeading eyebrow="Services & pricing" title="Pick your" script="pop"
            lead="Every piece is custom-built in your colours. Delivery and installation in the Fredericton area are included — I'll travel a little further for a small mileage fee." />
        </div>
      </section>

      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '32px 28px 80px' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} style={{
              fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
              padding: '9px 18px', borderRadius: 'var(--radius-pill)',
              border: '1.5px solid ' + (cat === c ? 'transparent' : 'var(--border-strong)'),
              background: cat === c ? 'var(--primary)' : 'var(--white-warm)',
              color: cat === c ? '#fff' : 'var(--text-body)',
              transition: 'all var(--dur-base) var(--ease-soft)',
            }}>{c}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {shown.map((s) => (
            <ServiceCard key={s.name} {...s} unit={s.tag === 'Garlands' ? '/ garland' : ''} onSelect={() => onNav('Contact')} />
          ))}
        </div>

        <div style={{
          marginTop: '48px', padding: '32px 36px', borderRadius: 'var(--radius-lg)',
          background: 'var(--surface-soft)', border: '1.5px solid var(--rose-100)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap',
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--text-strong)', margin: '0 0 6px' }}>
              Something bigger in mind?
            </h3>
            <p style={{ margin: 0, color: 'var(--text-body)', fontSize: '15px' }}>
              Custom arches, full-room styling and themed installs are my favourite. Let's dream it up together!
            </p>
          </div>
          <Button variant="gold" size="lg" onClick={() => onNav('Contact')}>Request a custom quote</Button>
        </div>
      </section>
    </div>
  );
}

window.PPServices = PPServices;
