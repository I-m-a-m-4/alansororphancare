
"use client";

import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, BookOpen, Handshake, Check, Users, Sparkles, Earth, FlaskConical, Ticket, CirclePlay, Calendar, Mail, ScanEye, Play, ChevronRight, ArrowUpRight, GraduationCap, HeartPulse } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from 'react';


export default function Home() {

  const features = [
    {
      icon: <Sparkles className="w-[20px] h-[20px] text-foreground/50" />,
      title: 'Compassionate Care',
      description: 'Providing a loving and stable Islamic environment where every child feels safe, valued, and cherished.',
      category: 'Orphan Support'
    },
    {
      icon: <Earth className="w-[20px] h-[20px] text-foreground/50" />,
      title: 'Quality Education',
      description: 'Offering full educational sponsorship to unlock each child’s potential and pave the way for a bright future.',
      category: 'Education'
    },
    {
      icon: <FlaskConical className="w-[20px] h-[20px] text-foreground/50" />,
      title: 'Health & Well-being',
      description: 'Ensuring comprehensive healthcare, nutritional support, and emotional guidance for a healthy life.',
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
      answer: "Yes, we welcome volunteers. We have various opportunities available, from mentoring to assisting with events. Please fill out the volunteer form on our 'Get Involved' page to get started."
    },
    {
      question: "What kind of in-kind donations do you accept?",
      answer: "We accept non-perishable food items, new or gently-used clothing, educational materials, and other essentials. Please contact us to coordinate and ensure your donation meets our current needs."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "As a registered non-profit in Nigeria, corporate donors may be eligible for tax benefits. We recommend consulting with a tax professional for specific advice regarding your contribution."
    },
    {
      question: "How is the foundation governed?",
      answer: "Al-Ansor is governed by a dedicated board of trustees who are committed to transparency, accountability, and upholding our Islamic values in all operations. We ensure every donation is used effectively."
    }
  ]

  const marqueeItems = [
    { text: 'WE JUST GOT FEATURED ON PREMIER FM IBADAN', icon: <Sparkles className="w-5 h-5 text-primary" /> },
    { text: 'NURTURING THE FUTURE, ONE ORPHAN AT A TIME', icon: <Heart className="w-5 h-5 text-primary" /> },
    { text: 'YOUR SUPPORT CHANGES LIVES IN OUR COMMUNITY', icon: <Handshake className="w-5 h-5 text-primary" /> },
    { text: 'EMPOWERING MUSLIM ORPHANS THROUGH EDUCATION & CARE', icon: <BookOpen className="w-5 h-5 text-primary" /> },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Al-Ansor Orphan Care",
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

  const principles = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: 'Education & Empowerment',
      description: 'We provide full educational sponsorship, from primary through tertiary levels, including vocational training and mentorship to foster self-reliance.'
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-primary" />,
      title: 'Health & Well-being',
      description: 'We ensure every child receives the medical attention, nutritional support, and emotional care they need to thrive in a healthy environment.'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Community & Support',
      description: 'We create a loving, family-like atmosphere grounded in Islamic values, ensuring no child feels alone and is part of a supportive community.'
    }
  ];

  const offerings = [
    {
      icon: <GraduationCap className="h-7 w-7 text-primary" />,
      title: "Education & Empowerment",
      description: "We provide full educational sponsorship, from primary through tertiary levels, to ensure every child has the tools to build a bright, self-reliant future.",
      link: "/programs"
    },
    {
      icon: <HeartPulse className="h-7 w-7 text-primary" />,
      title: "Health & Well-being",
      description: "Our commitment includes comprehensive healthcare, nutritional support, and promoting a healthy lifestyle for physical and mental wellness.",
      link: "/programs"
    },
    {
      icon: <Users className="h-7 w-7 text-primary" />,
      title: "Community & Spiritual Support",
      description: "We foster a loving, family-like atmosphere grounded in Islamic values, ensuring no child feels alone and is part of a supportive Ummah.",
      link: "/programs"
    }
  ];


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="pt-28">
      <div className="max-w-7xl md:px-8 md:pt-12 md:pb-40 mt-[50px] mr-auto mb-20 ml-auto pt-6 pr-6 pb-28 pl-6">
        <div className="grid place-items-center">
          <div className="absolute -top-1/4 -left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-primary/10 blur-2xl animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute bottom-0 -right-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 blur-2xl animate-[spin_25s_linear_infinite_reverse]"></div>
          <div className="absolute -top-1/4 -left-1/4 md:top-10 md:left-10 text-primary opacity-20 -rotate-12 animate-pulse"><Heart className="w-8 h-8 md:w-12 md:h-12" /></div>
          <div className="absolute -bottom-1/4 -right-1/4 md:bottom-10 md:right-10 text-primary-dark opacity-20 rotate-12 animate-pulse"><Handshake className="w-10 h-10 md:w-16 md:h-16" /></div>
          <div className="absolute top-1/2 left-1/4 md:left-1/4 text-primary opacity-10 animate-pulse"><Users className="w-6 h-6 md:w-10 md:h-10" /></div>
          <div className="absolute bottom-1/4 right-1/4 md:right-1/4 text-primary-dark opacity-10 animate-[spin_15s_linear_infinite]"><BookOpen className="w-5 h-5 md:w-8 md:h-8" /></div>
          
          <h1 className="md:mt-10 text-[12vw] leading-none md:text-[6rem] select-none font-unbounded font-semibold text-foreground/95 tracking-tight mt-8 text-center">
            Al-Ansor <span className="text-primary">Orphan Care</span>
          </h1>
          <p className="mt-4 max-w-xl text-center text-base md:text-lg text-muted-foreground">
            A faith-based non-profit organization in Nigeria, dedicated to uplifting Muslim orphans through compassionate care, quality education, and community support.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Button asChild>
              <Link href="/get-involved">Support Our Mission</Link>
            </Button>
             <Button variant="outline" asChild>
              <Link href="/get-involved#volunteer">Volunteer</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <section className="relative z-10 -mt-16 py-4 bg-primary/10 overflow-hidden">
          <div className="relative flex animate-marquee">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <Link href="#as-seen-on" key={index} className="flex-shrink-0 flex items-center space-x-8 px-8 hover:bg-primary/20 transition-colors">
                      {item.icon}
                      <span className="text-sm font-medium text-foreground/90 tracking-wider">{item.text}</span>
                  </Link>
              ))}
          </div>
      </section>

      <section className="relative z-10 mt-10">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 supports-[backdrop-filter]:bg-card/50 p-3 bg-card/50 border rounded-2xl backdrop-blur-3xl">
            {features.map((feature, index) => (
              <Link key={index} href="/programs" className="feature-card flex-1 group relative p-4 flex items-start gap-4 bg-transparent border rounded-xl overflow-hidden">
                <div className="h-10 w-10 grid place-items-center shadow-primary/20 text-center bg-gradient-to-t from-secondary to-muted rounded-full items-center justify-center relative z-10">
                  {feature.icon}
                </div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground group-hover:text-violet-200 mt-1 transition-colors">{feature.category}</p>
                  <h3 className="mt-1 text-base md:text-lg font-semibold tracking-tight text-foreground group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-violet-200 mt-1 transition-colors">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 my-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="max-w-2xl">
              <div className="inline-block bg-primary/10 text-primary text-xs font-medium py-1 px-3 rounded-full mb-3">
                Our Programs
              </div>
              <h2 className="text-4xl md:text-5xl font-manrope font-semibold tracking-tight text-foreground">
                What We Offer
              </h2>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link href="/get-involved">Get Involved <ArrowUpRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <Link href={offering.link} key={offering.title} className="group relative flex flex-col justify-between p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors duration-300">
                <div>
                  <div className="h-14 w-14 mb-6 grid place-items-center rounded-xl bg-primary/10 border border-primary/20">
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-manrope font-semibold mb-3">{offering.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{offering.description}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">Explore Program</span>
                  <div className="h-10 w-10 grid place-items-center rounded-full border border-border group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="relative my-32 py-24 px-6 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1170"
            alt="Community volunteers working together"
            fill
            className="object-cover"
            data-ai-hint="community volunteers"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 text-white">
            <div className="space-y-6">
              <h2 className="text-5xl font-unbounded tracking-tight">Our Core Principles</h2>
              <p className="text-lg text-white/80 max-w-lg">
                Guided by faith and compassion, our work is built on a foundation of key principles that ensure every child receives the best possible care and opportunity.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="p-8 flex-1 min-w-[200px] text-center backdrop-blur-sm bg-white/10 rounded-full">
                  <p className="text-5xl font-unbounded tracking-tighter">50+</p>
                  <p className="text-sm text-white/70 mt-1">Children Supported</p>
                </div>
                 <div className="p-8 flex-1 min-w-[200px] text-center backdrop-blur-sm bg-white/10 rounded-full">
                  <p className="text-5xl font-unbounded tracking-tighter">20+</p>
                  <p className="text-sm text-white/70 mt-1">Dedicated Volunteers</p>
                </div>
                 <div className="p-8 flex-1 min-w-[200px] text-center backdrop-blur-sm bg-white/10 rounded-full">
                  <p className="text-5xl font-unbounded tracking-tighter">100%</p>
                  <p className="text-sm text-white/70 mt-1">Commitment</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {principles.map(principle => (
                <div key={principle.title} className="group/item p-6 backdrop-blur-sm bg-white/10 border border-white/10 rounded-2xl hover:bg-white/20 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 flex-shrink-0 grid place-items-center rounded-lg bg-primary/20 border border-primary/30 transition-transform duration-300 group-hover/item:scale-110">
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-manrope font-semibold">{principle.title}</h3>
                      <p className="text-white/70 mt-1">{principle.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 my-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center pb-14">
            <h2 className="text-4xl md:text-5xl tracking-tight font-manrope uppercase text-foreground/95">Impact Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground">See the real-world impact of your support.</p>
          </div>

          <div className="supports-[backdrop-filter]:bg-card/50 p-4 md:p-6 border rounded-2xl mt-6 backdrop-blur-2xl">
            <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4 justify-center">
            
              <div className="flex flex-col w-full max-w-sm aspect-[3/5] hover:scale-105 transition-all duration-500 hover:shadow-2xl group bg-card/50 border rounded-2xl p-8 shadow-lg backdrop-blur-none justify-between">
                <div className="flex-1 bg-cover bg-center border rounded-2xl p-8 items-center justify-center border-stone-600/50 shadow-inner relative overflow-hidden group-hover:border-primary/70 transition-all duration-300">
                   <Image src="/happy-child.jpg" alt="Happy child" fill objectFit="cover" className="rounded-2xl" data-ai-hint="happy child" />
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
                    Fatima's Journey to a Brighter Future
                  </h2>
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm text-muted-foreground space-y-1 font-light font-sans">
                      <p>From vulnerability to a confident, educated young woman. Read how your support changed her life.</p>
                    </div>
                     <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-muted-foreground group-hover:text-foreground" />
                  </div>
                </div>
              </div>

              <a href="/programs" className="group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-accent flex flex-col items-center justify-center text-center bg-transparent border rounded-xl p-5 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800" alt="Community support" fill objectFit="cover" className="absolute inset-0 w-full h-full brightness-50 group-hover:brightness-75 transition-all duration-500" data-ai-hint="community support" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-background/20 border border-primary/30 grid place-items-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <span className="pointer-events-none absolute inset-[-10px] rounded-full border border-dashed border-primary/30 opacity-80"></span>
                  <h3 className="text-base font-semibold tracking-tight mt-4 text-foreground">View Our Programs</h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-primary">
                    Learn More
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <span className="pointer-events-none absolute -inset-px rounded-xl ring-1 ring-primary/20"></span>
              </a>

              <a href="/get-involved" className="group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-accent flex flex-col items-center justify-center text-center bg-transparent border rounded-xl p-5 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800" alt="Hands offering help" fill objectFit="cover" className="absolute inset-0 w-full h-full brightness-50 group-hover:brightness-75 transition-all duration-500" data-ai-hint="offering help" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-background/20 border-border grid place-items-center">
                    <Handshake className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <span className="pointer-events-none absolute inset-[-10px] rounded-full border border-dashed border-border opacity-60"></span>
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">Become a Volunteer</h3>
                </div>
              </a>

              <a href="/about" className="group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-accent flex flex-col items-center justify-center text-center bg-transparent border rounded-xl p-5 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800" alt="Group of happy children" fill objectFit="cover" className="absolute inset-0 w-full h-full brightness-50 group-hover:brightness-75 transition-all duration-500" data-ai-hint="happy children" />
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

      <section className="relative z-10 my-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center pb-14">
              <h2 className="text-4xl md:text-5xl tracking-tight font-manrope uppercase text-foreground/95">Get Involved</h2>
              <p className="mt-4 text-lg text-muted-foreground">Your contribution, big or small, makes a world of difference.</p>
            </div>
            <div className="mt-6 space-y-4">
              <article className="group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur px-5 py-4 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-4">
                  <div className="flex items-center md:block justify-between">
                    <div className="flex gap-2 text-[11px] uppercase text-muted-foreground tracking-wide items-center">
                      <Heart className="h-3.5 w-3.5"/>
                      <span className="">Monthly</span>
                    </div>
                    <p className="md:mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-foreground/95">₦25,000</p>
                  </div>
                  <div>
                    <h3 className="mt-1 text-base md:text-lg font-semibold tracking-tight text-foreground">Sponsor a Child</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Provide long-term support for an orphan's education and well-being.</p>
                  </div>
                  <a href="/get-involved#donate" aria-label="Sponsor a Child" className="justify-self-end h-10 w-10 grid place-items-center rounded-xl border bg-secondary group-hover:bg-muted text-muted-foreground transition">
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur shadow-lg shadow-primary/20 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
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
                    <a href="/get-involved#donate" aria-label="Donate" className="h-10 w-10 hover:bg-white/10 grid place-items-center transition group-hover:bg-white/5 border-white/10 border rounded-xl text-foreground">
                      <Play className="h-4 w-4 transition-transform group-hover:scale-125" />
                    </a>
                  </div>
                </div>
                <span className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-primary/30 group-hover:ring-primary/50 transition-all duration-300 animate-pulse group-hover:animate-none"></span>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur px-5 py-4 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
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
                    <p className="mt-1 text-sm text-muted-foreground">Lend your skills and passion to make a direct impact on a child's life.</p>
                  </div>
                  <a href="/get-involved#volunteer" aria-label="Volunteer" className="justify-self-end h-10 w-10 grid place-items-center rounded-xl border bg-secondary group-hover:bg-muted text-muted-foreground transition">
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </div>
        </div>
      </section>

      <section id="as-seen-on" className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl tracking-tight font-manrope text-foreground/95">
              As Seen On
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              We were honored to be featured on Premier FM, Ibadan for our recent fundraising efforts and community impact. Watch the story here.
            </p>
          </div>
          <div className="max-w-4xl mx-auto shadow-2xl shadow-primary/10">
            <div className="aspect-w-16 aspect-h-[9]">
              <iframe
                src="https://www.youtube.com/embed/pa9nuAhcbCs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 my-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center pb-14">
            <h2 className="text-4xl md:text-5xl tracking-tight font-manrope uppercase text-foreground/95">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">Find answers to common questions about Al-Ansor Orphan Care.</p>
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
      </div>
    </>
  );
}

    
