'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#process', label: 'Process' },
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    navLinks.forEach((link) => {
      const id = link.href.split('#')[1];
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((e, href) => {
    setMobileOpen(false);
    // If it's a same-page anchor, smooth scroll
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-[20px] border-b border-on-surface/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-16 md:h-20">
        <Link
          href="/"
          className="font-headline-md text-headline-md tracking-tighter text-on-surface font-bold uppercase"
        >
          SULAIMON<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-body-md text-body-md">
          {navLinks.map((link) => {
            const sectionId = link.href.split('#')[1];
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://calendar.app.google/FWxEjkJSGDDemGJD9"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-[#111111] text-white px-6 py-3 rounded-full font-semibold text-sm btn-glow-purple"
        >
          Book a Call
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2.5 z-50 cursor-pointer relative touch-manipulation"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-on-surface rounded transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-on-surface rounded transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-on-surface rounded transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${mobileOpen ? '' : 'pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-400 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[280px] max-w-[85vw] bg-white/90 backdrop-blur-xl border-l border-on-surface/10 transition-transform duration-400 ease-out z-50 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 h-20 border-b border-on-surface/10">
              <span className="text-label-caps text-on-surface-variant font-semibold tracking-wider uppercase">// navigation</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-2xl text-on-surface">close</span>
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col px-6 py-8 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3.5 px-4 -mx-4 rounded-xl text-headline-md text-on-surface font-medium hover:bg-surface-container hover:text-primary transition-all active:scale-[0.98]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="px-6 py-6 border-t border-on-surface/10">
              <a
                href="https://calendar.app.google/FWxEjkJSGDDemGJD9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#111111] text-white px-6 py-4 rounded-full font-semibold btn-glow-purple active:scale-[0.98] touch-manipulation"
              >
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
