"use client";

import { useManifestSummary } from "@/hooks/useHomeData";

export default function StatStrip() {
  const summary = useManifestSummary();
  const items = [
    { label: "Courses", value: summary?.courses },
    { label: "Instructors", value: summary?.instructors },
    { label: "Departments", value: summary?.departments.length },
  ];

  return (
    <dl
      className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3"
      aria-busy={summary === null}
    >
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <dd className="font-mono text-3xl font-bold tabular-nums text-primary dark:text-ui-accent">
            {item.value === undefined ? "—" : item.value.toLocaleString()}
          </dd>
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-jungle-bark/70 dark:text-ui-muted">
            {item.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
