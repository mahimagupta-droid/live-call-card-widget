'use client'

import { Wallet, Phone } from 'lucide-react'

export function WalletBalanceMeter() {
  return (
    <section className="wallet-meter" aria-label="Live call balance meter">
      <div className="wallet-meter__head">
        <div>
          <p className="wallet-meter__eyebrow">Live call balance</p>
          <h1>Stay in control while you talk</h1>
        </div>
        <span className="wallet-meter__live"><i /> LIVE</span>
      </div>

      <div className="wallet-meter__body">
        <div className="wallet-meter__wallet" aria-hidden="true">
          <Wallet />
          <div className="wallet-meter__fill"><span /></div>
        </div>
        <div className="wallet-meter__numbers">
          <span className="wallet-meter__amount">$<b>0.50</b></span>
          <span className="wallet-meter__floor">minimum balance</span>
        </div>
        <div className="wallet-meter__timer" aria-label="Call duration">
          <Phone /> <span>00:<b>42</b></span>
        </div>
      </div>

      <div className="wallet-meter__track" aria-hidden="true"><span /></div>
      <p className="wallet-meter__note">Balance updates precisely as the call runs</p>

      <style jsx>{`
        .wallet-meter{width:min(100%,700px);padding:22px 24px 18px;border:1px solid rgba(255,255,255,.11);border-radius:24px;background:linear-gradient(145deg,rgba(35,34,39,.92),rgba(14,14,16,.97));box-shadow:0 30px 90px rgba(0,0,0,.56),inset 0 1px 0 rgba(255,255,255,.08);backdrop-filter:blur(26px);color:#aaa7ae;font-family:Inter,Arial,sans-serif}
        .wallet-meter__head,.wallet-meter__body,.wallet-meter__live,.wallet-meter__timer{display:flex;align-items:center}.wallet-meter__head{justify-content:space-between;gap:16px}.wallet-meter__eyebrow{margin:0 0 5px;color:#77747d;font-size:10px;letter-spacing:.1em;text-transform:uppercase}.wallet-meter h1{margin:0;color:#d2d0d5;font-size:15px;font-weight:600;letter-spacing:-.02em}.wallet-meter__live{gap:6px;color:#77747d;font-size:9px;font-weight:700;letter-spacing:.08em}.wallet-meter__live i{width:5px;height:5px;border-radius:50%;background:#8179a0}
        .wallet-meter__body{gap:12px;margin-top:24px}.wallet-meter__wallet{position:relative;display:grid;place-items:center;flex:none;width:52px;height:42px;border:1px solid rgba(255,255,255,.17);border-radius:10px;color:#aaa7ae;overflow:hidden}.wallet-meter__wallet svg{position:relative;z-index:1;width:21px;height:21px}.wallet-meter__fill{position:absolute;inset:auto 0 0;height:48%;background:rgba(126,117,161,.35);transform-origin:bottom;animation:wallet-drain 8s linear infinite}.wallet-meter__numbers{display:grid;gap:2px;flex:1}.wallet-meter__amount{color:#d2d0d5;font-size:18px;letter-spacing:-.03em}.wallet-meter__amount b{font-weight:500}.wallet-meter__floor{color:#77747d;font-size:10px}.wallet-meter__timer{gap:7px;color:#77747d;font-size:13px}.wallet-meter__timer svg{width:14px;height:14px}.wallet-meter__timer b{color:#d2d0d5;font-weight:500;animation:timer-tick 8s steps(8,end) infinite}
        .wallet-meter__track{height:3px;margin-top:23px;overflow:hidden;border-radius:99px;background:rgba(255,255,255,.07)}.wallet-meter__track span{display:block;width:100%;height:100%;transform-origin:left;background:#8179a0;animation:balance-track 8s linear infinite}.wallet-meter__note{margin:10px 0 0;color:#626069;font-size:10px}
        @keyframes wallet-drain{0%,8%{transform:scaleY(1)}92%,100%{transform:scaleY(.16)}}@keyframes balance-track{0%{transform:scaleX(1)}92%,100%{transform:scaleX(.1)}}@keyframes timer-tick{0%{opacity:.7}92%{opacity:1}93%,100%{opacity:.7}}
        @media(prefers-reduced-motion:reduce){.wallet-meter *{animation:none!important}.wallet-meter__fill{transform:scaleY(.16)}.wallet-meter__track span{transform:scaleX(.1)}}
        @media(max-width:560px){.wallet-meter{padding:19px}.wallet-meter__body{gap:9px}.wallet-meter__timer{font-size:11px}}
      `}</style>
    </section>
  )
}
