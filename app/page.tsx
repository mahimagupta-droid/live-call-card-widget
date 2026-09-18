import { CallTimingComparison } from '@/components/call-timing-comparison'

export default function Page() {
  return (
    <main className="preview-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#080808', padding: '0 28px' }}>
      <CallTimingComparison />
    </main>
  )
}
