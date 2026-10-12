import { projects, publications } from "@/data/siteData";

const linkLabels = {
  pdf: "PDF",
  doi: "DOI",
  project: "Project Page",
  bibtex: "BibTeX",
  code: "Code",
  video: "Video"
} as const;

const linkOrder = ["pdf", "doi", "project", "bibtex", "code", "video"] as const;

function isUsableLink(href: string | undefined) {
  return Boolean(href && href.trim() && href !== "#");
}

export default function Publications() {
  return (
    <section id="publications" className="section-shell">
      <p className="section-kicker">Publications</p>
      <h2 className="section-title">Selected Papers</h2>
      <p className="section-copy">
        Peer-reviewed and accepted work across mixed reality perception, generative AI for game creation, and predictive
        display design.
      </p>
      <div className="mt-8 grid gap-5">
        {publications.map((publication) => (
          <article
            id={`paper-${publication.researchId}`}
            key={publication.title}
            className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-navy-100 target:border-navy-500 target:ring-2 target:ring-navy-100"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                    {publication.year}
                  </span>
                  <span className="rounded-full bg-academicGold/10 px-3 py-1 text-xs font-semibold text-navy-900">
                    {publication.status}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug text-navy-900">{publication.title}</h3>
                <p
                  className="mt-3 text-sm leading-7 text-slate-600"
                  dangerouslySetInnerHTML={{ __html: publication.authors }}
                />
                <p className="mt-2 text-sm font-medium leading-6 text-navy-700">{publication.venue}</p>
                {publication.note ? <p className="mt-2 text-sm text-slate-500">{publication.note}</p> : null}
                <details className="group/abstract mt-4">
                  <summary className="focus-ring inline-flex cursor-pointer list-none items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-navy-700 transition hover:border-navy-500 hover:bg-navy-50 [&::-webkit-details-marker]:hidden">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4 transition-transform group-open/abstract:rotate-180"
                    >
                      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="group-open/abstract:hidden">Show abstract</span>
                    <span className="hidden group-open/abstract:inline">Hide abstract</span>
                    <span className="sr-only"> for {publication.title}</span>
                  </summary>
                  <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">{publication.description}</p>
                </details>
              </div>
            </div>
            {projects.some((project) => project.researchId === publication.researchId) || linkOrder.some((key) => isUsableLink(publication.links[key])) ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {projects.some((project) => project.researchId === publication.researchId) ? (
                  <a
                    href={`#project-${publication.researchId}`}
                    className="focus-ring rounded-full border border-navy-100 bg-navy-50 px-3 py-2 text-xs font-semibold text-navy-700 transition hover:border-navy-500"
                    aria-label={`View project for ${publication.title}`}
                  >
                    View project <span aria-hidden="true">↓</span>
                  </a>
                ) : null}
                {linkOrder.map((key) => {
                  const href = publication.links[key];
                  if (!isUsableLink(href)) {
                    return null;
                  }

                  return (
                    <a
                      key={key}
                      href={href}
                      target={href?.startsWith("http") ? "_blank" : undefined}
                      rel={href?.startsWith("http") ? "noreferrer" : undefined}
                      className="focus-ring rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-navy-500 hover:bg-navy-50 hover:text-navy-900"
                      aria-label={`${linkLabels[key]} for ${publication.title}`}
                    >
                      {linkLabels[key]}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
