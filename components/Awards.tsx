import { awards } from "@/data/siteData";

export default function Awards() {
  return (
    <section id="awards" className="section-shell">
      <p className="section-kicker">Awards</p>
      <h2 className="section-title">Honors</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {awards.map((award) => (
          <article key={`${award.title}-${award.year}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-academicGold">{award.year}</p>
            <h3 className="mt-2 text-base font-semibold leading-7 text-navy-900">{award.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
