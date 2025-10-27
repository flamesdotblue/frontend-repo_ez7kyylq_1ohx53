import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Content from './components/Content';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Skip to content for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-indigo-700 focus:px-4 focus:py-2 focus:text-white">Skip to main content</a>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}
