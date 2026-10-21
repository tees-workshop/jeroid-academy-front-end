"use client";

import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [["Tracks", "/tracks"], ["How it works", "/#how"], ["AI tutor", "/#tutor"], ["Jeroid Exchange", "/#exchange"]];
  return (
    <header className="site-header">
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-12">
        <a href="/" onClick={closeMenu} className="flex items-center gap-3" aria-label="Jeroid Academy home"><span className="brand-mark after:!bg-[#00AFEF] !text-[#FBE36A]">J</span><span className="font-display text-[22px] leading-none font-extrabold tracking-[.03em] text-[#030D75]">JEROID <small className="block pt-1 font-data text-[10px] font-medium tracking-[.3em] text-[#007CA9]">ACADEMY</small></span></a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#34416e] md:flex" aria-label="Main navigation">{navItems.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}</nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <a className="inline-flex min-h-11 items-center rounded-xl bg-[#030D75] px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0a1a9a]" href="/signup">Start free</a>
          <button className="grid h-11 w-11 place-items-center text-[#030D75] md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">{menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="grid gap-1 border-t border-[#e1e7f0] bg-white px-4 py-4 md:hidden" aria-label="Mobile navigation">{[...navItems, ["Start free", "/signup"]].map(([label, href]) => <a key={href} className="rounded-lg px-3 py-3 font-semibold text-[#030D75] hover:bg-[#f1faff]" onClick={closeMenu} href={href}>{label}</a>)}</nav>}
    </header>
  );
}
