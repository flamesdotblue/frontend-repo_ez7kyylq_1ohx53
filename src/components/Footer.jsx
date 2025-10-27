import React from 'react';
import { ArrowUp, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-blue-300" aria-hidden="true" />
            <span className="text-white font-semibold">AI Connect Solutions</span>
          </div>
          <p className="mt-3 text-sm">Enterprise AI chat and voice automation. Reliability, security, and measurable ROI.</p>
          <div className="mt-4 flex gap-3" aria-label="Social links">
            <a href="#" aria-label="LinkedIn" className="rounded p-2 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="X" className="rounded p-2 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="rounded p-2 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
        <nav aria-label="Quick links" className="grid grid-cols-2 gap-8 md:col-span-2">
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#resources" className="hover:text-white">Resources</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </nav>
        <div>
          <h3 className="text-sm font-semibold text-white">Newsletter</h3>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="newsletter-email">Work email</label>
            <input id="newsletter-email" type="email" required placeholder="Work email" className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <p className="text-xs">© {year} AI Connect Solutions. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-1 text-xs text-slate-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">
            <ArrowUp className="h-4 w-4" /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
