"use client";

import { useState } from "react";

const examples = {
  simple: {
    question: "Can you explain this simply?",
    answer: "A blockchain is like a shared notebook. Many people keep the same record, and new entries are checked before everyone updates their copy.",
  },
  nigeria: {
    question: "Give me a Nigerian example",
    answer: "Think of an ajo contribution group where every member keeps the same notebook. When someone contributes, everyone updates their record so the group can compare and agree on the same history.",
  },
  analogy: {
    question: "Use an everyday analogy",
    answer: "Imagine a class group project where every student has a copy of the same logbook. New entries are checked and shared, so one person cannot quietly rewrite everybody else's copy.",
  },
};

export default function TutorPromptDemo() {
  const [active, setActive] = useState("simple");
  const example = examples[active as keyof typeof examples];

  return (
    <>
      <div className="tutor-chat mt-5" aria-live="polite">
        <div className="tutor-bubble tutor-question">{example.question}</div>
        <div className="tutor-bubble tutor-answer">{example.answer}</div>
      </div>
      <p className="mt-5 text-xs font-bold text-[#53617f]">Try asking:</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className={`tutor-prompt ${active === "simple" ? "is-active" : ""}`} aria-pressed={active === "simple"} onClick={() => setActive("simple")}>Explain this simply <span>↗</span></button>
        <button type="button" className={`tutor-prompt ${active === "nigeria" ? "is-active" : ""}`} aria-pressed={active === "nigeria"} onClick={() => setActive("nigeria")}>Give me a Nigerian example <span>↗</span></button>
        <button type="button" className={`tutor-prompt ${active === "analogy" ? "is-active" : ""}`} aria-pressed={active === "analogy"} onClick={() => setActive("analogy")}>Use an everyday analogy <span>↗</span></button>
      </div>
    </>
  );
}
