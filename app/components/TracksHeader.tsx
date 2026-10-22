"use client";

import { useEffect, useState } from "react";

const allItems = [
  { label: "Tracks", href: "/tracks" },
  { label: "How it works", href: "/#how" },
  { label: "AI tutor", href: "/#tutor" },
  { label: "Verify a certificate", href: "/verify-certificate" },
];

function BrandLogo({ large = false }: { large?: boolean }) {
  return (
    <a href="/" aria-label="Jeroid Academy home" className="inline-flex items-center gap-3">
      <span className={`brand-mark after:!bg-[#00AFEF] !text-[#FBE36A] ${large ? "!h-[72px] !w-[72px] !rounded-[18px] !text-[43px]" : ""}`}>J</span>
      <span className={`font-display font-extrabold leading-none tracking-[.03em] text-[#030D75] ${large ? "text-[30px]" : "text-[22px]"}`}>JEROID<small className={`block font-data font-medium tracking-[.3em] text-[#007CA9] ${large ? "pt-2 text-[13px] tracking-[.43em]" : "pt-1 text-[10px]"}`}>ACADEMY</small></span>
    </a>
  );
}

// Shared site header. The Tracks page passes hideHowItWorks; the landing page passes showStartFree.
export default function TracksHeader({ hideHowItWorks = false, showStartFree = false }: { hideHowItWorks?: boolean; showStartFree?: boolean }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const items = hideHowItWorks ? allItems.filter(item => item.label !== "How it works") : allItems;

  // While the mobile sidebar is open, freeze the page behind it (no scrolling).
  // position:fixed on <body> is used because overflow:hidden alone doesn't stop iOS Safari scrolling.
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const body = document.body;
    const prev = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: body.style.overflow };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      body.style.position = prev.position; body.style.top = prev.top; body.style.width = prev.width; body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);
  return (
    <>
    <header className="sticky top-0 z-50 border-b border-[#e1e7f0] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <BrandLogo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Tracks navigation">
          {items.map(item => <a key={item.href} href={item.href} className="text-[15px] font-semibold text-[#030D75] transition-colors hover:text-[#007CA9]">{item.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
        {showStartFree && <a href="/signup" className="inline-flex min-h-11 items-center justify-center rounded-xl px-5 text-[15px] font-bold transition-colors hover:bg-[#0a1a9a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00AFEF]" style={{ backgroundColor: "#030D75", color: "#FFFFFF" }}>Start free</a>}
        <button type="button" onClick={() => setOpen(v => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="tracks-mobile-sidebar" className="grid h-11 w-11 place-items-center text-[#030D75] md:hidden">
          {open ? <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18"/></svg> : <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}
        </button>
        </div>
      </div>
    </header>
    {open && <div className="fixed inset-0 z-[100] touch-none overscroll-none md:hidden">
      <button type="button" aria-label="Close navigation menu" onClick={closeMenu} className="absolute inset-0 bg-[#030D75]/50" />
      <aside id="tracks-mobile-sidebar" className="absolute inset-y-0 right-0 flex w-[92%] max-w-[520px] flex-col bg-white shadow-[-18px_0_50px_rgba(3,13,117,.12)]" aria-label="Mobile navigation">
        <div className="flex min-h-[112px] items-center justify-between gap-3 border-b border-[#e8ebf4] px-6 sm:px-8">
          <BrandLogo large />
          <button type="button" onClick={closeMenu} aria-label="Close menu" className="grid h-12 w-12 shrink-0 place-items-center text-[#53617f]"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 12 12M18 6 6 18"/></svg></button>
        </div>
        <nav className="grid content-start gap-1 px-8 pt-14 sm:px-10" aria-label="Mobile tracks navigation">
          {items.map(item => <a key={item.href} href={item.href} onClick={closeMenu} className="py-5 text-[20px] font-medium text-[#030D75] transition-colors hover:text-[#007CA9] sm:text-[22px]">{item.label}</a>)}
        </nav>
      </aside>
    </div>}
    </>
  );
}
