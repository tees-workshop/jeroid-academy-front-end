import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Learning tracks — Jeroid Academy",
  description: "Five free learning tracks, from Beginner to Advanced, plus Career and Industry pathways.",
};

const tracks = [
  { code: "B-01 – B-05", title: "Beginner", modules: 5, hours: 11, who: "Complete newcomers to crypto and Web3.", unlock: "Open on registration", tone: "cyan", group: "core" },
  { code: "I-01 – I-05", title: "Intermediate", modules: 5, hours: 14, who: "Learners ready for DeFi, NFTs and Layer 2.", unlock: "Pass the Beginner CBT", tone: "yellow", group: "core" },
  { code: "A-01 – A-05", title: "Advanced", modules: 5, hours: 19, who: "Developers, researchers and serious builders.", unlock: "Pass the Intermediate CBT", tone: "blue", group: "core" },
  { code: "C-01 – C-02", title: "Career", modules: 2, hours: 6, who: "Anyone preparing to enter Web3 professionally.", unlock: "Pass the Beginner CBT", tone: "purple", group: "specialist" },
  { code: "X-01 – X-05", title: "Industry", modules: 5, hours: 12, who: "Finance, agriculture, healthcare, government and media.", unlock: "Pass the Beginner CBT", tone: "green", group: "specialist" },
];

const steps = [
  { n: "01", title: "Start with Beginner", body: "It opens as soon as you register. Work through the five modules at your own pace." },
  { n: "02", title: "Take the CBT", body: "A computer-based test checks your understanding. If it doesn't go well, you'll see what to revisit." },
  { n: "03", title: "Unlock what's next", body: "Passing opens Intermediate, Career and Industry. Passing the Intermediate CBT opens Advanced." },
];

function TrackCard({ t, n }: { t: (typeof tracks)[number]; n: number }) {
  return (
    <article className={"curriculum-card track-" + t.tone}>
      <div className="flex items-start justify-between gap-4">
        <span className="track-number font-data">{String(n).padStart(2, "0")}</span>
        <span className="track-level font-data">{t.code}</span>
      </div>
      <h3 className="font-display mt-7 text-2xl font-extrabold tracking-[-.04em] text-[#030D75]">{t.title}</h3>
      <p className="mt-3 min-h-[52px] text-sm leading-7 text-[#53617f]">{t.who}</p>
      <div className="mt-5 flex flex-wrap gap-2"><span className="meta-pill">{t.modules} modules</span><span className="meta-pill">≈ {t.hours} hours</span></div>
      <div className="track-access mt-5"><span className="font-data text-[9px] font-bold uppercase tracking-[.1em]">ACCESS</span><p className="mt-1 text-xs font-semibold leading-5">{t.unlock}</p></div>
    </article>
  );
}

export default function TracksPage() {
  const core = tracks.filter((t) => t.group === "core");
  const specialist = tracks.filter((t) => t.group === "specialist");
  return (
    <main id="home" className="overflow-hidden">
      <SiteHeader />

      <section className="hero-surface">
        <div className="mx-auto max-w-[1320px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="eyebrow">LEARNING TRACKS</div>
          <h1 className="font-display mt-6 max-w-[760px] text-[clamp(2.4rem,5.6vw,4.8rem)] leading-[1] font-extrabold tracking-[-.065em] text-[#030D75]">Five tracks. <span className="hero-highlight">One clear path.</span></h1>
          <p className="mt-6 max-w-[620px] text-base leading-8 text-[#53617f] sm:text-lg">Start with the foundations, prove what you know, then unlock deeper levels or a pathway built around your field. Everything is free.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a className="primary-button yellow-button" href="/#start">Start learning free <span aria-hidden="true">→</span></a><a className="outline-button" href="#path">See how unlocking works</a></div>
          <div className="mt-10 grid max-w-[640px] grid-cols-3 gap-4">{[["05", "tracks"], ["≈62", "hours in total"], ["₦0", "to learn"]].map(([v, l]) => <div key={l}><strong className="font-data text-2xl text-[#030D75]">{v}</strong><p className="mt-1 text-xs text-[#53617f]">{l}</p></div>)}</div>
        </div>
      </section>

      <section id="path" className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="track-layout">
          <div className="track-path-heading"><span className="font-data">01 — 03</span><div><h2 className="font-display text-[17px] font-extrabold tracking-[-.03em] text-[#030D75]">Core learning path</h2><p>Move from the fundamentals to deeper technical understanding, one level at a time.</p></div></div>
          <div className="track-core-grid">{core.map((t, i) => <TrackCard key={t.title} t={t} n={i + 1} />)}</div>
          <div className="track-path-heading track-path-secondary"><span className="font-data">04 — 05</span><div><h2 className="font-display text-[17px] font-extrabold tracking-[-.03em] text-[#030D75]">Specialist pathways</h2><p>Open after the Beginner CBT, alongside the core path.</p></div></div>
          <div className="track-special-grid">{specialist.map((t, i) => <TrackCard key={t.title} t={t} n={i + 4} />)}</div>
        </div>
        <p className="mt-6 text-xs leading-6 text-[#53617f]">CBT means computer-based test. Hours are approximate.</p>
      </section>

      <section className="journey-section">
        <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="max-w-[680px]"><div className="eyebrow !text-[#8ce4f5]">HOW UNLOCKING WORKS</div><h2 className="font-display mt-4 text-3xl font-extrabold tracking-[-.05em] text-white sm:text-5xl">Earn your way <span className="text-[#00AFEF]">forward.</span></h2></div>
          <div className="journey-grid mt-10">{steps.map((s) => <article className="journey-card" key={s.n}><span className="font-data text-xs text-[#8ce4f5]">{s.n} / 03</span><h3 className="font-display mt-6 text-2xl font-extrabold text-white">{s.title}</h3><p className="mt-3 text-sm leading-7 text-white/70">{s.body}</p></article>)}</div>
        </div>
      </section>

      <section className="start-section mx-5 my-12 overflow-hidden rounded-[26px] sm:mx-8 lg:mx-auto lg:my-16 lg:max-w-[1224px]">
        <div className="relative flex flex-col gap-7 p-7 sm:p-10 md:flex-row md:items-center md:justify-between lg:p-12">
          <div><h2 className="font-display max-w-[620px] text-3xl leading-tight font-extrabold tracking-[-.05em] text-white sm:text-4xl">Ready for your first lesson?</h2><p className="mt-3 text-sm leading-7 text-white/75">Beginner is open as soon as you register.</p></div>
          <a className="primary-button yellow-button shrink-0" href="/#start">Start learning free <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
