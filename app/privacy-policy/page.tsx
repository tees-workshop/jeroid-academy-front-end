"use client";

import TracksHeader from "../components/TracksHeader";
import SiteFooter from "../components/SiteFooter";

const sections = [
  {
    title: "Who we are",
    paragraphs: [
      "Jeroid Academy is the free education arm of the Jeroid exchange. This policy explains what we collect when you use this website, why we collect it, and the choices you have. It is written for the Nigeria Data Protection Act 2023.",
      "Questions or requests: academy@jeroid.co.",
    ],
  },
  {
    title: "What we collect",
    items: [
      ["Account details you give us", "Full name, email address and a password we store as a hash, never in plain text."],
      ["Learning records", "Lessons you complete, knowledge-check answers, CBT attempts and scores, certificates, streaks and text-size preference."],
      ["AI tutor messages", "Messages you send the AI tutor, tied to the lesson you are on, and a daily count so we can enforce the message cap."],
      ["Email preferences", "Streak reminders and content updates, plus a log of which emails we already sent you so we do not send the same one twice."],
      ["Connected sign-in services", "If you continue with Google or Jeroid: the email, name and (for Jeroid) username those services share with us."],
      ["Session data", "Data our host needs to keep you signed in, including a session cookie and, on the server, IP address and browser user agent."],
      ["Staff activity", "If you are staff, actions in the admin area are stored in an audit log (for example, revoking a certificate)."],
    ],
  },
  {
    title: "Why we use it",
    items: [
      ["Account and progress", "To create your account, keep you signed in and show your progress, certificates and settings."],
      ["Learning and certificates", "To run CBTs, issue certificates and let anyone with the public link check that a certificate is genuine."],
      ["Email", "To send transactional email (verify your address, reset a password) and, if you leave them on, streak reminders or news about new lessons."],
      ["AI tutor and safety", "To answer tutor questions about the current lesson, and to keep the product reliable and safe (rate limits, bot checks on Vercel, error reports)."],
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "We use a session cookie so the Academy can tell you are signed in. It is required for the product to work. We do not use advertising cookies, and we do not sell your information.",
    ],
  },
  {
    title: "Who else sees it",
    paragraphs: ["We use these processors to run the Academy. They only get what they need to do that job:"],
    items: [
      ["Vercel", "Hosting, the AI tutor gateway, and (on Vercel) bot protection."],
      ["Neon", "The Postgres database that stores accounts and learning records."],
      ["Resend", "Sending email, when we have configured a sending key."],
      ["Sentry", "Error reports. We strip emails, cookies, IP addresses, request bodies and tokens from those reports before they leave the app."],
      ["Google or Jeroid", "Only if you choose to sign in with them."],
      ["Jeroid staff", "Staff with a support or admin role can look up learners to help with accounts, certificates and abuse."],
    ],
  },
  {
    title: "How long we keep it",
    paragraphs: [
      "We keep your account and learning records while the account exists. Encrypted database backups are stored for 30 days. You can change your name, email, password and notification toggles in Settings. To close an account or request deletion, email academy@jeroid.co.",
    ],
  },
  {
    title: "Your choices",
    items: [
      ["Email preferences", "Turn streak reminders or content-update emails off in Settings, or use the unsubscribe link in those emails."],
      ["Your data rights", "Ask us for a copy of your data, a correction, or deletion under the Nigeria Data Protection Act 2023."],
      ["Public certificates", "Certificates you have already shared stay publicly checkable until an admin revokes them or we delete the account."],
    ],
  },
  {
    title: "Age",
    paragraphs: [
      "Jeroid Academy is meant for people aged 18 and over. If you believe a child has created an account, email us and we will delete it.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "If this policy changes in a way that affects how we use your information, we will update this page and the date at the top. The terms of use sit alongside this policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f6f9fd] text-[#030D75]">
      <TracksHeader />
      <section className="relative overflow-hidden border-b border-[#e1e7f0] bg-white">
        <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#00AFEF]/20 shadow-[0_0_0_35px_rgba(0,175,239,.035),0_0_0_75px_rgba(0,175,239,.025)]" />
        <div className="relative mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <p className="eyebrow font-data">YOUR DATA. YOUR CHOICES.</p>
          <h1 className="font-display mt-5 max-w-[760px] text-[clamp(2.8rem,7vw,5.4rem)] font-extrabold leading-[.98] tracking-[-.065em]">
            Privacy <span className="text-[#007CA9]">policy.</span>
          </h1>
          <p className="mt-6 max-w-[640px] text-[17px] leading-8 text-[#53617f] sm:text-[19px]">
            A clear explanation of the information Jeroid Academy uses to provide your learning experience.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#e1e7f0] bg-[#f8fbff] px-4 py-2.5 text-sm font-semibold text-[#53617f]">
            <span className="h-2 w-2 rounded-full bg-[#00AFEF]" />
            Last updated 15 October 2026
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1100px] gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 lg:px-12">
        <aside className="h-fit rounded-2xl border border-[#e1e7f0] bg-white p-5 lg:sticky lg:top-24">
          <p className="font-data text-[10px] font-bold tracking-[.16em] text-[#007CA9]">ON THIS PAGE</p>
          <nav aria-label="Privacy policy sections" className="mt-3 grid gap-1">
            {sections.map((section, index) => (
              <a key={section.title} href={`#section-${index + 1}`} className="rounded-lg px-3 py-2 text-sm font-medium text-[#53617f] transition-colors hover:bg-[#eaf9ff] hover:text-[#030D75]">
                {section.title}
              </a>
            ))}
          </nav>
          <div className="mt-5 rounded-xl bg-[#eaf9ff] p-4">
            <p className="text-sm font-bold">Questions about your data?</p>
            <a href="mailto:academy@jeroid.co" className="mt-2 inline-block break-all text-sm font-semibold text-[#007CA9] underline underline-offset-4">academy@jeroid.co</a>
          </div>
        </aside>

        <article className="min-w-0 rounded-2xl border border-[#e1e7f0] bg-white px-5 py-7 shadow-[0_12px_38px_rgba(3,13,117,.035)] sm:px-8 sm:py-10">
          <p className="border-b border-[#e8edf5] pb-7 text-[15px] leading-7 text-[#53617f]">
            We believe you should understand what happens to your information. This policy explains our practices and the choices available to you.
          </p>
          <div className="divide-y divide-[#e8edf5]">
            {sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title} className="scroll-mt-28 py-7 first:pt-7 last:pb-2">
                <div className="flex items-start gap-4">
                  <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#eaf9ff] font-data text-[11px] font-bold text-[#007CA9]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-[22px] font-extrabold tracking-[-.035em] sm:text-[25px]">{section.title}</h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="mt-4 text-[15px] leading-7 text-[#53617f]">{paragraph.includes("academy@jeroid.co") ? <>{paragraph.split("academy@jeroid.co")[0]}<a href="mailto:academy@jeroid.co" className="font-semibold text-[#007CA9] underline underline-offset-4">academy@jeroid.co</a>{paragraph.split("academy@jeroid.co")[1]}</> : paragraph}</p>
                    ))}
                    {section.items && (
                      <ul className="mt-4 grid gap-4">
                        {section.items.map(([label, description]) => (
                          <li key={label} className="border-l-2 border-[#00AFEF] pl-4">
                            <h3 className="text-[14px] font-bold text-[#030D75]">{label}</h3>
                            <p className="mt-1 text-[15px] leading-7 text-[#53617f]">{description}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-[#d9edf7] bg-[#f3fbff] p-5 sm:p-6">
            <p className="font-display text-lg font-extrabold">Need help or want to make a request?</p>
            <p className="mt-2 text-sm leading-6 text-[#53617f]">Contact our team about your personal information, account, or this policy.</p>
            <a href="mailto:academy@jeroid.co" className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#030D75] px-5 text-sm font-bold text-white transition hover:bg-[#0a1a9a]">Email Jeroid Academy <span aria-hidden="true" className="ml-2">↗</span></a>
          </div>
          <p className="mt-8 text-xs leading-6 text-[#7b85a2]">This page reflects the policy text provided for the Jeroid Academy prototype.</p>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
