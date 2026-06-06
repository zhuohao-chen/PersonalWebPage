import { skillGroups } from "@/data/siteData";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <p className="section-kicker">Skills</p>
      <h2 className="section-title">Methods, Systems, and Tools</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.category} className="glass-panel rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-navy-900">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
