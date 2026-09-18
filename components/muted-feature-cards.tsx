'use client'

import { MessageSquare, Phone, RotateCcw } from 'lucide-react'

export function MutedFeatureCards() {
  return (
    <section className="muted-features" aria-label="Common sales challenges preview">
      <div className="muted-features-header">
        <div>
          <p className="muted-eyebrow">Before Frontier</p>
          <h1>The old way keeps you waiting.</h1>
        </div>
        <span className="muted-status">Three familiar blockers</span>
      </div>

      <div className="muted-card-grid">
        <article className="muted-card manual-card">
          <div className="muted-card-topline">
            <span className="muted-card-index">01</span>
            <span className="muted-card-label">Manual dialing</span>
          </div>
          <div className="manual-stage" aria-live="polite">
            <div className="manual-phone-ring"><Phone aria-hidden="true" /></div>
            <div className="manual-copy"><strong>Calling next lead</strong><span>(312) 555-0148</span></div>
            <span className="manual-result"><Phone aria-hidden="true" /> No answer</span>
          </div>
          <div className="manual-progress"><span /></div>
          <p className="muted-card-foot"><RotateCcw aria-hidden="true" /> One call at a time</p>
        </article>

        <article className="muted-card ramp-card">
          <div className="muted-card-topline">
            <span className="muted-card-index">02</span>
            <span className="muted-card-label">Training cost</span>
          </div>
          <div className="ramp-stage" aria-live="polite">
            <div className="ramp-label"><strong>Ramp</strong><span className="ramp-day ramp-day-47">Day 47</span><span className="ramp-day ramp-day-1">Day 1</span></div>
            <div className="ramp-track"><span /></div>
            <span className="ramp-caption">Still getting up to speed</span>
          </div>
          <p className="muted-card-foot">Progress that never quite compounds</p>
        </article>

        <article className="muted-card confidence-card">
          <div className="muted-card-topline">
            <span className="muted-card-index">03</span>
            <span className="muted-card-label">Confidence ≠ skill</span>
          </div>
          <div className="confidence-stage" aria-live="polite">
            <div className="chat-bubble"><MessageSquare aria-hidden="true" /><span>We can help with...</span></div>
            <div className="typing-line"><span /><i /><i /><i /></div>
          </div>
          <p className="muted-card-foot">Hope is not a coaching system</p>
        </article>
      </div>
    </section>
  )
}
