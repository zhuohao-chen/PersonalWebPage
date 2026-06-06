import { news } from "@/data/siteData";

export default function News() {
  return (
    <section id="news" aria-labelledby="news-heading" className="section-shell py-12 lg:py-14">
      <p className="section-kicker">News</p>
      <h2 id="news-heading" className="section-title">
        Recent Updates
      </h2>
      <div className="mt-8 grid gap-4">
        {news.map((item) => (
          <article key={`${item.date}-${item.text}`} className="glass-panel rounded-2xl p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <time className="min-w-28 text-sm font-semibold text-academicGold">{item.date}</time>
              <p className="text-slate-700">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
