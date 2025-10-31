
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DonationInfo } from '@/components/DonationInfo';
import { VolunteerForm } from '@/components/forms/VolunteerForm';
import { PartnershipForm } from '@/components/forms/PartnershipForm';
import { Droplet, BookHeart, UserRound } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const philosophyPoints = [
    {
        icon: <Droplet className="w-8 h-8 text-primary" />,
        title: "Sadaqah Jariyah (Ongoing Charity)",
        description: "Your donation is a seed that grows into a continuous reward, providing orphans with education, care, and a chance for a better future, benefiting you even after you are gone."
    },
    {
        icon: <BookHeart className="w-8 h-8 text-primary" />,
        title: "The Prophet's Promise",
        description: "The Prophet Muhammad (ﷺ) said, 'I and the person who looks after an orphan will be in Paradise like this,' putting his index and middle fingers together. Your support brings you closer to this promise."
    },
    {
        icon: <UserRound className="w-8 h-8 text-primary" />,
        title: "Direct & Transparent Impact",
        description: "We ensure that your contribution directly reaches the children who need it most. Our transparent process allows you to see the real-world impact of your generosity and compassion."
    }
];

export function GetInvolvedPageClient() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'get-involved-hero');
  const [activeTab, setActiveTab] = React.useState('donate');

  const renderContent = () => {
    switch (activeTab) {
      case 'donate':
        return <DonationInfo />;
      case 'volunteer':
        return <VolunteerForm />;
      case 'partner':
        return <PartnershipForm />;
      default:
        return <DonationInfo />;
    }
  };

  const getBackgroundImage = () => {
    switch (activeTab) {
      case 'donate':
        return PlaceHolderImages.find(img => img.id === 'get-involved-donate')?.imageUrl;
      case 'volunteer':
        return PlaceHolderImages.find(img => img.id === 'get-involved-volunteer')?.imageUrl;
      case 'partner':
        return PlaceHolderImages.find(img => img.id === 'get-involved-partner')?.imageUrl;
      default:
        return heroImage?.imageUrl;
    }
  };

  return (
    <div className="relative z-10 pt-28">
      {/* Hero Section */}
       <section className="flex overflow-hidden h-[70vh] relative items-center justify-center text-center pb-16">
        <div className="absolute inset-0 z-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
        </div>

        <div className="relative z-20 px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block border border-white/20 rounded-full px-6 py-2 backdrop-blur-sm">
              <span className="text-xs tracking-[0.3em] text-white/90">
                JOIN OUR CAUSE
              </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-unbounded leading-tight tracking-tight mb-6 text-white">
            <span className="block">Change a Life,</span>
            <span className="block text-primary py-2">Build a Future</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Your support, in any form, provides more than just aid—it offers hope, opportunity, and the promise of a brighter tomorrow for a deserving child.
          </p>
           <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200">
            <Link href="#ways-to-give">
                Explore Ways to Give
            </Link>
          </Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 lg:py-32 px-6 bg-secondary/30">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] text-muted-foreground mb-4 block">
              OUR ETHOS
            </span>
            <h2 className="text-5xl md:text-6xl font-unbounded tracking-tight mb-8">
              The Philosophy of Giving
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In Islam, supporting an orphan is one of the most virtuous deeds. Our work is guided by these profound principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophyPoints.map((point) => (
              <div key={point.title} className="text-center">
                <div className="w-20 h-20 mx-auto mb-8 border border-primary/20 rounded-full flex items-center justify-center bg-card/50">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-light mb-4 font-unbounded">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section id="ways-to-give" className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <span className="text-xs tracking-[0.3em] text-muted-foreground mb-6 block">
                GET INVOLVED
              </span>
              <h2 className="text-5xl md:text-6xl font-unbounded mb-12 leading-tight">
                Three Paths to Make a Difference
              </h2>
              <div className="space-y-8">
                <div 
                  className="border-t border-border/50 pt-8 cursor-pointer group"
                  onMouseEnter={() => setActiveTab('donate')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={cn("text-2xl font-light font-unbounded", activeTab === 'donate' && "text-primary")}>
                      Donate
                    </h3>
                    <span className="text-sm text-muted-foreground">01</span>
                  </div>
                  <p className={cn("text-muted-foreground leading-relaxed transition-colors", activeTab === 'donate' && "text-foreground")}>
                    Your generous donations are the lifeblood of our foundation, enabling us to provide continuous care and support.
                  </p>
                </div>
                <div 
                  className="border-t border-border/50 pt-8 cursor-pointer group"
                  onMouseEnter={() => setActiveTab('volunteer')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={cn("text-2xl font-light font-unbounded", activeTab === 'volunteer' && "text-primary")}>
                      Volunteer
                    </h3>
                    <span className="text-sm text-muted-foreground">02</span>
                  </div>
                  <p className={cn("text-muted-foreground leading-relaxed transition-colors", activeTab === 'volunteer' && "text-foreground")}>
                    Lend your skills and passion to make a direct difference in the lives of orphans.
                  </p>
                </div>
                <div 
                  className="border-t border-border/50 pt-8 cursor-pointer group"
                  onMouseEnter={() => setActiveTab('partner')}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={cn("text-2xl font-light font-unbounded", activeTab === 'partner' && "text-primary")}>
                      Partner
                    </h3>
                    <span className="text-sm text-muted-foreground">03</span>
                  </div>
                  <p className={cn("text-muted-foreground leading-relaxed transition-colors", activeTab === 'partner' && "text-foreground")}>
                    Collaborate with us to amplify our impact and create sustainable solutions for orphan care.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="p-8 border rounded-2xl bg-card/50 backdrop-blur-sm min-h-[600px]">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
