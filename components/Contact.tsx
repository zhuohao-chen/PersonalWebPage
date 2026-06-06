import { links, profile } from "@/data/siteData";

const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "GitHub", href: links.github, value: links.github },
  { label: "Google Scholar", href: links.googleScholar, value: links.googleScholar },
  { label: "LinkedIn", href: links.linkedIn, value: links.linkedIn },
  { label: "CV", href: links.cv, value: "Download CV" }
];

function isUsableContactLink(href: string) {
  return Boolean(href.trim() && href !== "#");
}

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-700 to-navy-900 p-6 text-white shadow-card sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-academicGold">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s Connect</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-200">
              I am interested in research conversations around adaptive XR, mixed-reality interaction, behavioral
              sensing, and user-centered system design.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.filter((item) => isUsableContactLink(item.href)).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="focus-ring rounded-2xl border border-white/10 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15"
              >
                <p className="text-sm font-semibold text-academicGold">{item.label}</p>
                <p className="mt-2 break-words text-sm text-white">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
