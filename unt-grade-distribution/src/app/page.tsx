import SearchBar from "@/components/SearchBar";
import DepartmentGrid from "@/components/home/DepartmentGrid";
import GradeSkyline from "@/components/home/GradeSkyline";
import HeroAtmosphere from "@/components/home/HeroAtmosphere";
import QuickStart from "@/components/home/QuickStart";
import RankedCourses from "@/components/home/RankedCourses";
import StatStrip from "@/components/home/StatStrip";

export default function Home() {
  return (
    <div>
      <section className="relative flex min-h-[min(40rem,calc(100dvh-4rem-1px))] flex-col items-center justify-center gap-7 px-4 pb-36 pt-10 sm:pb-44">
        <HeroAtmosphere />
        <GradeSkyline />
        <div className="home-title relative select-none text-center">
          <p className="sparkle-text select-none text-xl font-medium tracking-wide text-jungle-vine sm:text-2xl">
            University of North Texas
          </p>
          <h1 className="sparkle-text sparkle-text-wide select-none font-display text-5xl font-bold text-primary sm:text-6xl">
            Grade Explorer
          </h1>
          <p className="mt-3 select-none text-lg font-medium tracking-wide text-jungle-bark/70">
            Search by course (e.g., &ldquo;ACCT 2010&rdquo;) or professor name
          </p>
        </div>

        <div className="relative z-30 w-full max-w-3xl">
          <SearchBar />
        </div>

        <div className="relative"><QuickStart /></div>
        <div className="relative"><StatStrip /></div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-6">
        <RankedCourses />
        <DepartmentGrid />
      </div>
    </div>
  );
}
