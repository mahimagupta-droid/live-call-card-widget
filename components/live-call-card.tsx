'use client'

import { Phone, PhoneCall, Sparkles, ArrowUpRight, Circle } from 'lucide-react'

export function LiveCallCard() {
  return (
    <section className="live-widget" aria-label="Animated call status and Live AI coaching preview">
      <div className="widget-header">
        <div className="brand-mark" aria-hidden="true"><PhoneCall size={15} strokeWidth={2.2} /></div>
        <div>
          <p className="eyebrow">Live call preview</p>
          <h1>From ringing to the right next line.</h1>
        </div>
        <div className="live-indicator"><span /> Live</div>
      </div>

      <div className="timeline" aria-hidden="true"><span /></div>
      <div className="beat-label"><span className="status-chip purple"><Phone size={11} /> Live call</span><span className="beat-copy">Real-time state</span></div>

      <div className="status-pill" aria-live="polite">
        <span className="status-icon"><Phone size={12} /></span>
        <span className="pill-state pill-ringing">RINGING</span>
        <span className="pill-state pill-bridging">BRIDGING</span>
        <span className="pill-state pill-answered"><i /> ANSWERED</span>
        <span className="pill-state pill-live"><i /> LIVE</span>
        <span className="pill-state pill-completed">COMPLETED</span>
      </div>

      <div className="call-card">
        <div className="call-topline"><div className="lead-avatar active">JB</div><div><strong>Jordan Bell</strong><span>(312) 555-0128</span></div><span className="live-dot"><i /> LIVE</span></div>
        <div className="call-meta"><span><Circle size={8} fill="currentColor" /> 00:18</span><span>Sales · outbound</span></div>
      </div>

      <div className="transcript">
        <div className="transcript-head"><span>Live transcript</span><span className="bars"><i /><i /><i /></span></div>
        <div className="transcript-line prospect"><span className="speaker">Prospect</span><span>We&apos;re trying to keep costs down.</span></div>
        <div className="transcript-line rep"><span className="speaker">You</span><span>That makes sense. What are you comparing it to?</span></div>
        <div className="transcript-line objection"><span className="speaker">Prospect</span><span>That sounds expensive.</span></div>
      </div>

      <div className="suggestion"><Sparkles size={13} /><div><span>Live AI suggestion</span><strong>Objection detected</strong><em>Ask what they&apos;re comparing it to.</em></div><span className="confidence steady">steady</span><ArrowUpRight size={14} /></div>
      <div className="reset-note">state machine <span>·</span> Live AI coaching</div>
    </section>
  )
}
