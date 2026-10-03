import { GRADE_COLORS } from "@/lib/grades";

const GRADES = ["A", "B", "C", "D", "F"] as const;
// Typical shape of a grade distribution: lots of A and B, few D and F.
const SHAPE = [0.9, 0.72, 0.46, 0.2, 0.12];
const CLUSTERS = 15;

const clusters = Array.from({ length: CLUSTERS }, (_, cluster) => {
  const amplitude = 0.5 + 0.5 * Math.abs(Math.sin(cluster * 1.7 + 0.6));
  return GRADES.map((grade, index) => {
    const wobble = 0.88 + 0.12 * Math.sin(cluster * 2.3 + index * 1.1);
    return {
      grade,
      height: Math.round(Math.max(0.08, SHAPE[index] * amplitude * wobble) * 100),
      delay: ((cluster * 5 + index) % 9) * 0.7,
      duration: 6 + ((cluster + index) % 4),
    };
  });
});

/** Decorative row of small grade histograms along the bottom of the hero. */
export default function GradeSkyline() {
  return (
    <div
      aria-hidden="true"
      className="skyline-mask pointer-events-none absolute inset-x-0 bottom-0 flex h-36 items-end justify-center gap-6 overflow-hidden opacity-30 saturate-75 sm:h-44 dark:opacity-20 dark:saturate-50"
    >
      {clusters.map((bars, cluster) => (
        <div key={cluster} className="flex h-full flex-none items-end gap-[3px]">
          {bars.map((bar) => (
            <span
              key={bar.grade}
              className="skyline-bar block w-2.5 rounded-t-sm sm:w-3"
              style={
                {
                  height: `${bar.height}%`,
                  "--bar": GRADE_COLORS[bar.grade],
                  "--delay": `${bar.delay}s`,
                  "--dur": `${bar.duration}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
