import { leadership } from "@/data/siteData";

export default function Leadership() {
  return (
    <section aria-labelledby="leadership-heading" className="section-shell py-12 lg:py-14">
      <p className="section-kicker">Leadership</p>
      <h2 id="leadership-heading" className="section-title">
        Service & Community
      </h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {leadership.map((item) => (
          <article key={item.title} className="glass-panel rounded-2xl p-6">
            <p className="text-sm font-semibold text-academicGold">{item.date}</p>
            <h3 className="mt-3 text-xl font-semibold text-navy-900">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
