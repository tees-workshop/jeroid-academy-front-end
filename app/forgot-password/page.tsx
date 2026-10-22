"use client";

import { useState, type FormEvent } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <main className="min-h-screen bg-white px-5 pt-8 text-[#030D75] sm:px-8 sm:pt-10">
    <div className="mx-auto max-w-[820px]">
      <a href="/" className="inline-flex items-center gap-3" aria-label="Jeroid Academy home"><span className="relative grid h-14 w-14 place-items-center rounded-[17px] bg-[#030D75] font-display text-[42px] font-extrabold text-[#FBE36A]"><span className="absolute left-[10px] top-[9px] h-2 w-2 rounded-[2px] bg-[#00AFEF]"/>J</span><span className="font-display text-[28px] font-extrabold tracking-[.025em]">JEROID<small className="mt-1 block font-data text-[12px] font-medium tracking-[.36em] text-[#007CA9]">ACADEMY</small></span></a>
      <section className="mt-14 max-w-[650px]"><h1 className="font-display text-[clamp(2.5rem,7vw,4rem)] font-extrabold leading-tight tracking-[-.06em]">Reset your password</h1><p className="mt-4 text-[18px] leading-7 text-[#4a5578]">Enter the email address you use for Jeroid Academy.</p>
      <form onSubmit={submit} className="mt-8 grid gap-5"><label className="grid gap-3 font-medium text-[#111827]">Email<input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="min-h-[62px] rounded-[17px] border border-[#b7bfdc] px-4 text-lg text-[#030D75] outline-none focus:border-[#00AFEF] focus:ring-4 focus:ring-[#00AFEF]/10"/></label><button className="min-h-[70px] rounded-[18px] bg-[#030D75] px-5 font-semibold text-white hover:bg-[#0a1a9a]">Send reset link</button></form>
      {sent && <p role="status" className="mt-5 rounded-xl border border-[#b9eaff] bg-[#effaff] p-4 text-sm leading-6 text-[#24345f]">Password recovery is a frontend preview only. No email has been sent because the backend is not connected.</p>}
      <p className="mt-7 text-[#4a5578]"><a className="font-semibold underline decoration-[#00AFEF] underline-offset-4" href="/signin">← Back to sign in</a></p></section>
    </div>
  </main>;
}
