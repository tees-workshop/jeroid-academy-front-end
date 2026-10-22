"use client";

import TracksHeader from "../components/TracksHeader";
import SiteFooter from "../components/SiteFooter";

const sections = [
  {
    title: "The short version",
    paragraphs: [
      "Jeroid Academy is free crypto and Web3 education from Jeroid. Lessons, quizzes and certificates are for learning only. They are not financial, investment or legal advice, and they are not an offer to buy or sell any asset.",
    ],
  },
  {
    title: "Your account",
    paragraphs: [
      "You must be 18 or over to create an account.",
      "Use a name you are happy to see on a certificate. Employers can check that name on the public verify page.",
      "Keep your password and, if you use one, your Jeroid login to yourself. We will never ask for a seed phrase, 2FA codes or your exchange password.",
      "One person, one account. Do not share an account to sit a CBT for someone else.",
    ],
  },
  {
    title: "Lessons, CBTs and certificates",
    paragraphs: [
      "Track content can change as we add or correct lessons. Passing a CBT shows you met the standard on that day, not that markets or products stay the same.",
      "Do not copy, share or publish CBT questions or answers. We may revoke a certificate if we believe it was earned unfairly.",
      "A revoked certificate still has a public page, marked as revoked, so employers are not misled.",
      "Connecting a Jeroid account (when that sign-in is switched on) is required before you can sit a CBT or receive a certificate. Beginner lessons stay open either way.",
    ],
  },
  {
    title: "The tutor and email",
    paragraphs: [
      "The AI tutor answers from the lesson you are reading. It can be wrong. Treat it as a study aid, not a signal to trade. We may cap how many tutor messages you send each day.",
      "We send mail needed to run your account (verification and password reset). Streak reminders and news about new lessons only go out if those toggles are on. Every one of those emails has an unsubscribe link.",
    ],
  },
  {
    title: "Acceptable use",
    paragraphs: [
      "Do not use the Academy to harass anyone, break the law, attack the service, scrape it at scale, or try to bypass access controls. We may suspend or ban an account that does.",
    ],
  },
  {
    title: "Jeroid the exchange",
    paragraphs: [
      "The Academy and the Jeroid exchange are related but separate. Opening an Academy account does not open an exchange account, and nothing here is a recommendation to trade on Jeroid or anywhere else. Crypto assets are volatile; never use money you cannot afford to lose.",
    ],
  },
  {
    title: "Availability",
    paragraphs: [
      "We aim to keep the Academy running, but we do not promise uninterrupted access. Features that need a third party (email, the tutor, Sign in with Jeroid) only work when those services are configured and available.",
    ],
  },
  {
    title: "These terms",
    paragraphs: [
      "Using the Academy means you accept these terms and the privacy policy. We may update them; the date at the top of this page is the latest version. For account or legal questions, email academy@jeroid.co.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#53617f]">
      <TracksHeader />
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight tracking-[-.04em] text-[#030D75]">Terms of use</h1>
          <p className="mt-2 text-sm text-[#53617f]">Last updated 15 October 2026</p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 pt-3 pb-8 sm:px-8 sm:pt-3 sm:pb-10 lg:px-12">
        <article className="min-w-0">
          {sections.map((section, index) => (
            <section id={`section-${index + 1}`} key={section.title} className="py-2">
              <div className="min-w-0">
                <h2 className="font-display text-[22px] font-extrabold tracking-[-.035em] text-[#030D75] sm:text-[25px]">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-2 text-[15px] leading-7 text-[#53617f]">
                    {paragraph.includes("academy@jeroid.co") ? (
                      <>
                        {paragraph.split("academy@jeroid.co")[0]}
                        <a href="mailto:academy@jeroid.co" className="font-semibold text-[#030D75] underline decoration-[#00AFEF] underline-offset-4">academy@jeroid.co</a>
                        {paragraph.split("academy@jeroid.co")[1]}
                      </>
                    ) : paragraph.includes("privacy policy") ? (
                      <>
                        {paragraph.split("privacy policy")[0]}
                        <a href="/privacy-policy" className="font-semibold text-[#030D75] underline decoration-[#00AFEF] underline-offset-4">privacy policy</a>
                        {paragraph.split("privacy policy")[1]}
                      </>
                    ) : paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
