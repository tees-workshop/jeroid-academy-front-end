"use client";

import { useState, type FormEvent } from "react";

function Brand() {
  return <a href="/" aria-label="Jeroid Academy home" className="inline-flex items-center gap-3">
    <span className="relative grid h-14 w-14 place-items-center rounded-[17px] bg-[#030D75] font-display text-[42px] font-extrabold leading-none text-[#FBE36A]"><span className="absolute left-[10px] top-[9px] h-2 w-2 rounded-[2px] bg-[#00AFEF]"/>J</span>
    <span className="font-display text-[28px] font-extrabold leading-none tracking-[.025em] text-[#030D75] sm:text-[32px]">JEROID<small className="mt-1 block font-data text-[12px] font-medium tracking-[.36em] text-[#007CA9]">ACADEMY</small></span>
  </a>;
}

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Sign-in is a frontend preview. Authentication is not connected yet, so no credentials were sent or saved.");
  }

  return <main className="min-h-screen bg-white px-5 pb-16 pt-8 text-[#030D75] sm:px-8 sm:pt-10">
    <div className="mx-auto w-full max-w-[820px]"><Brand />
      <section className="mt-14 sm:mt-16">
        <h1 className="font-display text-[clamp(2.7rem,7.5vw,4.2rem)] font-extrabold leading-[1.02] tracking-[-.065em]">Welcome back</h1>
        <p className="mt-5 text-[18px] leading-[1.65] text-[#4a5578] sm:text-[21px]">Sign in to pick up where you left off.</p>
        <form onSubmit={submit} className="mt-8 grid gap-6 sm:mt-10">
          <label className="grid gap-3 text-[16px] font-medium text-[#111827]">Email
            <input required type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} className="min-h-[62px] rounded-[17px] border border-[#b7bfdc] bg-white px-4 text-lg text-[#030D75] outline-none transition focus:border-[#00AFEF] focus:ring-4 focus:ring-[#00AFEF]/10"/>
          </label>
          <label className="grid gap-3 text-[16px] font-medium text-[#111827]">Password
            <span className="relative block"><input required type={showPassword?"text":"password"} autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)} className="min-h-[62px] w-full rounded-[17px] border border-[#b7bfdc] bg-white px-4 pr-14 text-lg text-[#030D75] outline-none transition focus:border-[#00AFEF] focus:ring-4 focus:ring-[#00AFEF]/10"/>
            <button type="button" onClick={()=>setShowPassword(v=>!v)} aria-label={showPassword?"Hide password":"Show password"} className="absolute inset-y-0 right-4 inline-flex items-center text-[#4a5578]"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"/><circle cx="12" cy="12" r="3"/></svg></button></span>
          </label>
          <div className="-mt-2 flex justify-end"><a href="/forgot-password" className="font-medium text-[#030D75] underline decoration-[#00AFEF] decoration-2 underline-offset-4">Forgot your password?</a></div>
          <button type="submit" className="inline-flex min-h-[76px] w-full items-center justify-center rounded-[18px] bg-[#030D75] px-5 text-[19px] font-semibold text-white transition hover:bg-[#0a1a9a]">Sign in</button>
        </form>
        {message && <p role="status" className="mt-5 rounded-xl border border-[#b9eaff] bg-[#effaff] px-4 py-3 text-sm leading-6 text-[#24345f]">{message}</p>}
        <p className="mt-7 text-center text-[15px] leading-7 text-[#4a5578] sm:text-[17px]">New to Jeroid Academy? <a href="/signup" className="font-semibold text-[#030D75] underline decoration-[#00AFEF] decoration-2 underline-offset-4">Create a free account</a></p>
      </section>
    </div>
  </main>;
}
