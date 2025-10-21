
"use client";

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, BookOpen, ShieldCheck, Handshake, Check, ChevronDown, Users, Sparkles, Earth, FlaskConical, Ticket, CirclePlay, Calendar, Mail, ScanEye, Play, ChevronRight, Moon, Sun, ArrowUpRight, Cpu, Telescope, Gift, GraduationCap, DollarSign, HelpingHand } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect, useRef } from 'react';


export default function Home() {

  const features = [
    {
      icon: <Sparkles className="w-[20px] h-[20px] text-foreground/50" />,
      title: 'Compassionate Care',
      description: 'Providing a loving and stable environment for every child.',
      category: 'Orphan Support'
    },
    {
      icon: <Earth className="w-[20px] h-[20px] text-foreground/50" />,
      title: 'Quality Education',
      description: 'Ensuring access to education to help them build a bright future.',
      category: 'Education'
    },
    {
      icon: <FlaskConical className="w-[20px] h-[20px] text-foreground/50" />,
      title: 'Health & Well-being',
      description: 'Delivering healthcare and promoting a healthy lifestyle.',
      category: 'Healthcare'
    },
  ];

  const faqs = [
    {
      question: "How can I donate?",
      answer: "You can donate through bank transfer, online payment platforms, or by visiting our office in Ibadan. Please visit our 'Get Involved' page for more details."
    },
    {
      question: "Can I volunteer my time?",
      answer: "Yes, we welcome volunteers. We have various opportunities available. Please fill out the volunteer form on our website to get started."
    },
    {
      question: "What kind of in-kind donations do you accept?",
      answer: "We accept food items, clothing, educational materials, and other essentials. Please contact us to coordinate and ensure your donation meets current needs."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "As a registered non-profit in Nigeria, corporate donors may be eligible for tax benefits. Please consult with a tax professional for specific advice."
    },
    {
      question: "How is the foundation governed?",
      answer: "Al-Ansor is governed by a board of trustees who are committed to transparency, accountability, and upholding our Islamic values in all operations."
    }
  ]

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Al-Ansor Orphan Care Foundation",
    "url": "https://alansororphancare.com",
    "logo": "https://alansororphancare.com/logo.png", // You should create this logo
    "email": "alansororphancare@gmail.com",
    "sameAs": [
      "https://facebook.com/alansororphancare",
      "https://instagram.com/alansororphancare"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ibadan",
      "addressCountry": "NG"
    },
    "nonprofitStatus": "Nonprofit501c3"
  };

  const heroPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroPanel = heroPanelRef.current;
    if (!heroPanel) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const parallaxLayers = heroPanel.querySelectorAll<HTMLDivElement>('.parallax-layer');

    const parallaxUpdate = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        requestAnimationFrame(parallaxUpdate);
        return;
      }

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = mouseX - centerX;
      const moveY = mouseY - centerY;

      parallaxLayers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth || "0");
        const offsetX = moveX * depth * -1;
        const offsetY = moveY * depth * -1;
        layer.style.transform = `translate3d(${offsetX / 10}px, ${offsetY / 10}px, 0)`;
      });

      requestAnimationFrame(parallaxUpdate);
    };

    requestAnimationFrame(parallaxUpdate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes draw-line { to { stroke-dashoffset: 0; } }
        .svg-lines path { 
          stroke: hsl(var(--primary-foreground) / 0.5);
          stroke-width: 1px;
          fill: none;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          filter: drop-shadow(0 0 5px hsl(var(--primary) / 0.5));
          animation: draw-line 2s 1.4s forwards;
        }
        @keyframes pulse-glow { 
          0%, 100% { border-color: hsl(var(--primary) / 0.5); } 
          50% { border-color: hsl(var(--primary) / 1); } 
        }
        .data-point::before {
           content: ''; width: 8px; height: 8px; background: hsl(var(--background)); border: 2px solid hsl(var(--primary)); border-radius: 50%; animation: pulse-glow 3s infinite ease-in-out;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="max-w-7xl md:px-8 md:pt-12 md:pb-40 mt-[50px] mr-auto mb-20 ml-auto pt-6 pr-6 pb-28 pl-6">
        <div className="relative grid place-items-center">
            <div className="absolute -top-1/4 -left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-primary/10 blur-2xl animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute bottom-0 -right-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary-dark/10 blur-2xl animate-[spin_25s_linear_infinite_reverse]"></div>
            <div className="absolute -top-1/4 -left-1/4 md:top-10 md:left-10 text-primary opacity-20 -rotate-12 animate-pulse"><Heart className="w-8 h-8 md:w-12 md:h-12" /></div>
            <div className="absolute -bottom-1/4 -right-1/4 md:bottom-10 md:right-10 text-primary-dark opacity-20 rotate-12 animate-pulse"><Handshake className="w-10 h-10 md:w-16 md:h-16" /></div>
            <div className="absolute top-1/2 left-1/4 md:left-1/4 text-primary opacity-10 animate-pulse"><Users className="w-6 h-6 md:w-10 md:h-10" /></div>
            <div className="absolute bottom-1/4 right-1/4 md:right-1/4 text-primary-dark opacity-10 animate-[spin_15s_linear_infinite]"><BookOpen className="w-5 h-5 md:w-8 md:h-8" /></div>
            <div className="absolute -top-10 right-1/4 md:top-10 md:right-20 text-primary opacity-15 animate-pulse"><Gift className="w-6 h-6 md:w-10 md:h-10" /></div>

            <svg viewBox="0 0 100 100" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto max-w-lg opacity-10" stroke="hsl(var(--primary))" fill="none" strokeWidth="0.5" strokeDasharray="4 2">
                <circle cx="50" cy="50" r="48"/>
            </svg>

          <h1 className="md:mt-10 text-[12vw] leading-none md:text-[6rem] select-none font-semibold text-foreground/95 tracking-tight mt-8 text-center font-lora">
            Al-Ansor <span className="text-primary">Orphan Care Foundation</span>
          </h1>
          <p className="mt-4 max-w-xl text-center text-base md:text-lg text-muted-foreground">
            A faith-based, non-profit organization dedicated to supporting and uplifting Muslim orphans through love, education, and community care.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Link href="/get-involved" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium">
              <Ticket className="w-5 h-5" />
              <span className="">Support</span>
            </Link>
            <Link href="/get-involved" className="inline-flex items-center gap-2 bg-secondary hover:bg-muted transition font-medium text-foreground border-border border rounded-xl pt-3 pr-5 pb-3 pl-5 backdrop-blur-lg">
              <CirclePlay className="w-5 h-5 text-muted-foreground" />
              <span className="">Volunteer</span>
            </Link>
          </div>
        </div>
      </div>
      
      <section className="relative z-10 mt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 supports-[backdrop-filter]:bg-card/50 p-3 bg-card/50 border rounded-2xl backdrop-blur-3xl">
            {features.map((feature, index) => (
              <Link key={index} href="/programs" className="flex-1 group hover:bg-accent transition p-4 flex items-start gap-4 bg-transparent border rounded-xl">
                <div className="h-10 w-10 grid place-items-center shadow-primary/20 text-center bg-gradient-to-t from-secondary to-muted rounded-full items-center justify-center">
                  {feature.icon}
                </div>
                <div className="">
                  <p className="text-sm text-muted-foreground mt-1">{feature.category}</p>
                  <h3 className="mt-1 text-base md:text-lg font-semibold tracking-tight text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="relative z-10 my-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070')"}}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto py-24 px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col w-full aspect-[3/5] hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl group sm:p-10 ring-1 ring-primary/10 bg-center relative overflow-hidden text-foreground bg-cover rounded-3xl p-8 justify-between shadow-primary/20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576765608898-5c0284d0815a?q=80&w=800')"}} data-ai-hint="children learning">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0"></div>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <BookOpen className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs px-3 py-1.5 bg-primary/20 text-primary-light rounded-full font-medium">Education</span>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl tracking-tight font-instrument-serif">Bright Futures</p>
                    <p className="text-primary-light/90 text-lg mt-2">Nurturing Minds</p>
                  </div>
                </div>
                <div className="space-y-4 border-t border-primary/20 pt-6 relative z-10">
                  <p className="leading-relaxed text-sm text-foreground/80">
                    We provide access to quality education, from basic literacy to vocational training, empowering children to build a better future.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-xs tracking-wider font-semibold">AL-ANSOR</span>
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <Link href="/programs" className="text-primary-light text-sm hover:underline transition-colors font-medium">Learn more</Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full aspect-[3/5] hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl group sm:p-10 ring-1 ring-cyan-400/10 bg-center text-foreground bg-cover rounded-3xl p-8 justify-between relative overflow-hidden shadow-cyan-500/10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547496614-54c4731a5a8a?q=80&w=800')"}} data-ai-hint="healthy child">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0"></div>
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <Heart className="w-8 h-8 text-cyan-200 group-hover:scale-110 transition-transform" />
                    <span className="text-xs px-3 py-1.5 bg-cyan-400/20 text-cyan-200 rounded-full font-medium">Health</span>
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl tracking-tight font-instrument-serif">Healthy Hearts</p>
                    <p className="text-cyan-200 text-lg mt-2">Well-being First</p>
                  </div>
                </div>
                <div className="space-y-4 border-t border-cyan-600/50 pt-6 relative z-10">
                  <p className="leading-relaxed text-sm text-foreground/80">
                    Our commitment includes regular health check-ups, nutritious meals, and promoting a healthy lifestyle for every child's physical and mental well-being.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-xs tracking-wider font-semibold">AL-ANSOR</span>
                      <Check className="w-4 h-4 text-cyan-200" />
                    </div>
                    <Link href="/programs" className="text-cyan-200 text-sm hover:underline transition-colors font-medium">Learn more</Link>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full aspect-[3/5] hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl group sm:p-10 ring-1 ring-violet-400/10 bg-center text-foreground bg-cover rounded-3xl p-8 justify-between relative overflow-hidden shadow-violet-500/10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618080946089-a5b65a5392a8?q=80&w=800')"}} data-ai-hint="community support">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0"></div>
                <div className="space-y-6 relative z-10">
                   <div className="flex items-center justify-between">
                    <span className="text-xs px-3 py-1.5 bg-violet-400/20 text-violet-200 rounded-full font-medium">Community</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl tracking-tighter font-instrument-serif">Our Programs</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center hover:bg-violet-700/50 p-2 rounded-xl transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-foreground rounded-full"></div>
                        <span className="font-medium text-foreground">Education</span>
                      </div>
                      <span className="text-foreground/80 font-medium">Full Sponsorship <Play className="inline w-3 h-3 ml-1 align-[-2px]"/></span>
                    </div>
                     <div className="flex justify-between items-center hover:bg-violet-700/50 p-2 rounded-xl transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-foreground rounded-full"></div>
                        <span className="font-medium text-foreground">Healthcare</span>
                      </div>
                      <span className="text-foreground/80 font-medium">Regular Checkups <Play className="inline w-3 h-3 ml-1 align-[-2px]"/></span>
                    </div>
                     <div className="flex justify-between items-center hover:bg-violet-700/50 p-2 rounded-xl transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-foreground rounded-full"></div>
                        <span className="font-medium text-foreground">Mentorship</span>
                      </div>
                      <span className="text-foreground/80 font-medium">Guidance <Play className="inline w-3 h-3 ml-1 align-[-2px]"/></span>
                    </div>
                     <div className="flex justify-between items-center hover:bg-violet-700/50 p-2 rounded-xl transition-colors">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-foreground rounded-full"></div>
                        <span className="font-medium text-foreground">Community Aid</span>
                      </div>
                      <span className="text-foreground/80 font-medium">Zakat & Sadaqa <Play className="inline w-3 h-3 ml-1 align-[-2px]"/></span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 border-t border-violet-700/50 pt-6 relative z-10">
                  <p className="leading-relaxed text-sm text-foreground/80">A curated library of our programs, from full educational sponsorships to community support systems.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-xs tracking-wider font-semibold">AL-ANSOR</span>
                      <Check className="w-4 h-4 text-violet-200" />
                    </div>
                    <Link href="/programs" className="text-violet-200 text-sm hover:underline transition-colors font-medium">Explore programs</Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 my-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center pb-14">
            <h2 className="text-4xl md:text-5xl tracking-tight font-semibold uppercase text-foreground/95 font-lora">Stories of Hope</h2>
            <p className="mt-4 text-lg text-muted-foreground">See the real-world impact of your support.</p>
          </div>

          <div className="supports-[backdrop-filter]:bg-card/50 p-4 md:p-6 border rounded-2xl mt-6 backdrop-blur-2xl">
            <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            
              <div className="flex flex-col w-full max-w-sm aspect-[3/5] hover:scale-105 transition-all duration-500 hover:shadow-2xl group bg-card/50 border rounded-2xl p-8 shadow-lg backdrop-blur-none justify-between">
                <div className="flex-1 bg-cover bg-center border rounded-2xl p-8 items-center justify-center border-stone-600/50 shadow-inner relative overflow-hidden group-hover:border-primary/70 transition-all duration-300">
                   <Image src="https://images.unsplash.com/photo-1509099652299-503c3a476947?q=80&w=800" alt="Happy child" layout="fill" objectFit="cover" className="rounded-2xl" data-ai-hint="happy child" />
                </div>
                <div className="space-y-6 mt-8">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium font-sans">Success Story</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-foreground rounded-full shadow-sm"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full shadow-sm"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <h2 className="sm:text-2xl leading-tight text-xl font-semibold text-foreground tracking-tight">
                    From Despair to a Bright Future
                  </h2>
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm text-muted-foreground space-y-1 font-light font-sans">
                      <p>Read about Fatima's journey</p>
                      <p>How your support changed a life</p>
                    </div>
                     <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-muted-foreground group-hover:text-foreground" />
                  </div>
                </div>
              </div>

              <a href="/programs" className="group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-accent flex flex-col items-center justify-center text-center bg-transparent border rounded-xl p-5 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800" alt="Community support" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full brightness-50 group-hover:brightness-75 transition-all duration-500" data-ai-hint="community support" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-background/20 border border-primary/30 grid place-items-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <span className="pointer-events-none absolute inset-[-10px] rounded-full border border-dashed border-primary/30 opacity-80"></span>
                  <h3 className="text-base font-semibold tracking-tight mt-4 text-foreground">Our Programs</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-primary">
                    Learn More
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <span className="pointer-events-none absolute -inset-px rounded-xl ring-1 ring-primary/20"></span>
              </a>

              <a href="/get-involved" className="group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-accent flex flex-col items-center justify-center text-center bg-transparent border rounded-xl p-5 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800" alt="Hands offering help" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full brightness-50 group-hover:brightness-75 transition-all duration-500" data-ai-hint="offering help" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-background/20 border-border grid place-items-center">
                    <Handshake className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <span className="pointer-events-none absolute inset-[-10px] rounded-full border border-dashed border-border opacity-60"></span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">Volunteer With Us</h3>
                </div>
              </a>

              <a href="/about" className="group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-accent flex flex-col items-center justify-center text-center bg-transparent border rounded-xl p-5 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800" alt="Group of happy children" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full brightness-50 group-hover:brightness-75 transition-all duration-500" data-ai-hint="happy children" />
                 <div className="relative z-10 flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-background/20 border-border grid place-items-center">
                    <BookOpen className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <span className="pointer-events-none absolute inset-[-10px] rounded-full border border-dashed border-border opacity-60"></span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">About Our Foundation</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="relative sm:py-10 pt-8 pb-8">
        <section id="upcoming-events" className="relative z-10 max-w-7xl md:px-8 mt-10 mr-auto ml-auto pr-6 pl-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <Link href="/get-involved" className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/15 transition">
              <Calendar className="h-4 w-4" />
              <span className="tracking-wide">Explore Programs</span>
            </Link>
            <a href="mailto:alansororphancare@gmail.com" className="inline-flex items-center gap-2 bg-secondary hover:bg-muted transition text-sm font-medium text-muted-foreground border-border border rounded-xl pt-2 pr-4 pb-2 pl-4">
              <Mail className="h-4 w-4" />
              <span className="tracking-wide">Sign up for our newsletter</span>
            </a>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-foreground/95 uppercase">Ways to Give</h2>

          <div className="mt-6 space-y-4">
            <article className="group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur px-5 py-4">
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-4">
                <div className="flex items-center md:block justify-between">
                  <div className="flex gap-2 text-[11px] uppercase text-muted-foreground tracking-wide items-center">
                    <Heart className="h-3.5 w-3.5"/>
                    <span className="">Monthly</span>
                  </div>
                  <p className="md:mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-foreground/95">$50</p>
                </div>
                <div>
                  <h3 className="mt-1 text-base md:text-lg font-semibold tracking-tight text-foreground">Sponsor a Child</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Provide long-term support for an orphan's education and well-being.</p>
                </div>
                <a href="/get-involved#donate" aria-label="Sponsor a Child" className="justify-self-end h-10 w-10 grid place-items-center rounded-xl border bg-secondary hover:bg-muted text-muted-foreground transition">
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur shadow-lg shadow-primary/20">
              <div className="relative px-5 py-5">
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-4">
                  <div className="flex items-center md:block justify-between">
                     <div className="flex gap-2 text-[11px] uppercase text-primary tracking-wide items-center">
                        <ScanEye className="h-3.5 w-3.5" />
                        <span className="">Flexible</span>
                      </div>
                    <p className="md:mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Any Amount</p>
                  </div>
                  <div>
                    <h3 className="mt-1 text-lg md:text-2xl font-semibold tracking-tight text-foreground">General Donation</h3>
                    <p className="mt-1 text-sm text-foreground/80">Contribute to our general fund to support where it's needed most.</p>
                  </div>
                  <a href="/get-involved#donate" aria-label="Donate" className="h-10 w-10 hover:bg-white/10 grid place-items-center transition group bg-white/5 border-white/10 border rounded-xl text-foreground">
                    <Play className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <span className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-primary/30"></span>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur px-5 py-4">
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-4">
                <div className="flex items-center md:block justify-between">
                  <div className="flex gap-2 text-[11px] uppercase text-muted-foreground tracking-wide items-center">
                    <Handshake className="h-3.5 w-3.5" />
                    <span className="">Time</span>
                  </div>
                  <p className="md:mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-foreground/95">Volunteer</p>
                </div>
                <div>
                  <h3 className="mt-1 text-base md:text-lg font-semibold tracking-tight text-foreground">Give Your Time</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Give your time and skills to make a direct impact.</p>
                </div>
                <a href="/get-involved#volunteer" aria-label="Volunteer" className="justify-self-end h-10 w-10 grid place-items-center rounded-xl border bg-secondary hover:bg-muted text-muted-foreground transition">
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </div>
        </section>
      </section>

      <section className="relative z-10 mt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center pb-14">
            <h2 className="text-4xl md:text-5xl tracking-tight font-semibold uppercase text-foreground/95 font-lora">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">Find answers to common questions about Al-Ansor Orphan Care Foundation.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border-border/50">
                <AccordionTrigger className="text-foreground/90 text-lg hover:text-primary transition-colors text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      <section className="relative z-10 mt-32 md:mt-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div ref={heroPanelRef} className="hero-panel bg-card/50 backdrop-blur-2xl border rounded-2xl p-1 shadow-2xl shadow-black/10">
            <div className="hero-panel-inner relative h-[600px] rounded-xl overflow-hidden">
                <div className="parallax-layer hero-aurora absolute inset-0 bg-primary/10 blur-[100px] z-0" data-depth="0.1"></div>
                
                <div className="parallax-layer absolute inset-0 z-10" data-depth="0.2">
                    <svg className="svg-lines absolute inset-0 opacity-20" viewBox="0 0 1360 600" preserveAspectRatio="xMidYMid meet">
                        <path d="M246,98 C350,150 450,280 680,300" />
                        <path d="M1154,128 C1050,180 900,280 680,300" />
                        <path d="M140,450 C300,380 450,320 680,300" />
                        <path d="M1250,480 C1100,400 900,320 680,300" />
                    </svg>
                </div>
                
                <div className="parallax-layer absolute inset-0 z-30" data-depth="0.6">
                    <div className="data-point absolute top-[15%] left-[5%] md:top-[15%] md:left-[18%] flex items-center gap-3 p-2 px-3 rounded-full bg-background/50 border backdrop-blur-sm">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="text-xs text-foreground">Sadaqa</span>
                    </div>
                    <div className="data-point absolute top-[15%] right-[5%] md:top-[20%] md:right-[18%] flex items-center gap-3 p-2 px-3 rounded-full bg-background/50 border backdrop-blur-sm">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="text-xs text-foreground">Education Fund</span>
                    </div>
                    <div className="data-point absolute bottom-[15%] left-[5%] md:bottom-[25%] md:left-[10%] flex items-center gap-3 p-2 px-3 rounded-full bg-background/50 border backdrop-blur-sm">
                        <HelpingHand className="w-4 h-4 text-primary" />
                         <span className="text-xs text-foreground">Volunteer</span>
                    </div>
                    <div className="data-point absolute bottom-[25%] right-[5%] md:bottom-[20%] md:right-[12%] flex items-center gap-3 p-2 px-3 rounded-full bg-background/50 border backdrop-blur-sm">
                        <span className="label text-xs text-foreground">Zakat Accepted</span>
                    </div>
                </div>

                <div className="parallax-layer hero-content absolute inset-0 flex flex-col items-center justify-center text-center z-20" data-depth="0.15">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-foreground font-lora">Join Our Mission</h2>
                    <p className="mt-4 max-w-lg text-muted-foreground text-lg">Your contribution, big or small, makes a world of difference. Join us in building a brighter future for these deserving children.</p>
                    <div className="mt-8 flex gap-4">
                        <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full transition-transform hover:scale-105 active:scale-95">
                            <Link href="/get-involved#donate">Donate Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent backdrop-blur-sm rounded-full transition-transform hover:scale-105 active:scale-95 hover:bg-accent" asChild>
                            <Link href="/programs">Our Programs</Link>
                        </Button>
                    </div>
                </div>

                <div className="parallax-layer absolute inset-0 z-40 pointer-events-none" data-depth="0.1">
                  <div className="absolute bottom-0 left-0 w-full p-4 flex justify-center items-center">
                      <span className="text-xs text-muted-foreground">Give with confidence and love</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
