"use client";

import Link from 'next/link';
import { ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';

const navLinks = [
  {
    title: 'Visit',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/programs', label: 'Programs' },
      { href: '/contact', label: 'Contact' },
    ]
  },
  {
    title: 'Experience',
    links: [
      { href: '/gallery', label: 'Photo Gallery' },
      { href: '/stories', label: 'Success Stories' },
      { href: '/team', label: 'Our Team' },
    ]
  },
  {
    title: 'Learn',
    links: [
      { href: '/islamic-teachings', label: 'Islamic Teachings on Orphans' },
      { href: '/resources', label: 'Resources' },
      { href: '/blog', label: 'Blog' },
    ]
  },
  {
    title: 'Support',
    links: [
      { href: '/get-involved#donate', label: 'Donate' },
      { href: '/get-involved#volunteer', label: 'Volunteer' },
      { href: '/get-involved#partner', label: 'Partner With Us' },
      { href: '/contact', label: 'Contact Us' },
    ]
  },
];


export function Footer() {
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  return (
    <footer className="relative z-10 mt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[40vmin] h-[40vmin] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute top-0 right-1/4 w-[30vmin] h-[30vmin] rounded-full bg-primary-dark/5 blur-[80px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="rounded-3xl border border-border bg-card/20 backdrop-blur overflow-hidden">
          <div className="md:p-12 border-border border-b pt-8 pr-8 pb-8 pl-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-9 w-9 shadow-primary/10 grid place-items-center bg-[conic-gradient(from_315deg,var(--tw-gradient-stops))] from-primary via-primary-light to-primary-dark rounded-lg shadow-lg">
                    <span className="text-base font-semibold text-primary-foreground tracking-tight">AC</span>
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight leading-none">
                    <span className="text-foreground/95">Al-Ansor </span><span className="text-primary">Orphan Care Foundation</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground max-w-md">
                  Caring for the Muslim orphan through compassion, education, and community support in Nigeria.
                </p>
                <div className="p-4 rounded-xl bg-secondary border border-border">
                  <p className="text-sm text-primary uppercase tracking-wide font-medium mb-2">Our Mission</p>
                  <p className="text-foreground/80">Making a lasting impact on the lives of orphans, guided by Islamic principles of compassion and justice.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground/95 mb-2">Stay Connected</h3>
                  <p className="text-muted-foreground">Get updates on our activities, success stories, and needs.</p>
                </div>
                <form action="mailto:alansororphancare@gmail.com" method="POST" className="space-y-3">
                   <div className="relative rounded-xl border border-input bg-background backdrop-blur overflow-hidden">
                    <input type="email" name="email" placeholder="Enter your email address" className="h-12 w-full bg-transparent px-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0" />
                  </div>
                  <button type="submit" className="w-full h-12 bg-secondary hover:bg-muted transition font-medium text-foreground border-border border rounded-xl shadow-lg">
                    Subscribe to Updates
                  </button>
                </form>
                <div className="flex gap-3 items-center">
                  <span className="text-sm text-muted-foreground">Follow us:</span>
                  <div className="flex items-center gap-2">
                    <a href="https://instagram.com/alansororphancare" target="_blank" rel="noopener noreferrer" className="h-10 w-10 bg-secondary hover:bg-muted grid place-items-center transition group border-border border rounded-xl">
                      <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                    </a>
                    <a href="https://facebook.com/alansororphancare" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-xl bg-secondary hover:bg-muted border border-border grid place-items-center transition group">
                      <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                    </a>
                    <a href="#" className="h-10 w-10 rounded-xl bg-secondary hover:bg-muted border border-border grid place-items-center transition group">
                      <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12 border-b border-border">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {navLinks.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h4 className="text-sm font-medium text-primary uppercase tracking-wide">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, index) => (
                      <li key={`${link.label}-${index}`}>
                        <Link href={link.href} className="text-muted-foreground hover:text-foreground transition text-sm">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Al-Ansor Orphan Care Foundation. All rights reserved.</p>
                <p>A project by the women of Dawah Front of Nigeria (DFN).</p>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground transition">Privacy Policy</a>
                <span className="text-border">•</span>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">Terms of Service</a>
              </div>
              <button onClick={handleScrollTop} className="inline-flex items-center gap-2 rounded-xl bg-secondary hover:bg-muted border border-border px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
        <div className="h-8"></div>
      </div>
    </footer>
  );
}
