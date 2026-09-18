const callFields = ["00:42", "Browser SIP", "PSTN bridge"]

function CallCard({ side }: { side: "typical" | "vaniger" }) {
  const isVaniger = side === "vaniger"

  return (
    <article className={`timing-card timing-card-${side}`} aria-label={`${isVaniger ? "Vaniger" : "Typical AI tool"} call timing`}>
      <div className="timing-card-header">
        <div>
          <p className="timing-card-kicker">{isVaniger ? "Vaniger" : "Typical AI tool"}</p>
          <h2>Live call</h2>
        </div>
        <span className="timing-status timing-status-live">LIVE</span><span className="timing-status timing-status-completed">COMPLETED</span>
      </div>
      <div className="timing-contact">
        <span className="timing-avatar">AR</span>
        <div><strong>Alex Rivera</strong><span>+1 (415) 555-0184</span></div>
      </div>
      <div className="timing-clock" aria-label="Call timer">00:42</div>
      <div className="timing-fields">
        {callFields.slice(1).map((field) => <span key={field}>{field}</span>)}
      </div>
      <div className="timing-footer"><span className="timing-live-dot" />{isVaniger ? "Answered" : "Completed"}<span className="timing-footer-time">00:42</span></div>
      <div className={`timing-suggestion ${isVaniger ? "timing-suggestion-vaniger" : "timing-suggestion-late"}`}>
        <span className="timing-suggestion-label">Frontier suggestion</span>
        <strong>Ask what they&apos;re comparing it to</strong>
      </div>
      {!isVaniger && <span className="timing-spinner" aria-label="Loading summary" />}
    </article>
  )
}

export function CallTimingComparison() {
  return (
    <section className="timing-comparison" aria-label="Call assistance timing comparison">
      <div className="timing-intro"><span className="timing-intro-line" /><p>Same call. Different timing.</p><span className="timing-intro-line" /></div>
      <div className="timing-grid"><CallCard side="typical" /><div className="timing-divider" aria-hidden="true"><span>vs</span></div><CallCard side="vaniger" /></div>
      <p className="timing-caption">Help arrives while the conversation is still live.</p>
    </section>
  )
}

export default CallTimingComparison
