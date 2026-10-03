import Link from "next/link";

const CHIP_CLASS =
  "rounded-full border border-jungle-tan-dark/40 bg-jungle-tan-light/70 px-3 py-1 text-sm font-medium text-jungle-bark transition-colors hover:border-primary/50 hover:text-primary dark:border-ui-border dark:bg-ui-surface dark:text-ui-text dark:hover:border-ui-accent dark:hover:text-ui-accent";

const POPULAR_COURSES = [
  { prefix: "ACCT", number: "2010", label: "ACCT 2010" },
  { prefix: "BIOL", number: "1710", label: "BIOL 1710" },
  { prefix: "CSCE", number: "1030", label: "CSCE 1030" },
  { prefix: "ECON", number: "1110", label: "ECON 1110" },
  { prefix: "ENGL", number: "1310", label: "ENGL 1310" },
  { prefix: "MATH", number: "1710", label: "MATH 1710" },
  { prefix: "PSYC", number: "1630", label: "PSYC 1630" },
];

export default function QuickStart() {
  return (
    <nav aria-label="Popular courses" className="flex flex-wrap items-center justify-center gap-2">
      <span className="mr-1 text-sm text-jungle-bark/70 dark:text-ui-muted">Try</span>
      {POPULAR_COURSES.map((course) => (
        <Link key={course.label} href={`/course/${course.prefix}/${course.number}`} className={CHIP_CLASS}>
          {course.label}
        </Link>
      ))}
      <a href="#departments" className={CHIP_CLASS}>
        Browse departments <span aria-hidden="true">&darr;</span>
      </a>
    </nav>
  );
}
