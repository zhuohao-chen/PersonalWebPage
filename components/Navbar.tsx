"use client";

import { useState } from "react";
import { navItems, profile } from "@/data/siteData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-100/70 bg-gradient-to-r from-navy-50/95 via-white/90 to-sky-50/95 shadow-[0_10px_35px_rgba(11,23,54,0.08)] backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="focus-ring rounded text-sm font-semibold tracking-tight text-navy-900 transition hover:text-navy-700"
        >
          {profile.name}
        </a>
        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-100 bg-white/70 text-navy-900 shadow-sm md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/85 hover:text-navy-900 hover:shadow-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-navy-100/70 bg-gradient-to-b from-white/95 to-navy-50/95 px-5 py-3 shadow-lg md:hidden"
        >
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-white/85 hover:text-navy-900"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
