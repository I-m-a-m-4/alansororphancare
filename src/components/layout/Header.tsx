"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled || isMobileMenuOpen ? "py-2" : "py-6"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto px-6 md:px-8 transition-all duration-300",
         (isScrolled || isMobileMenuOpen) && "rounded-2xl border border-dashed border-border/30 bg-card/50 backdrop-blur-sm shadow-xl"
      )}>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-9 w-9 shadow-primary/10 grid place-items-center bg-[conic-gradient(from_315deg,var(--tw-gradient-stops))] from-primary via-primary-light to-primary-dark rounded-lg shadow-lg">
              <span className="text-white/90 text-[13px] font-semibold tracking-tight">AC</span>
            </div>
            <div className="font-semibold tracking-tight leading-none text-xl">
              <span className="text-base md:text-xl">Al-Ansor </span><span className="text-primary text-base md:text-xl">Orphan Care</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-12 text-sm text-foreground/70">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative group font-medium transition hover:text-white",
                    isActive ? "text-primary" : ""
                  )}
                >
                  <span>{link.label}</span>
                   <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ease-out",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}></span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
             <div className="hidden sm:flex items-center gap-2">
                <a href="https://instagram.com/alansororphancare" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-xl bg-secondary hover:bg-muted border transition" aria-label="Instagram">
                    <Instagram className="w-5 h-5 text-foreground/80" />
                </a>
                <a href="https://facebook.com/alansororphancare" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-xl bg-secondary hover:bg-muted border transition" aria-label="Facebook">
                    <Facebook className="w-5 h-5 text-foreground/80" />
                </a>
             </div>

            <Button
                variant="ghost"
                size="icon"
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-secondary hover:bg-muted border transition"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
            <div className="flex flex-col gap-4 py-4 md:hidden">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={cn("text-zinc-300 transition hover:text-white", pathname === link.href ? 'text-primary' : '')}>
                  {link.label}
                </Link>
              ))}
               <Button asChild className="w-full justify-center mt-2">
                  <Link href="/get-involved#donate">Donate Now</Link>
                </Button>
            </div>
          )}
      </div>
    </header>
  );
}
