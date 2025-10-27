import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-[90vh] isolate">
      {/* Spline background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast; pointer events none to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-28">
        <div className="max-w-3xl">
          <h1 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Elevate Enterprise Communication with AI-Powered Precision
          </h1>
          <p className="mt-6 text-lg leading-7 text-slate-700">
            Intelligent chatbots and voice solutions for scalable, 24/7 customer interactions—driving efficiency and ROI.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md bg-indigo-700 px-5 py-3 text-white font-semibold shadow transition-transform hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              Discover Solutions
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-indigo-700 font-semibold border border-indigo-200 shadow-sm hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              Book a Demo
            </button>
          </div>

          {/* Trust badges */}
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-700" aria-label="Trust badges">
            {[
              { label: 'GDPR Compliant' },
              { label: 'ISO Certified' },
              { label: 'Trusted by Fortune 500' },
            ].map((b) => (
              <li key={b.label} className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-md border border-slate-200 px-3 py-2">
                <ShieldCheck className="h-5 w-5 text-indigo-700" aria-hidden="true" />
                <span className="sr-only">Trust badge: </span>
                <span className="font-medium text-slate-800">{b.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Demo modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Book a demo"
          >
            <div className="absolute inset-0 bg-slate-900/60" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Request a Personalized Demo</h2>
                <button
                  className="ml-4 text-slate-500 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded"
                  onClick={() => setOpen(false)}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>
              <p className="mt-2 text-sm text-slate-600">Tell us a bit about your goals. Our team will reach out with a tailored walkthrough.</p>
              <form className="mt-4 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Name</span>
                  <input required type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Work Email</span>
                  <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Company</span>
                  <input type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Interest</span>
                  <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                    <option>Chatbots</option>
                    <option>Calling</option>
                    <option>Both</option>
                  </select>
                </label>
                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-indigo-700 px-4 py-2 text-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
