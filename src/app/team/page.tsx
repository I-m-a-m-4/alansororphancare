
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Linkedin, Twitter, Dribbble } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Our Team',
  description: 'Meet the passionate and dedicated team behind Al-Ansor Orphan Care, driving our mission forward in Ibadan.',
};

const teamMembers = [
  {
    name: 'Hajia Fatimah Bello',
    role: 'Founder & Director',
    quote: "Every child deserves a chance to thrive. Our work is a testament to what faith and collective action can achieve.",
    imageUrl: PlaceHolderImages.find(p => p.id === 'about-us-hero')?.imageUrl || 'https://picsum.photos/seed/10/400/400',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#'
    }
  },
  {
    name: 'Dr. Aisha Ibrahim',
    role: 'Head of Education',
    quote: "Education is the key to unlocking potential. We are committed to providing the tools for a brighter future.",
    imageUrl: 'https://picsum.photos/seed/11/400/400',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#'
    }
  },
  {
    name: 'Mrs. Zainab Yusuf',
    role: 'Community Outreach Coordinator',
    quote: "Building a strong, supportive community is at the heart of everything we do. No child should feel alone.",
    imageUrl: 'https://picsum.photos/seed/12/400/400',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#'
    }
  },
   {
    name: 'Sister Khadijah Lawal',
    role: 'Volunteer Manager',
    quote: "The energy and passion of our volunteers are our greatest asset. Together, we make a tangible difference.",
    imageUrl: 'https://picsum.photos/seed/13/400/400',
    socials: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#'
    }
  },
];

export default function TeamPage() {
  return (
    <div className="relative z-10 pt-28">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 text-center">
        <div className="container relative z-20">
            <div className="inline-block bg-primary/10 text-primary text-sm font-medium py-2 px-4 rounded-full mb-4">
                Our Pillars of Support
            </div>
            <h1 className="text-4xl md:text-6xl font-manrope tracking-tight text-foreground mb-4">
                Meet Our Dedicated Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                A passionate group of individuals committed to nurturing the future of every child under our care. Our strength lies in our shared values and unwavering dedication.
            </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group relative flex flex-col items-center text-center">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg transition-all duration-300 group-hover:shadow-primary/30 group-hover:scale-105">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    data-ai-hint="portrait professional"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={member.socials.linkedin} className="h-9 w-9 grid place-items-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                    </a>
                     <a href={member.socials.twitter} className="h-9 w-9 grid place-items-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary text-white transition-colors">
                        <Twitter className="w-4 h-4" />
                    </a>
                     <a href={member.socials.dribbble} className="h-9 w-9 grid place-items-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary text-white transition-colors">
                        <Dribbble className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-manrope font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-muted-foreground mt-3 text-sm italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight text-foreground">
            Join Our Mission
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Are you passionate about making a difference? We are always looking for dedicated individuals to join our team of staff and volunteers.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/get-involved#volunteer">Become a Volunteer</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
