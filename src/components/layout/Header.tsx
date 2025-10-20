"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';


const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
];

const TwoLineMenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <line x1="3" y1="16" x2="21" y2="16"></line>
    </svg>
);

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="max-w-7xl md:px-8 flex mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-9 w-9 shadow-primary/10 grid place-items-center bg-[conic-gradient(from_315deg,var(--tw-gradient-stops))] from-primary via-primary-light to-primary-dark rounded-lg shadow-lg">
            <span className="text-white/90 text-[13px] font-semibold tracking-tight">AC</span>
          </div>
          <div className="font-semibold tracking-tight leading-none text-xl">
            <span className="text-base md:text-xl">Al-Ansor </span><span className="text-primary text-base md:text-xl">Orphan Care Foundation</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4 text-sm text-foreground/70">
          {navLinks.map((link, index) => (
            <React.Fragment key={`${link.href}-${index}`}>
              <Link href={link.href} className="hover:text-foreground transition-colors font-medium">
                {link.label}
              </Link>
              {index < navLinks.length - 1 && <span className="text-border">•</span>}
            </React.Fragment>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="https://instagram.com/alansororphancare" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center justify-center h-10 w-10 rounded-xl bg-secondary hover:bg-muted border transition" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-foreground/80" />
          </a>
          <a href="https://facebook.com/alansororphancare" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center justify-center h-10 w-10 rounded-xl bg-secondary hover:bg-muted border transition" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-foreground/80" />
          </a>
          
          <ThemeToggle />

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-secondary hover:bg-muted border transition">
                <TwoLineMenuIcon className="h-5 w-5 text-foreground/80" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full bg-background/90 backdrop-blur-lg p-6 text-foreground border-b-0">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">
                    A menu of links to navigate the Al-Ansor Orphan Care Foundation website.
                </SheetDescription>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-6 border-b border-border/10">
                  <Link href="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="h-9 w-9 grid place-items-center bg-[conic-gradient(from_315deg,var(--tw-gradient-stops))] from-primary via-primary-light to-primary-dark rounded-lg">
                      <span className="text-white/90 text-sm font-semibold">AC</span>
                    </div>
                    <div className="text-lg font-semibold">
                      Al-Ansor<span className="text-primary">Orphan Care Foundation</span>
                    </div>
                  </Link>
                   <SheetTrigger asChild>
                     <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl focus:ring-0 focus:ring-offset-0">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                   </SheetTrigger>
                </div>
                <nav className="flex-1 flex flex-col gap-y-2 mt-6">
                  {navLinks.map((link, index) => (
                    <React.Fragment key={`mobile-${link.href}-${index}`}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {index < navLinks.length - 1 && <hr className="border-border/10 border-dashed"/>}
                    </React.Fragment>
                  ))}
                </nav>
                <div className="mt-6 pt-6 border-t border-border/10">
                  <Button asChild className="w-full">
                    <Link href="/get-involved#donate" onClick={() => setIsMobileMenuOpen(false)}>Donate Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
