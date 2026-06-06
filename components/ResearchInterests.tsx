import { researchInterests } from "@/data/siteData";

export default function ResearchInterests() {
  return (
    <section id="research" className="section-shell">
      <div className="rounded-[2rem] bg-navy-900 px-6 py-10 text-white shadow-card sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-academicGold">Research</p>
        <div className="mt-3 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Interests</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              My research sits at the intersection of situated interaction, sensing, and adaptive mixed-reality
              interface design.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
