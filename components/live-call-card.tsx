'use client'

import { Phone, PhoneCall, Sparkles, ArrowUpRight, Circle } from 'lucide-react'

const leads = [
  { name: 'Maya Chen', number: '(415) 555-0184', state: 'skipped' },
  { name: 'Jordan Bell', number: '(312) 555-0128', state: 'connected' },
  { name: 'Alex Rivera', number: '(646) 555-0196', state: 'dialing' },
]

export function LiveCallCard() {
  return (
    <section className="live-widget" aria-label="AutoCaller and Live AI product preview">
      <div className="widget-header">
        <div className="brand-mark" aria-hidden="true"><PhoneCall size={15} strokeWidth={2.2} /></div>
        <div>
          <p className="eyebrow">Live call preview</p>
          <h1>From first dial to best next line.</h1>
        </div>
        <div className="live-indicator"><span /> Live</div>
      </div>

      <div className="timeline" aria-hidden="true"><span /><span /><span /><span /></div>

      <div className="beat-label beat-auto"><span className="status-chip purple"><Phone size={11} /> AutoCaller</span><span className="beat-copy">Parallel dialing</span></div>
      <div className="beat-label beat-ai"><span className="status-chip purple"><Sparkles size={11} /> Live AI</span><span className="beat-copy">Call guidance</span></div>

      <div className="lead-list">
        {leads.map((lead, index) => (
          <div className={`lead-row lead-${lead.state}`} key={lead.name}>
            <div className="lead-avatar">{lead.name.split(' ').map((n) => n[0]).join('')}</div>
            <div className="lead-info"><strong>{lead.name}</strong><span>{lead.number}</span></div>
            {lead.state === 'skipped' ? <span className="skip-label">voicemail · skipped</span> : lead.state === 'connected' ? <span className="connected-label">connected <ArrowUpRight size={12} /></span> : <span className="dial-pulse"><Phone size={13} /></span>}
          </div>
        ))}
      </div>

      <div className="call-card">
        <div className="call-topline"><div className="lead-avatar active">JB</div><div><strong>Jordan Bell</strong><span>(312) 555-0128</span></div><span className="live-dot"><i /> LIVE</span></div>
        <div className="call-status"><span className="status-word status-connecting">connecting</span><span className="status-word status-ringing">ringing</span><span className="status-word status-live">live</span></div>
        <div className="call-meta"><span><Circle size={8} fill="currentColor" /> 00:18</span><span>Sales · outbound</span></div>
      </div>

      <div className="transcript">
        <div className="transcript-head"><span>Live transcript</span><span className="bars"><i /><i /><i /></span></div>
        <div className="transcript-line prospect"><span className="speaker">Prospect</span><span>We&apos;re trying to keep costs down.</span></div>
        <div className="transcript-line rep"><span className="speaker">You</span><span>That makes sense. What are you comparing it to?</span></div>
        <div className="transcript-line objection"><span className="speaker">Prospect</span><span>That sounds expensive.</span></div>
      </div>

      <div className="suggestion"><Sparkles size={13} /><div><span>Live AI suggestion</span><strong>Ask what they&apos;re comparing it to.</strong></div><ArrowUpRight size={14} /></div>
      <div className="reset-note">AutoCaller <span>→</span> Live AI <span>→</span> reset</div>
    </section>
  )
}
