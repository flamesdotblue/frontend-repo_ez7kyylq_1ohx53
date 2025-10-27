import React, { useState } from 'react';
import { Search, Globe, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About Us', href: '#about' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200" role="banner" aria-label="Primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded" aria-label="AI Connect Solutions Home">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-700 to-blue-500 shadow-inner" aria-hidden="true" />
            <span className="text-slate-900 font-semibold tracking-tight">AI Connect Solutions</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded px-1 py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              className="p-2 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              aria-label="Search site"
            >
              <Search className="h-5 w-5" />
            </button>
            <label className="sr-only" htmlFor="language-select">Select language</label>
            <select
              id="language-select"
              className="appearance-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              aria-label="Language selector"
              defaultValue="en"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
            </select>
            <a
              href="#demo"
              className="inline-flex items-center rounded-md bg-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-150 ease-out hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              Schedule Consultation
            </a>
          </div>

          {/* Mobile */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-4" role="dialog" aria-label="Mobile Navigation">
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation Links">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded px-3 py-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 px-1 mt-2">
                <Search className="h-5 w-5 text-slate-600" aria-hidden="true" />
                <input
                  type="search"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Search site"
                  aria-label="Search site"
                />
              </div>
              <div className="flex items-center gap-2 px-1">
                <Globe className="h-5 w-5 text-slate-600" aria-hidden="true" />
                <label className="sr-only" htmlFor="language-select-mobile">Select language</label>
                <select id="language-select-mobile" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" defaultValue="en">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              <a
                href="#demo"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-indigo-700 px-4 py-2 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                onClick={() => setOpen(false)}
              >
                Schedule Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
