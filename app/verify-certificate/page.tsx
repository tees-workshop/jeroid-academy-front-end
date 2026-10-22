"use client";

import { useState, type FormEvent } from "react";
import TracksHeader from "../components/TracksHeader";
import SiteFooter from "../components/SiteFooter";

export default function VerifyCertificatePage() {
  const [certificateId, setCertificateId] = useState("");
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Certificate verification is not connected to a certificate database yet. No result can be confirmed in this frontend preview.");
  }

  return <main className="min-h-screen bg-[#f4f6fb]">
    <TracksHeader />
    <section className="mx-auto max-w-[900px] px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-[680px] text-center">
        <span className="mx-auto grid h-[76px] w-[76px] place-items-center rounded-full bg-[#030D75] text-[#FBE36A]"><svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg></span>
        <p className="mt-7 font-data text-[12px] font-bold tracking-[.17em] text-[#007CA9]">CREDENTIAL CHECK</p>
        <h1 className="font-display mt-4 text-[clamp(2.2rem,6vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-.06em] text-[#030D75]">Verify a Jeroid Academy certificate</h1>
        <p className="mt-5 text-[17px] leading-7 text-[#4a5578] sm:text-[19px]">Enter the certificate ID to confirm who earned it, for which track, and when. No account needed.</p>
      </div>
      <form onSubmit={submit} className="mx-auto mt-9 max-w-[650px] rounded-[26px] border border-[#e0e5f0] bg-white p-5 shadow-[0_16px_50px_rgba(3,13,117,.06)] sm:p-8">
        <label className="grid gap-3 text-[16px] font-semibold text-[#030D75]">Certificate ID
          <input required value={certificateId} onChange={e=>{setCertificateId(e.target.value);setMessage("");}} placeholder="JA-BGN-7K3M9QX2" className="min-h-[60px] rounded-[14px] border border-[#b7bfdc] px-4 text-base outline-none transition placeholder:text-[#929bb6] focus:border-[#00AFEF] focus:ring-4 focus:ring-[#00AFEF]/10"/>
        </label>
        <p className="mt-3 text-[14px] leading-6 text-[#687395]">Printed on the certificate, for example JA-BGN-7K3M9QX2</p>
        <button type="submit" className="mt-6 inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-[14px] bg-[#030D75] px-5 font-semibold text-white transition hover:bg-[#0a1a9a]"> <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg> Verify certificate</button>
        {message && <p role="status" className="mt-5 rounded-xl border border-[#b9eaff] bg-[#effaff] px-4 py-3 text-sm leading-6 text-[#24345f]">{message}</p>}
      </form>
    </section>
    <SiteFooter />
  </main>;
}
