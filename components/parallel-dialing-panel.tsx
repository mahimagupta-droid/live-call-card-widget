'use client'

import { Phone, PhoneCall, Voicemail } from 'lucide-react'

const leads = [
  { name: 'Maya Chen', phone: '(312) 555-0148', state: 'no-answer', label: 'No answer' },
  { name: 'Elliot Brooks', phone: '(415) 555-0172', state: 'failed', label: 'Voicemail — skipped' },
  { name: 'Jordan Bell', phone: '(646) 555-0128', state: 'connected', label: 'IN_PROGRESS' },
]

export function ParallelDialingPanel() {
  return (
    <section className="parallel-panel" aria-label="Parallel dialing status preview">
      <header className="parallel-header">
        <div className="parallel-heading">
          <div className="parallel-mark" aria-hidden="true"><PhoneCall size={15} /></div>
          <div>
            <p className="parallel-eyebrow">AutoCaller</p>
            <h1>Three calls. One live connection.</h1>
          </div>
        </div>
        <span className="parallel-loop"><i /> Looping preview</span>
      </header>

      <div className="parallel-progress" aria-hidden="true"><span /></div>
      <div className="parallel-state"><span className="parallel-chip">PARALLEL DIALING</span><span>Browser-SIP → PSTN bridge</span></div>

      <div className="lead-stack" aria-live="polite">
        {leads.map((lead) => (
          <article className={`parallel-lead ${lead.state}`} key={lead.name}>
            <div className="parallel-avatar" aria-hidden="true">{lead.name.split(' ').map((part) => part[0]).join('')}</div>
            <div className="parallel-lead-copy"><strong>{lead.name}</strong><span>{lead.phone}</span></div>
            <span className="lead-status pending">PENDING</span>
            <span className="lead-status ringing"><Phone size={12} /> RINGING</span>
            <span className="lead-status outcome">{lead.state === 'failed' ? <Voicemail size={12} /> : null}{lead.label}</span>
            <span className="lead-status in-progress"><i /> IN_PROGRESS</span>
          </article>
        ))}
      </div>

      <div className="bridge-card">
        <div className="bridge-topline"><span className="bridge-avatar">JB</span><div><strong>Jordan Bell</strong><span>(646) 555-0128</span></div><span className="bridge-live"><i /> LIVE</span></div>
        <div className="bridge-detail"><span><Phone size={11} /> Browser-SIP connected to PSTN</span><span>00:06</span></div>
      </div>

      <footer className="parallel-footer"><span><span className="footer-dot" /> 3 leads dialing simultaneously</span><span>Auto-filtered by AMD</span></footer>
    </section>
  )
}

export default ParallelDialingPanel

