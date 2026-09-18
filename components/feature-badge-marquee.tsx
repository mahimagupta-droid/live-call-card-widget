'use client'

const badges = ['Parallel dialing', 'AMD voicemail filter', 'Browser-SIP bridge', 'Live transcript', 'Inline coaching']

export function FeatureBadgeMarquee() {
  const items = [...badges, ...badges]

  return (
    <section className="badge-marquee" aria-label="Frontier capabilities" style={{ width: '100%', overflow: 'hidden' }}>
      <div className="badge-track" style={{ display: 'flex', width: 'max-content', gap: 8 }}>
        {items.map((badge, index) => (
          <span className="badge" key={`${badge}-${index}`} style={{ display: 'inline-flex', padding: '6px 10px', border: '1px solid rgba(255,255,255,.12)', borderRadius: 999, background: 'rgba(255,255,255,.06)', color: '#aaa7ae', fontSize: 11, whiteSpace: 'nowrap' }}>{badge}</span>
        ))}
      </div>
      <style jsx>{`
        .badge-marquee { width: 100%; overflow: hidden; }
        .badge-track { display: flex; width: max-content; gap: 8px; animation: badge-drift 34s linear infinite; }
        .badge-marquee:hover .badge-track { animation-play-state: paused; }
        .badge { display: inline-flex; align-items: center; padding: 6px 10px; border: 1px solid rgba(255,255,255,.1); border-radius: 999px; background: rgba(255,255,255,.045); color: #8d8991; font: 500 11px/1 Inter, sans-serif; white-space: nowrap; }
        @keyframes badge-drift { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 4px)); } }
        @media (prefers-reduced-motion: reduce) { .badge-track { animation: none; transform: translateX(0); } }
      `}</style>
    </section>
  )
}

export default FeatureBadgeMarquee
