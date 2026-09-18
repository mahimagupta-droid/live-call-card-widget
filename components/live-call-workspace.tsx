'use client'

import { useEffect, useState } from 'react'
import { Headphones, Sparkles } from 'lucide-react'

const transcript = [
  { speaker: 'customer', name: 'Customer', text: 'That sounds expensive.', objection: true },
  { speaker: 'rep', name: 'Rep', text: 'I hear you. Let’s look at the return together.' },
]

export function LiveCallWorkspace() {
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setCycle((value) => value + 1), 6500)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="workspace-panel" aria-label="Frontier live call workspace">
      <header className="coach-bar">
        <div className="frontier-mark"><Sparkles size={13} /> Frontier</div>
        <div className="coach-state" aria-live="polite">
          <span className="state-listening">listening</span>
          <span className="state-thinking"><i /> thinking</span>
          <span className="state-ready">ready</span>
        </div>
      </header>
      <div className="workspace-divider" />
      <div className="transcript" aria-live="polite">
        {transcript.map((line, index) => (
          <div className={`transcript-row ${line.speaker}`} key={line.text} data-cycle={cycle}>
            <div className="transcript-meta"><Headphones size={11} /> {line.name}</div>
            <p>{line.text}</p>
            {line.objection && <aside className="inline-suggestion"><strong>Objection cue</strong><span>• Ask what they’re comparing it to</span><em>steady</em></aside>}
            {index === 0 && <span className="final-state">is_final: true</span>}
          </div>
        ))}
      </div>
      <footer className="workspace-footer"><span className="footer-live-dot" /> Listening for the next turn <span>trigger_seq anchored</span></footer>
    </section>
  )
}

export default LiveCallWorkspace
