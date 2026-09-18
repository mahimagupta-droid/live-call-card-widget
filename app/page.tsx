import { WalletBalanceMeter } from '@/components/wallet-balance-meter'

export default function Page() {
  return (
    <main className="preview-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#080808', padding: '0 28px' }}>
      <WalletBalanceMeter />
    </main>
  )
}
