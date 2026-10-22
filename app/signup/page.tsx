"use client";

import { useState, type FormEvent } from "react";

const goals = [
  { title: "Understand crypto from scratch", description: "I'm new and want the basics explained simply." },
  { title: "Buy, sell and store crypto safely", description: "I want to use crypto without losing money to mistakes or scams." },
  { title: "Start a career in Web3", description: "I want skills and a certificate that help me get hired." },
  { title: "Use blockchain in my industry", description: "I work in finance, agriculture, healthcare, government or media." },
  { title: "Build on blockchain", description: "I'm a developer, or I want to become one." },
];

function Brand() {
  return (
    <a href="/" aria-label="Jeroid Academy home" className="inline-flex items-center gap-3">
      <span className="grid h-14 w-14 place-items-center rounded-[17px] bg-[#030D75] font-display text-[42px] font-extrabold leading-none text-[#FBE36A]">
        <span className="relative"><span className="absolute -left-1 top-1 h-2 w-2 rounded-[2px] bg-[#00AFEF]" />J</span>
      </span>
      <span className="font-display text-[28px] font-extrabold leading-none tracking-[.025em] text-[#030D75] sm:text-[32px]">
        JEROID <small className="mt-1 block font-data text-[12px] font-medium tracking-[.36em] text-[#007CA9]">ACADEMY</small>
      </span>
    </a>
  );
}

function Progress({ step }: { step: number }) {
  const labels = ["YOUR ACCOUNT", "YOUR GOAL", "YOUR PATH", "START LEARNING"];
  return (
    <div className="mt-8" aria-label={`Step ${step} of 4`}>
      <p className="font-data text-[12px] font-bold uppercase tracking-[.16em] text-[#007CA9] sm:text-[14px]">
        STEP {step} OF 4 <span className="px-2">·</span> {labels[step - 1]}
      </p>
      <div className="mt-5 grid grid-cols-4 gap-3" aria-hidden="true">
        {labels.map((label, index) => (
          <span key={label} className={`h-2.5 rounded-full ${index < step ? "bg-[#030D75]" : "bg-[#e4e7f7]"}`} />
        ))}
      </div>
    </div>
  );
}

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [goal, setGoal] = useState("");
  const [notice, setNotice] = useState("");

  function handleAccountSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Preview mode: your account has not been created. You can still explore the onboarding steps.");
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    setNotice("");
    setStep((current) => Math.max(1, current - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function continueToPath() {
    if (!goal) return;
    setNotice("");
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className={`min-h-screen overflow-hidden text-[#030D75] ${step === 1 ? "bg-white" : "bg-[#f4f6fb]"}`}>
      <section className="mx-auto min-h-screen w-full max-w-[820px] px-5 pb-12 pt-8 sm:px-8 sm:pt-10">
        <Brand />
        <Progress step={step} />

        {notice && (
          <p role="status" className="mt-6 rounded-xl border border-[#b9eaff] bg-[#effaff] px-4 py-3 text-sm leading-6 text-[#24345f]">
            {notice}
          </p>
        )}

        {step === 1 && (
          <div className="mt-8 sm:mt-10">
            <h1 className="font-display max-w-[720px] text-[clamp(2.8rem,8vw,4.4rem)] font-extrabold leading-[.98] tracking-[-.065em]">
              Start<br className="sm:hidden" /> learning free
            </h1>
            <p className="mt-5 max-w-[760px] text-[18px] leading-[1.65] text-[#4a5578] sm:text-[21px]">
              Create your account, tell us your goal, and you’ll be reading your first lesson in under three minutes.
            </p>
            <form className="mt-8 grid gap-5 sm:mt-10" onSubmit={handleAccountSubmit}>
              <label className="grid gap-2 text-[16px] font-medium text-[#111827]">
                Full name
                <input required name="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder=" " className="min-h-[62px] rounded-[17px] border border-[#b7bfdc] bg-transparent px-4 text-lg outline-none transition focus:border-[#00AFEF] focus:ring-4 focus:ring-[#00AFEF]/10" />
                <span className="text-[14px] leading-6 text-[#687395]">This is how your name will appear on your certificates.</span>
              </label>
              <label className="grid gap-2 text-[16px] font-medium text-[#111827]">
                Email
                <input required name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder=" " className="min-h-[62px] rounded-[17px] border border-[#b7bfdc] bg-transparent px-4 text-lg outline-none transition focus:border-[#00AFEF] focus:ring-4 focus:ring-[#00AFEF]/10" />
              </label>
              <label className="grid gap-2 text-[16px] font-medium text-[#111827]">
                Password
                <span className="relative block">
                  <input required name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} placeholder=" " className="min-h-[62px] w-full rounded-[17px] border border-[#b7bfdc] bg-transparent px-4 pr-14 text-lg outline-none transition focus:border-[#00AFEF] focus:ring-4 focus:ring-[#00AFEF]/10" />
                  <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute inset-y-0 right-4 inline-flex items-center text-[#4a5578]">
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8"/><path d="M9.9 5.2A10.8 10.8 0 0112 5c5.5 0 9 7 9 7a15.8 15.8 0 01-3.1 3.8M6.2 6.2C4.1 7.6 3 12 3 12s3.5 7 9 7a10.6 10.6 0 003.3-.5"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </span>
                <span className="text-[14px] leading-6 text-[#687395]">At least 8 characters.</span>
              </label>
              <p className="pt-1 text-[14px] leading-6 text-[#687395]">
                By creating an account you agree to the <a href="#terms" className="text-[#030D75] underline decoration-[#00AFEF] decoration-2 underline-offset-4">Terms of use</a> and <a href="#privacy" className="text-[#030D75] underline decoration-[#00AFEF] decoration-2 underline-offset-4">Privacy policy</a>.
              </p>
              <button type="submit" className="mt-1 inline-flex min-h-[76px] w-full items-center justify-center gap-3 rounded-[18px] bg-[#030D75] px-5 text-[19px] font-semibold text-white transition hover:bg-[#0a1a9a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AFEF]">
                Create free account <span aria-hidden="true">→</span>
              </button>
            </form>
            <p className="mt-5 text-center text-[15px] text-[#4a5578]">Already learning with us? <a href="/signin" className="font-semibold text-[#030D75] underline decoration-[#00AFEF] decoration-2 underline-offset-4">Sign in</a></p>
            <p className="mt-6 text-center text-xs leading-5 text-[#687395]">This is a frontend preview. No account or password is saved.</p>
          </div>
        )}

        {step === 2 && (
          <div className="mt-8 sm:mt-10">
            <h1 className="font-display text-[clamp(2.5rem,7.5vw,4.1rem)] font-extrabold leading-[1.02] tracking-[-.065em]">
              Welcome{name.trim() ? `, ${name.trim().split(/\s+/)[0]}` : ""}. What brings you here?
            </h1>
            <p className="mt-5 max-w-[720px] text-[18px] leading-[1.65] text-[#4a5578] sm:text-[21px]">Pick the one that fits best. You can explore everything later.</p>
            <fieldset className="mt-8 grid gap-4">
              <legend className="sr-only">Choose your learning goal</legend>
              {goals.map((item) => (
                <label key={item.title} className={`flex cursor-pointer items-start gap-4 rounded-[24px] border-2 p-5 transition sm:p-7 ${goal === item.title ? "border-[#030D75] bg-white shadow-[0_10px_30px_rgba(3,13,117,.07)]" : "border-[#d9deed] bg-white hover:border-[#9ba8d1]"}`}>
                  <input type="radio" name="goal" value={item.title} checked={goal === item.title} onChange={() => setGoal(item.title)} className="mt-1 h-6 w-6 shrink-0 accent-[#030D75]" />
                  <span className="grid gap-1">
                    <span className="text-[18px] font-medium leading-7 sm:text-[21px]">{item.title}</span>
                    <span className="text-[15px] leading-6 text-[#4a5578] sm:text-[17px]">{item.description}</span>
                  </span>
                </label>
              ))}
            </fieldset>
            <button type="button" disabled={!goal} onClick={continueToPath} className="mt-8 inline-flex min-h-[76px] w-full items-center justify-center gap-3 rounded-[18px] bg-[#030D75] px-5 text-[19px] font-semibold text-white transition hover:bg-[#0a1a9a] disabled:cursor-not-allowed disabled:bg-[#8588bd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AFEF]">
              Continue <span aria-hidden="true">→</span>
            </button>
            <button type="button" onClick={goBack} className="mx-auto mt-5 flex min-h-12 items-center gap-3 px-4 text-[17px] font-medium text-[#030D75] hover:text-[#007CA9]"><span aria-hidden="true">←</span> Back</button>
          </div>
        )}

        {step === 3 && (
          <div className="mt-8 sm:mt-10">
            <h1 className="font-display text-[clamp(2.8rem,8vw,4.4rem)] font-extrabold leading-[.98] tracking-[-.065em]">Your recommended path</h1>
            <p className="mt-5 text-[18px] leading-[1.65] text-[#4a5578] sm:text-[21px]">Pass the Beginner CBT and the Career track unlocks straight away.</p>
            <div className="mt-8 grid gap-4">
              <article className="flex items-center gap-4 rounded-[24px] border-2 border-[#030D75] bg-white p-5 shadow-[0_10px_30px_rgba(3,13,117,.05)] sm:p-7">
                <span className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[20px] bg-[#FBE36A] font-display text-[32px] font-extrabold text-[#030D75]">B</span>
                <span className="min-w-0 flex-1"><span className="block text-[21px] font-medium">Beginner <span className="text-[#687395]">· ~11 hrs</span></span><span className="mt-2 block text-[17px] leading-6 text-[#4a5578]">Open now. Start here.</span></span>
                <span className="font-data text-[16px] text-[#687395]">1</span>
              </article>
              <article className="flex items-center gap-4 rounded-[24px] border-2 border-[#d9deed] bg-white p-5 sm:p-7">
                <span className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[20px] bg-[#f1f2fb] font-display text-[32px] font-extrabold text-[#030D75]">C</span>
                <span className="min-w-0 flex-1"><span className="block text-[21px] font-medium">Career <span className="text-[#687395]">· ~6 hrs</span></span><span className="mt-2 flex items-start gap-2 text-[17px] leading-6 text-[#4a5578]"><span aria-hidden="true">♙</span>Unlocks when you pass the Beginner CBT</span></span>
                <span className="font-data text-[16px] text-[#687395]">2</span>
              </article>
            </div>
            <button type="button" onClick={() => { setNotice(""); setStep(4); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="mt-8 inline-flex min-h-[76px] w-full items-center justify-center gap-3 rounded-[18px] bg-[#030D75] px-5 text-[19px] font-semibold text-white transition hover:bg-[#0a1a9a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AFEF]">
              Looks good <span aria-hidden="true">→</span>
            </button>
            <button type="button" onClick={goBack} className="mx-auto mt-5 flex min-h-12 items-center gap-3 px-4 text-[17px] font-medium text-[#030D75] hover:text-[#007CA9]"><span aria-hidden="true">←</span> Back</button>
          </div>
        )}

        {step === 4 && (
          <div className="mt-10 sm:mt-14">
            <h1 className="font-display max-w-[680px] text-[clamp(2.8rem,8vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-.065em]">
              You’re ready<br className="sm:hidden" /> to start
            </h1>
            <p className="mt-6 max-w-[680px] text-[18px] leading-[1.65] text-[#4a5578] sm:text-[21px]">
              Your first lesson is short. Your progress saves automatically.
            </p>
            <article className="mt-10 flex items-center gap-5 rounded-[28px] border-[3px] border-[#030D75] bg-white p-5 shadow-[0_12px_30px_rgba(3,13,117,.05)] sm:p-8">
              <span className="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[20px] bg-[#030D75] text-[#FBE36A]" aria-hidden="true">
                <svg viewBox="0 0 40 40" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="20" cy="20" r="15" /><path d="M20 10v10l7 4" />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="font-data text-[13px] tracking-[.12em] text-[#007CA9] sm:text-[15px]">B-01 · LESSON 1</p>
                <h2 className="mt-3 font-display text-[22px] font-bold leading-tight text-[#030D75] sm:text-[28px]">What money really does</h2>
                <p className="mt-3 text-[17px] text-[#4a5578] sm:text-[20px]">About 9 minutes</p>
              </div>
            </article>
            <a href="/tracks" className="mt-10 inline-flex min-h-[76px] w-full items-center justify-center gap-3 rounded-[18px] border-[3px] border-[#030D75] bg-[#FBE36A] px-5 text-[19px] font-semibold text-[#030D75] transition hover:bg-[#f7d943] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00AFEF]">
              Start lesson 1 <span aria-hidden="true">→</span>
            </a>
            <p className="mt-3 text-center text-xs leading-5 text-[#687395]">Lesson reader is not connected in this frontend preview yet.</p>
            <button type="button" onClick={goBack} className="mx-auto mt-5 flex min-h-12 items-center gap-3 px-4 text-[17px] font-medium text-[#030D75] hover:text-[#007CA9]"><span aria-hidden="true">←</span> Back</button>
          </div>
        )}
      </section>
    </main>
  );
}
