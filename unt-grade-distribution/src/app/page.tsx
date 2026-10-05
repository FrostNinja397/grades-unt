import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import QuickStart from "@/components/home/QuickStart";
import RankedCourses from "@/components/home/RankedCourses";
import HomeWelcome from "@/components/home/HomeWelcome";

export default function Home() {
  return (
    <div className="home-student">
      <section className="home-page relative flex min-h-[min(34rem,calc(100dvh-4rem-1px))] flex-col items-center justify-center gap-8 px-4 py-12">
        <div className="home-title relative max-w-3xl text-center">
          <p className="home-eyebrow text-sm font-semibold text-primary dark:text-ui-accent">
            UNT Grade Explorer · Go Mean Green
          </p>
          <h1 className="mt-4 text-primary dark:text-ui-text">
            Find your classes.<br />
            <em>Know what&apos;s ahead.</em>
          </h1>
          <HomeWelcome />
        </div>

        <div className="relative z-30 w-full max-w-3xl">
          <SearchBar placeholder="Find a class or professor…" />
          <p className="mt-3 text-center text-sm text-jungle-bark dark:text-ui-muted">
            Course code, class title, or professor. Start wherever you are.
          </p>
        </div>

        <div className="relative">
          <QuickStart />
        </div>

        <Link
          href="/terms"
          className="relative text-sm font-medium text-jungle-vine underline decoration-jungle-vine/50 underline-offset-4 transition hover:text-primary hover:decoration-primary dark:text-ui-muted dark:decoration-ui-accent/50 dark:hover:text-ui-accent"
        >
          Terms of Service
        </Link>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-6">
        <section aria-labelledby="registration-heading" className="home-game-plan border-y border-jungle-tan-dark/40 py-8 dark:border-ui-border">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="registration-heading" className="text-2xl text-primary dark:text-ui-text">Make your next semester yours.</h2>
            <p className="text-sm text-jungle-bark dark:text-ui-muted">Your pre-registration game plan</p>
          </div>
          <ol className="grid gap-6 sm:grid-cols-3">
            <li>
              <span className="text-xs font-bold text-primary dark:text-ui-accent">01 / THE CLASS</span>
              <h3 className="mt-2 font-semibold text-jungle-bark dark:text-ui-text">Get the whole picture.</h3>
              <p className="mt-2 text-sm leading-relaxed text-jungle-bark dark:text-ui-muted">Calculus on the brain? Check the grade distribution before it lands on your schedule.</p>
            </li>
            <li>
              <span className="text-xs font-bold text-primary dark:text-ui-accent">02 / THE PROFESSOR</span>
              <h3 className="mt-2 font-semibold text-jungle-bark dark:text-ui-text">Same class. Different sections.</h3>
              <p className="mt-2 text-sm leading-relaxed text-jungle-bark dark:text-ui-muted">Search a professor and explore their past sections. There&apos;s more to the story than one average.</p>
            </li>
            <li>
              <span className="text-xs font-bold text-primary dark:text-ui-accent">03 / YOUR SHORTLIST</span>
              <h3 className="mt-2 font-semibold text-jungle-bark dark:text-ui-text">Keep your options together.</h3>
              <p className="mt-2 text-sm leading-relaxed text-jungle-bark dark:text-ui-muted">Save classes as you browse, then <Link href="/cart" className="font-semibold underline underline-offset-4 hover:text-primary dark:hover:text-ui-accent">revisit your picks</Link> when it&apos;s time to decide.</p>
            </li>
          </ol>
          <p className="mt-7 text-xs leading-relaxed text-jungle-bark dark:text-ui-muted">Past grades are a starting point. Your interests, workload, and the syllabus belong in the decision, too.</p>
        </section>
        <RankedCourses />
      </div>
    </div>
  );
}
