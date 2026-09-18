import { FeatureBadgeMarquee } from '@/components/feature-badge-marquee'

export default function Page() {
  return (
    <main className="preview-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#080808', padding: '0 28px' }}>
      <FeatureBadgeMarquee />
    </main>
  )
}
