import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, LineChart, Globe2, Shield, Server, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Content() {
  return (
    <main id="main" className="relative">
      <Services />
      <Features />
      <TestimonialsCaseStudies />
      <CTASections />
    </main>
  );
}

function Services() {
  const cards = [
    {
      title: 'AI Chatbots',
      desc: 'Tailored conversational agents for omnichannel deployment, integrating NLP for personalized responses and lead qualification.',
      metric: 'Reduce response time by 70%'
    },
    {
      title: 'AI Calling',
      desc: 'Advanced voice AI for automated outbound campaigns, intelligent IVR, and real-time sentiment analysis in calls.',
      metric: 'Cut call handling costs by 40%'
    },
    {
      title: 'Integrations',
      desc: 'Seamless API connections to enterprise tools like Salesforce, Microsoft Dynamics, HubSpot, and custom ERPs.',
      metric: 'Deploy in weeks, not months'
    }
  ];

  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Solutions built for scale</h2>
          <p className="mt-3 text-slate-700">Deploy AI across chat and voice channels with enterprise-grade reliability, security, and insights.</p>
        </header>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 focus-within:ring-indigo-600"
            >
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500" aria-hidden="true" />
                <CheckCircle2 className="h-6 w-6 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-slate-700">{card.desc}</p>
              <p className="mt-4 text-sm font-medium text-indigo-700">{card.metric}</p>
              <a href="#resources" className="mt-6 inline-flex items-center text-indigo-700 hover:text-indigo-900 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </a>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-indigo-50 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      title: 'Multi-lingual NLP',
      content: '50+ languages and dialects with localized intents and entities for global audiences.',
      icon: Globe2,
    },
    {
      title: 'Advanced analytics',
      content: 'Engagement metrics, A/B testing, and predictive insights surfaced in an intuitive dashboard.',
      icon: LineChart,
    },
    {
      title: 'Flexible pricing & ROI',
      content: 'Tiered models with ROI calculators to forecast impact before you deploy.',
      icon: Server,
    },
    {
      title: 'Enterprise-grade reliability',
      content: '99.99% uptime SLA, redundant servers, and AI failover built-in.',
      icon: Shield,
    },
    {
      title: 'Robust security & compliance',
      content: 'End-to-end encryption, GDPR, CCPA, and SOC 2 Type II compliance.',
      icon: Shield,
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Enterprise features that move the needle</h2>
          <p className="mt-3 text-slate-700">Depth without overwhelm: explore the details via accessible tabs.</p>
        </header>

        {/* Tabs */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6" role="tablist" aria-label="Product features">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible" aria-orientation="vertical">
            {items.map((item, i) => (
              <button
                key={item.title}
                id={`tab-${i}`}
                role="tab"
                aria-selected={active === i}
                aria-controls={`panel-${i}`}
                className={`flex items-center gap-2 rounded-md border px-3 py-2 text-left min-w-[240px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${active === i ? 'border-indigo-600 bg-indigo-50 text-indigo-800' : 'border-slate-200 bg-white text-slate-800'}`}
                onClick={() => setActive(i)}
              >
                <item.icon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium">{item.title}</span>
              </button>
            ))}
          </div>
          <div className="lg:col-span-2">
            {items.map((item, i) => (
              <div
                key={item.title}
                id={`panel-${i}`}
                role="tabpanel"
                aria-labelledby={`tab-${i}`}
                hidden={active !== i}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-indigo-700" aria-hidden="true" /> {item.title}
                </h3>
                <p className="mt-2 text-slate-700">{item.content}</p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> Deploy with enterprise SSO</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> Granular role-based access</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> Private cloud & on-prem options</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsCaseStudies() {
  const testimonials = [
    {
      quote: 'AI Connect Solutions transformed our customer operations with measurable ROI in weeks.',
      name: 'Ava Thompson',
      title: 'VP Customer Experience',
      company: 'GlobalBank',
    },
    {
      quote: 'Their voice AI scaled outreach while keeping quality high. A true partner.',
      name: 'Liam Patel',
      title: 'Head of Growth',
      company: 'InnovateTech',
    },
    {
      quote: 'Reliable, secure, and effective across departments. Fantastic team.',
      name: 'Sophia Reed',
      title: 'Operations Director',
      company: 'HealthPro',
    },
  ];

  const studies = [
    {
      title: 'How Retail Giant X Boosted Conversions by 45%',
      metric: '45% lift in conversions',
      before: 'Fragmented chat flows, slow responses',
      after: 'Unified AI agents, instant answers',
    },
    {
      title: 'Insurance Leader Cuts Call Times by 32%',
      metric: '32% faster resolutions',
      before: 'Long IVR paths, hand-offs',
      after: 'Intelligent routing, sentiment insights',
    },
    {
      title: 'B2B SaaS Achieves 28% More Qualified Leads',
      metric: '28% more MQAs',
      before: 'Manual triage',
      after: 'AI qualification at source',
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <section id="resources" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Testimonials slider */}
          <div aria-label="Client testimonials" role="region">
            <header className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold text-slate-900">What leaders say</h2>
              <div className="flex gap-2" aria-label="slider controls">
                <button
                  className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
                  aria-label="Previous testimonial"
                >
                  Prev
                </button>
                <button
                  className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
                  Next
                </button>
              </div>
            </header>
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm min-h-[220px]" aria-live="polite">
              <blockquote className="italic text-slate-800">“{testimonials[index].quote}”</blockquote>
              <div className="mt-4 flex items-center gap-2 text-amber-500" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">{testimonials[index].name}</span> — {testimonials[index].title}, {testimonials[index].company}
              </p>
              <a href="#" className="mt-4 inline-flex items-center text-indigo-700 hover:text-indigo-900 font-semibold"><span>Case Study</span><ExternalLink className="ml-1 h-4 w-4" /></a>
              {/* Video embed placeholder with lazy loading */}
              <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                <iframe
                  title="Client video testimonial"
                  loading="lazy"
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Case studies */}
          <div id="pricing">
            <h2 className="text-3xl font-semibold text-slate-900">Proven impact</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {studies.map((s) => (
                <article key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-indigo-700 font-medium">{s.metric}</p>
                  <dl className="mt-3 text-sm text-slate-700">
                    <div className="flex gap-2"><dt className="font-semibold">Before:</dt><dd>{s.before}</dd></div>
                    <div className="flex gap-2"><dt className="font-semibold">After:</dt><dd>{s.after}</dd></div>
                  </dl>
                  <a href="#" className="mt-4 inline-flex items-center text-indigo-700 hover:text-indigo-900 font-semibold">Read Full Study<ArrowRight className="ml-1 h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASections() {
  return (
    <>
      {/* Inline form */}
      <section id="demo" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold text-slate-900">Unlock Your Custom AI Strategy Today</h2>
              <p className="mt-2 text-slate-700">Tell us your goals and constraints—we’ll shape a focused plan and ROI outlook.</p>
            </div>
            <form className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()} aria-label="Consultation form">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input required type="text" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Work Email</span>
                <input required type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Company Size</span>
                <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                  <option>51-200</option>
                  <option>201-500</option>
                  <option>501-1,000</option>
                  <option>1,001-5,000</option>
                  <option>5,000+</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Interest</span>
                <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600">
                  <option>Chatbots</option>
                  <option>Calling</option>
                  <option>Both</option>
                </select>
              </label>
              <div className="sm:col-span-2">
                <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-indigo-700 px-4 py-2 text-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600">
                  Request Strategy Session
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom banner */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-indigo-800 via-indigo-700 to-blue-600 py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Ready to Transform Your Operations?</h2>
          <p className="mt-3 text-indigo-100">Instantly book a time that works for you.</p>
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-indigo-800 font-semibold shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Book via Calendly
          </a>
        </div>
      </section>
    </>
  );
}
