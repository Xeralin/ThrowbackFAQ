"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };

function Chevron() {
  return (
    <svg
      className="question-chevron"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function Item({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const answerRef = useRef<HTMLDivElement>(null);
  const answerId = `faq-${index}-answer`;

  function toggle() {
    if (open) {
      setMaxHeight(0);
      setOpen(false);
    } else {
      setMaxHeight(answerRef.current?.scrollHeight ?? 0);
      setOpen(true);
    }
  }

  return (
    <div className={open ? "question open" : "question"}>
      <button
        type="button"
        className="question-header"
        aria-expanded={open}
        aria-controls={answerId}
        onClick={toggle}
      >
        <span className="question-title">{item.q}</span>
        <Chevron />
      </button>
      <div
        id={answerId}
        ref={answerRef}
        className="answer"
        style={{ maxHeight }}
        inert={!open ? true : undefined}
      >
        <div className="answer-inner">{item.a}</div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <Item key={item.q} item={item} index={index} />
      ))}
    </div>
  );
}
