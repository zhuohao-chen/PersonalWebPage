import { bio, education } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">Research Identity</h2>
          <p className="section-copy">{bio}</p>
        </div>
        <div className="glass-panel rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-navy-900">Education</h3>
          <div className="mt-6 grid gap-5">
            {education.map((item) => (
              <article key={`${item.degree}-${item.institution}`} className="border-l-2 border-navy-100 pl-5">
                <h4 className="font-semibold text-slate-950">{item.degree}</h4>
                <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
                <p className="mt-2 text-sm font-medium text-navy-700">{item.date}</p>
                {item.detail ? <p className="mt-1 text-sm text-slate-500">{item.detail}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
