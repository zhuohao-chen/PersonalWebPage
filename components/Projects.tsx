import Image from "next/image";
import { projects, videoProjects } from "@/data/siteData";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <p className="section-kicker">Projects</p>
      <h2 className="section-title">Research & Creative Projects</h2>
      <p className="section-copy">
        Research contributions, technical work, and playable experiences across XR, computational design,
        and games.
      </p>
      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-navy-900">Research in Practice</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Visuals and contributions behind the selected papers. Follow each related paper for its abstract and publication details.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            id={`project-${project.researchId}`}
            key={project.title}
            className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition hover:border-navy-100 target:border-navy-500 target:ring-2 target:ring-navy-100"
          >
            <div className="relative aspect-[2/1] bg-navy-50">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-navy-900">{project.title}</h4>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={`#paper-${project.researchId}`}
                className="focus-ring mt-5 inline-flex items-center rounded-lg bg-navy-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-900 active:bg-navy-900"
                aria-label={`Related paper for ${project.title}`}
              >
                Related paper <span aria-hidden="true" className="ml-2">↑</span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-14 border-t border-slate-200 pt-10">
        <h3 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
          Games & Immersive Experiences
        </h3>
        <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
          Watch project demos exploring cultural heritage, VR simulation, environmental education, and game mechanics.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {videoProjects.map((project) => (
            <article
              key={project.videoId}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
            >
              <div className="aspect-video bg-navy-50">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${project.videoId}`}
                  title={`${project.title} — project demo`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="h-full w-full border-0"
                />
              </div>
              <div className="p-6">
                {project.highlight ? (
                  <p className="mb-3 text-xs font-semibold leading-5 text-navy-700">{project.highlight}</p>
                ) : null}
                <h4 className="text-xl font-semibold text-navy-900">{project.title}</h4>
                <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://youtu.be/${project.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring mt-6 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-navy-700 transition hover:border-navy-500 hover:bg-navy-50"
                  aria-label={`Watch ${project.title} on YouTube`}
                >
                  Watch on YouTube <span aria-hidden="true" className="ml-2">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
