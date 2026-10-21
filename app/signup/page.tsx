import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function SignupPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8fd]">
      <SiteHeader />
      <section className="relative isolate overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[420px] w-[420px] rounded-full border border-[#00AFEF]/25 shadow-[0_0_0_36px_rgba(0,175,239,.04),0_0_0_84px_rgba(0,175,239,.025)]" />
        <div className="mx-auto grid max-w-[1080px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="eyebrow">YOUR WEB3 JOURNEY STARTS HERE</span>
            <h1 className="font-display mt-5 text-5xl leading-[1.02] font-extrabold tracking-[-.06em] text-[#030D75] sm:text-6xl">Make room for <span className="text-[#007CA9]">what’s next.</span></h1>
            <p className="mt-5 max-w-[440px] text-base leading-8 text-[#53617f]">Create your Jeroid Academy account and start learning blockchain, crypto and the digital economy at your own pace.</p>
            <div className="mt-8 grid gap-4 text-sm font-semibold text-[#34416e]">
              <span className="flex items-center gap-3"><span className="check-dot">✓</span> Free learning paths</span>
              <span className="flex items-center gap-3"><span className="check-dot">✓</span> Structured track progression</span>
              <span className="flex items-center gap-3"><span className="check-dot">✓</span> Learn at your own pace</span>
            </div>
          </div>
          <div className="rounded-[28px] border border-[#e1e7f0] bg-white p-6 shadow-[0_28px_80px_rgba(3,13,117,.10)] sm:p-9">
            <div className="font-data text-[10px] font-bold tracking-[.15em] text-[#007CA9]">CREATE YOUR ACCOUNT</div>
            <h2 className="font-display mt-3 text-3xl font-extrabold tracking-[-.04em] text-[#030D75]">Start free</h2>
            <p className="mt-2 text-sm leading-6 text-[#53617f]">A few details and you’re ready to begin.</p>
            <form className="mt-7 grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-[#030D75]">Full name<input required name="name" autoComplete="name" placeholder="Your full name" className="min-h-12 rounded-xl border border-[#d9e2ef] bg-white px-4 font-normal outline-none transition focus:border-[#00AFEF] focus:ring-4 focus:ring-[#00AFEF]/10" /></label>
              <label className="grid gap-2 text-sm font-bold text-[#030D75]">Email address<input required name="email" type="email" autoComplete="email" placeholder="you@example.com" className="min-h-12 rounded-xl border border-[#d9e2ef] bg-white px-4 font-normal outline-none transition focus:border-[#00AFEF] focus:ring-4 focus:ring-[#00AFEF]/10" /></label>
              <label className="grid gap-2 text-sm font-bold text-[#030D75]">Password<input required name="password" type="password" autoComplete="new-password" minLength={8} placeholder="At least 8 characters" className="min-h-12 rounded-xl border border-[#d9e2ef] bg-white px-4 font-normal outline-none transition focus:border-[#00AFEF] focus:ring-4 focus:ring-[#00AFEF]/10" /></label>
              <button type="button" className="primary-button yellow-button mt-1 w-full cursor-not-allowed opacity-80" title="Account creation will be connected when the authentication backend is available">Create free account <span aria-hidden="true">→</span></button>
            </form>
            <p className="mt-4 text-xs leading-5 text-[#6b7390]">Account creation is a frontend preview; authentication is not connected yet.</p>
            <p className="mt-5 border-t border-[#e8edf5] pt-5 text-sm text-[#53617f]">Want to explore first? <a href="/tracks" className="font-bold text-[#007CA9] hover:underline">Browse learning tracks</a></p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
