import Image from "next/image";
import { links, profile } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="home" className="section-shell pt-12 sm:pt-16 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="section-kicker">XR, HCI, and mixed reality research</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-navy-700">{profile.title}</p>
          <p className="mt-2 text-base text-slate-600">{profile.affiliation}</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#publications"
              className="focus-ring rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-900/15 transition hover:-translate-y-0.5 hover:bg-navy-700"
            >
              View Publications
            </a>
            <a
              href="#projects"
              className="focus-ring rounded-full border border-navy-100 bg-white px-5 py-3 text-sm font-semibold text-navy-900 shadow-sm transition hover:-translate-y-0.5 hover:border-navy-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="focus-ring rounded-full border border-navy-100 bg-white/70 px-5 py-3 text-sm font-semibold text-navy-700 shadow-sm transition hover:-translate-y-0.5 hover:border-navy-500 hover:bg-white hover:text-navy-900"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={links.cv}
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-academicGold/40 bg-academicGold/10 px-5 py-3 text-sm font-semibold text-navy-900 transition hover:-translate-y-0.5 hover:bg-academicGold/20"
            >
              <CvIcon />
              Download CV
            </a>
            <a
              href={links.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white/90 px-5 py-3 text-sm font-semibold text-navy-900 shadow-sm transition hover:-translate-y-0.5 hover:border-navy-500 hover:bg-white"
            >
              <ScholarIcon />
              Google Scholar
            </a>
            <a
              href={links.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#0A66C2]/20 bg-[#0A66C2]/10 px-5 py-3 text-sm font-semibold text-navy-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/15"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-navy-100 via-white to-academicGold/20 blur-2xl" />
          <div className="glass-panel overflow-hidden rounded-[2rem] p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-navy-50">
              {/* TODO: Replace /public/profile-placeholder.svg with a professional headshot. */}
              <Image
                src={profile.profileImage}
                alt={profile.profileImageAlt}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 90vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-4 text-center">
              <div className="rounded-xl bg-white/80 px-3 py-4">
                <p className="text-2xl font-semibold text-navy-900">4</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Publications</p>
              </div>
              <div className="rounded-xl bg-white/80 px-3 py-4">
                <p className="text-2xl font-semibold text-navy-900">5</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Projects</p>
              </div>
              <div className="rounded-xl bg-white/80 px-3 py-4">
                <p className="text-2xl font-semibold text-navy-900">2026</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">Ph.D.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CvIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none">
      <path
        d="M5.5 2.75h6.25l2.75 2.75v11.75H5.5V2.75Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M11.75 2.75V5.5h2.75M7.75 9.25h4.5M7.75 12h4.5M7.75 14.75h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ScholarIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 text-navy-700" viewBox="0 0 20 20" fill="none">
      <path d="M2.25 7.25 10 3.5l7.75 3.75L10 11 2.25 7.25Z" fill="currentColor" opacity="0.18" />
      <path
        d="M2.25 7.25 10 3.5l7.75 3.75L10 11 2.25 7.25ZM5.25 9.25v3.5c1.26 1.1 2.84 1.65 4.75 1.65s3.49-.55 4.75-1.65v-3.5"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17.75 7.25v4" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 text-[#0A66C2]" viewBox="0 0 20 20" fill="currentColor">
      <path d="M4.65 6.55A2.05 2.05 0 1 0 4.64 2.45a2.05 2.05 0 0 0 .01 4.1ZM2.95 8.05h3.38v9.5H2.95v-9.5ZM8.18 8.05h3.23v1.3h.05c.45-.84 1.55-1.55 3.02-1.55 3.22 0 3.82 2.05 3.82 4.72v5.03h-3.38v-4.46c0-1.07-.02-2.44-1.56-2.44-1.56 0-1.8 1.17-1.8 2.36v4.54H8.18v-9.5Z" />
    </svg>
  );
}
