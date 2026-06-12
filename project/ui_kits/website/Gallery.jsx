// Prettily Popped — Gallery screen (placeholder masonry)
function PPGallery({ onNav }) {
  const { Button, Tag, SectionHeading } = window.PrettilyPoppedDesignSystem_13a0cc;
  const tones = ['blush','peach','gold','sage','powder','lilac'];
  const tiles = [
    { t: 'Birthday garland', tone: 'blush', span: 2 },
    { t: 'Wedding arch', tone: 'gold', span: 1 },
    { t: 'Baby shower', tone: 'powder', span: 1 },
    { t: 'Tabletop clusters', tone: 'sage', span: 1 },
    { t: 'Golden arch', tone: 'gold', span: 2 },
    { t: 'Anniversary column', tone: 'lilac', span: 1 },
    { t: 'Grand opening', tone: 'peach', span: 1 },
    { t: 'Corporate event', tone: 'blush', span: 1 },
  ];
  const grad = {
    blush: 'linear-gradient(150deg,#F7DCD9,#EFC5C5)', peach: 'linear-gradient(150deg,#F7E0CC,#F3CBA8)',
    gold: 'linear-gradient(150deg,#F6EAD0,#E6CB8E)', sage: 'linear-gradient(150deg,#E1EADF,#AFC3AC)',
    powder: 'linear-gradient(150deg,#E2EEF3,#B7D2DD)', lilac: 'linear-gradient(150deg,#EEE6F2,#C9B6D6)',
  };

  return (
    <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px 80px' }}>
      <SectionHeading align="center" eyebrow="Gallery" title="A few of my favourite" script="creations"
        lead="A peek at recent pieces. Swap these placeholders for your own event photos." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '180px', gap: '16px', marginTop: '40px' }}>
        {tiles.map((tile, i) => (
          <div key={i} style={{
            gridColumn: 'span ' + tile.span, gridRow: tile.span === 2 ? 'span 2' : 'span 1',
            borderRadius: 'var(--radius-lg)', background: grad[tile.tone], position: 'relative', overflow: 'hidden',
            boxShadow: 'var(--shadow-sm)', cursor: 'pointer',
          }}>
            <div style={{ position: 'absolute', bottom: '14px', left: '14px' }}>
              <Tag tone="plum" solid size="sm">{tile.t}</Tag>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '44px' }}>
        <Button variant="primary" size="lg" onClick={() => onNav('Contact')}>Start your own</Button>
      </div>
    </section>
  );
}

window.PPGallery = PPGallery;
