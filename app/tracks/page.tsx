import type { Metadata } from "next";
import TracksHeader from "../components/TracksHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Learning tracks — Jeroid Academy",
  description: "Start with Beginner. Each CBT you pass unlocks the next step, and you can preview every track before then.",
};

const tracks = [
  { letter: "B", title: "Beginner", code: "B-01–B-05", description: "Money, blockchains, wallets and staying safe.", modules: 5, hours: 11, unlockedBy: null },
  { letter: "I", title: "Intermediate", code: "I-01–I-05", description: "Ethereum, DeFi, NFTs, cheaper chains, and how to read a market.", modules: 5, hours: 14, unlockedBy: "Beginner" },
  { letter: "A", title: "Advanced", code: "A-01–A-05", description: "How apps, tokens, proofs, attacks and rules fit together.", modules: 5, hours: 19, unlockedBy: "Intermediate" },
  { letter: "C", title: "Career", code: "C-01–C-02", description: "Roles, skills and a portfolio that gets you hired.", modules: 2, hours: 6, unlockedBy: "Beginner" },
  { letter: "X", title: "Industry", code: "X-01–X-05", description: "Blockchain applied to finance, agriculture, healthcare, government and media.", modules: 5, hours: 12, unlockedBy: "Beginner" },
];

type Track = (typeof tracks)[number];

// The faint circle / cross pattern behind each card's top banner.
function pattern(symbol: string, line: string) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56' fill='none' stroke='${symbol}' stroke-width='1.5' stroke-linecap='round'><path d='M28 0V56M0 28H56' stroke='${line}' stroke-width='1' stroke-dasharray='3 3'/><circle cx='14' cy='14' r='7'/><circle cx='14' cy='14' r='1.6' fill='${symbol}'/><path d='M37 9l10 10M47 9L37 19'/><path d='M9 37l10 10M19 37L9 47'/><circle cx='42' cy='42' r='7'/><circle cx='42' cy='42' r='1.6' fill='${symbol}'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const unlockedBanner = { backgroundColor: "#030D75", backgroundImage: pattern("rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)") };
const lockedBanner = { backgroundColor: "#eeeffa", backgroundImage: pattern("#d1d5ec", "#dde0f1") };

function LockIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4.5" y="11" width="15" height="10" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function TrackCard({ t }: { t: Track }) {
  const unlocked = t.unlockedBy === null;
  return (
    <article className="track-page-card overflow-hidden rounded-[26px] border border-[#dfe4f1] bg-white shadow-[0_10px_30px_rgba(3,13,117,.06)]">
      <div className="flex h-24 items-end justify-between px-4 pb-4" style={unlocked ? unlockedBanner : lockedBanner}>
        <span className={"font-display grid h-12 w-12 place-items-center rounded-[14px] text-[26px] font-extrabold text-[#030D75] " + (unlocked ? "bg-[#FBE36A]" : "bg-white")} aria-hidden="true">{t.letter}</span>
        <span className="flex h-12 items-center gap-3">
          <span className={"font-data text-[13px] tracking-[.06em] " + (unlocked ? "text-white/75" : "text-[#34416e]")}>{t.code}</span>
          {!unlocked && <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#030D75]"><LockIcon size={16} /></span>}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-[26px] leading-tight font-extrabold tracking-[-.02em] text-[#030D75]">{t.title}</h2>
          <span className={"shrink-0 rounded-lg px-3 py-1 text-[13px] font-medium " + (unlocked ? "bg-[#e6e8f6] text-[#030D75]" : "border border-[#c5cbe0] text-[#53617f]")}>{unlocked ? "Unlocked" : "Locked"}</span>
        </div>
        <p className="mt-3 text-base leading-[1.65] text-[#53617f]">{t.description}</p>
        <p className="font-data mt-4 text-[13px] tracking-[.08em] text-[#6b7390] uppercase">{t.modules} modules · ~{t.hours} hrs</p>
        {!unlocked && (
          <p className="mt-4 flex items-center gap-3 text-[17px] text-[#4a5578]"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#eceffa] text-[#030D75]"><LockIcon size={15} /></span>Pass the {t.unlockedBy} CBT to unlock</p>
        )}
        <a className="mt-5 inline-flex min-h-11 items-center gap-3 text-[17px] font-semibold text-[#030D75] hover:text-[#007CA9]" href="/signup">
          {unlocked ? "Start this track" : "Preview what's inside"}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </article>
  );
}

export default function TracksPage() {
  return (
    <main id="home" className="tracks-page overflow-hidden">
      <TracksHeader hideHowItWorks />
      <div className="tracks-canvas relative overflow-hidden bg-[#f4f6fb]">
        <div className="tracks-content relative z-[1] mx-auto max-w-[1320px] px-4 pt-9 pb-16 sm:px-8 sm:pt-14 lg:px-12">
          <div className="tracks-heading"><span className="tracks-kicker font-data">THE LEARNING MAP <span aria-hidden="true">✳</span></span><h1 className="font-display mt-4 text-[clamp(2.4rem,9vw,4.2rem)] leading-none font-extrabold tracking-[-.04em] text-[#030D75]">Learning tracks<span className="tracks-heading-dot">.</span></h1></div>
          <p className="mt-4 max-w-[640px] text-[19px] leading-[1.55] text-[#53617f]">Start with Beginner. Each CBT you pass unlocks the next step, and you can preview every track before then.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{tracks.map((t) => <TrackCard key={t.title} t={t} />)}</div>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
