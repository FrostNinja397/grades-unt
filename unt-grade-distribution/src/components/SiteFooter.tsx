import Link from "next/link";

const LINK_CLASS =
  "text-jungle-bark underline decoration-jungle-vine/40 underline-offset-4 transition hover:text-primary hover:decoration-primary dark:text-ui-muted dark:decoration-ui-accent/40 dark:hover:text-ui-text";

export default function SiteFooter() {
  return (
    <footer className="relative z-20 mt-16 border-t border-jungle-tan-dark/30 bg-jungle-tan/80 pb-24 pt-8 dark:border-ui-border dark:bg-transparent">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 text-sm sm:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-md">
          <p className="font-display text-xl font-bold text-primary dark:text-ui-accent">UNT Grades</p>
          <p className="mt-1 text-jungle-bark/80 dark:text-ui-muted">
            Grade distributions for University of North Texas courses and instructors.
          </p>
        </div>
        <nav aria-label="Site" className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jungle-vine dark:text-ui-accent">Explore</p>
          <Link href="/" className={LINK_CLASS}>Search</Link>
          <Link href="/#departments" className={LINK_CLASS}>Departments</Link>
          <Link href="/compare" className={LINK_CLASS}>Compare</Link>
          <Link href="/cart" className={LINK_CLASS}>Saved courses</Link>
        </nav>
        <nav aria-label="About" className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jungle-vine dark:text-ui-accent">About</p>
          <Link href="/terms" className={LINK_CLASS}>Terms of Service</Link>
          <a href="https://github.com/dyl-joseph/grades-unt" target="_blank" rel="noreferrer" className={LINK_CLASS}>
            Source on GitHub
          </a>
          <a href="https://ko-fi.com/S6S61VT6MR" target="_blank" rel="noreferrer" className={LINK_CLASS}>
            Support on Ko-fi
          </a>
        </nav>
      </div>
    </footer>
  );
}
