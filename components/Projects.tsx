import Image from "next/image";
import { projects } from "@/data/siteData";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <p className="section-kicker">Projects</p>
      <h2 className="section-title">Research & Technical Experience</h2>
      <p className="section-copy">
        Project work spanning outdoor mixed reality, systematic review methodology, predictive displays, parametric
        modeling, and immersive systems.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:border-navy-100 ${
              index === 0 ? "md:col-span-2 lg:grid lg:grid-cols-[0.9fr_1.1fr]" : ""
            }`}
          >
            <div className="relative min-h-64 bg-navy-50">
              {/* TODO: Replace project placeholder SVGs in /public with real project images or diagrams. */}
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                sizes={index === 0 ? "(min-width: 1024px) 520px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-navy-900">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
