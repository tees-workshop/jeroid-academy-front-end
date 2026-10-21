"use client";

import { useState } from "react";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [["Learning tracks", "/tracks"], ["How it works", "/#how"], ["AI tutor", "/#tutor"], ["Jeroid Exchange", "/#exchange"]];
  return (
    <header className="site-header">
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="/" onClick={closeMenu} className="flex items-center gap-3" aria-label="Jeroid Academy home"><span className="brand-mark">J</span><span className="font-display text-[17px] font-extrabold tracking-[.04em] text-[#030D75]">JEROID <small className="block pt-0.5 font-data text-[9px] tracking-[.28em] text-[#007CA9]">ACADEMY</small></span></a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-[#34416e] md:flex" aria-label="Main navigation">{navItems.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}</nav>
        <div className="hidden items-center gap-5 text-sm font-bold md:flex"><a className="text-[#030D75] hover:text-[#007CA9]" href="/#start">Need access?</a><a className="primary-button !px-4 !py-3" href="/#start">Start free <span aria-hidden="true">↗</span></a></div>
        <button className="grid h-11 w-11 place-items-center rounded-xl border border-[#dbe4f2] text-xl text-[#030D75] md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="grid gap-1 border-t border-[#e1e7f0] bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">{[...navItems, ["Get started", "/#start"]].map(([label, href]) => <a key={href} className="rounded-lg px-3 py-3 font-semibold text-[#030D75] hover:bg-[#f1faff]" onClick={closeMenu} href={href}>{label}</a>)}</nav>}
    </header>
  );
}
