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
    <main className="min-h-screen bg-white text-[#53617f]">
      <TracksHeader />
      <section className="border-b border-[#e1e7f0] bg-white">
        <div className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <h1 className="font-display text-[clamp(2rem,5vw,3rem)] font-extrabold leading-tight tracking-[-.04em] text-[#030D75]">Privacy policy</h1>
          <p className="mt-2 text-sm text-[#53617f]">Last updated 15 October 2026</p>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">

        <article className="min-w-0">
          <div>
            {sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title} className="py-2">
                <div className="min-w-0">
                    <h2 className="font-display text-[22px] font-extrabold tracking-[-.035em] text-[#030D75] sm:text-[25px]">{section.title}</h2>
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="mt-2 text-[15px] leading-7 text-[#53617f]">{paragraph.includes("academy@jeroid.co") ? <>{paragraph.split("academy@jeroid.co")[0]}<a href="mailto:academy@jeroid.co" className="font-semibold text-[#030D75] underline decoration-[#00AFEF] underline-offset-4">academy@jeroid.co</a>{paragraph.split("academy@jeroid.co")[1]}</> : paragraph.includes("The terms of use sit alongside this policy.") ? <>{paragraph.split("The terms of use sit alongside this policy.")[0]}The <a href="/terms" className="font-semibold text-[#030D75] underline decoration-[#00AFEF] underline-offset-4">terms of use</a> sit alongside this policy.</> : paragraph}</p>
                    ))}
                    {section.items && (
                      <ul className="mt-2 grid gap-1">
                        {section.items.map(([label, description]) => (
                          <li key={label} className="relative pl-5 text-[15px] leading-7 text-[#53617f] before:absolute before:left-0 before:top-[10px] before:h-2 before:w-2 before:rounded-full before:bg-[#030D75]">
                            {label}: {description}
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
