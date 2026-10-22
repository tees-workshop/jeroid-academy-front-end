"use client";

import { useState } from "react";

const items = [
  { label: "Tracks", href: "/tracks" },
  { label: "AI tutor", href: "/signin" },
  { label: "Verify a certificate", href: "/verify-certificate" },
];

export default function TracksHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#e1e7f0] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <a href="/" aria-label="Jeroid Academy home" className="inline-flex items-center gap-3">
          <span className="relative grid h-11 w-11 place-items-center rounded-[13px] bg-[#030D75] font-display text-[26px] font-extrabold text-[#FBE36A]"><span className="absolute left-[8px] top-[7px] h-[7px] w-[7px] rounded-[2px] bg-[#00AFEF]" />J</span>
          <span className="font-display text-[21px] font-extrabold leading-none tracking-[.03em] text-[#030D75]">JEROID<small className="mt-1 block font-data text-[10px] font-medium tracking-[.3em] text-[#007CA9]">ACADEMY</small></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Tracks navigation">
          {items.map(item => <a key={item.href} href={item.href} className="text-[15px] font-semibold text-[#030D75] transition-colors hover:text-[#007CA9]">{item.label}</a>)}
        </nav>
        <button type="button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="grid h-11 w-11 place-items-center text-[#030D75] md:hidden">
          {open ? <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18"/></svg> : <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}
        </button>
      </div>
      {open && <div className="fixed inset-0 top-0 z-[60] bg-white md:hidden">
        <div className="flex h-[82px] items-center justify-between border-b border-[#e1e7f0] px-5">
          <a href="/" onClick={() => setOpen(false)} aria-label="Jeroid Academy home" className="inline-flex items-center gap-3">
            <span className="relative grid h-11 w-11 place-items-center rounded-[13px] bg-[#030D75] font-display text-[26px] font-extrabold text-[#FBE36A]"><span className="absolute left-[8px] top-[7px] h-[7px] w-[7px] rounded-[2px] bg-[#00AFEF]"/>J</span>
            <span className="font-display text-[21px] font-extrabold leading-none tracking-[.03em] text-[#030D75]">JEROID<small className="mt-1 block font-data text-[10px] font-medium tracking-[.3em] text-[#007CA9]">ACADEMY</small></span>
          </a>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center text-[#53617f]"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18"/></svg></button>
        </div>
        <nav className="grid gap-1 px-8 py-8" aria-label="Mobile tracks navigation">{items.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-5 text-[20px] font-medium text-[#030D75]">{item.label}</a>)}</nav>
      </div>}
    </header>
  );
}
