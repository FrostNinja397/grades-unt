"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "A little homework before registration.",
  "New semester. New possibilities.",
  "Got a class in mind? Let's take a look.",
];

export default function HomeWelcome() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused) return;
    const timer = window.setInterval(() => {
      if (!motion.matches) setIndex((current) => (current + 1) % MESSAGES.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <p className="mx-auto mt-5 max-w-xl text-lg text-jungle-bark dark:text-ui-muted">
      <span className="block min-h-[3.3em] sm:min-h-[1.65em]">
        {MESSAGES[index]}{" "}
        <button
          type="button"
          onClick={() => setPaused((current) => !current)}
          aria-label={paused ? "Resume welcome messages" : "Pause welcome messages"}
          aria-pressed={paused}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full align-middle text-xs hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:hover:bg-ui-selected"
        >
          <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
        </button>
      </span>
      <span className="block">Explore past grades and find your next class.</span>
    </p>
  );
}
