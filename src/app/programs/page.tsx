
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, HeartPulse, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Our Programs',
    description: 'Explore the core programs at Al-Ansor Orphan Care, including Education & Empowerment, Healthcare, and Community Support for Muslim orphans in Ibadan.',
};


export default function ProgramsPage() {
  const educationImage = PlaceHolderImages.find(img => img.id === 'program-education');
  const healthImage = PlaceHolderImages.find(img => img.id === 'program-health');
  const communityImage = PlaceHolderImages.find(img => img.id === 'about-us-mission');

  const programs = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: 'Education & Empowerment',
      description: 'We believe education is the key to unlocking a child\'s potential. Our program provides full educational sponsorship from primary through tertiary levels, including vocational training and mentorship to foster self-reliance.',
      image: educationImage,
      className: 'lg:col-span-2',
      features: [
        'Full tuition and fee coverage',
        'School supplies, uniforms, and books',
        'Extra-curricular Islamic education',
        'Vocational training and skills acquisition',
      ],
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-primary" />,
      title: 'Healthcare & Well-being',
      description: 'A healthy body and mind are essential for growth. We ensure every child receives the medical attention and nutritional support they need to thrive.',
      image: healthImage,
      className: '',
       features: [
        'Comprehensive health coverage',
        'Regular medical & dental check-ups',
        'Nutritional support & meal plans',
        'Mental and emotional wellness',
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Community & Spiritual Support',
      description: 'We strive to provide a loving, stable, and Islamically-grounded environment that feels like family, ensuring no child feels alone.',
      image: communityImage,
      className: '',
       features: [
        'Safe living arrangements',
        'Community events & activities',
        'Zakat and Sadaqa distribution',
        'Spiritual guidance',
      ],
    },
  ];

  return (
    <div className="relative z-10 pt-28">
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-manrope font-semibold tracking-tight text-foreground mb-4">
              Our Core <span className="text-primary">Programs</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Providing holistic support to nurture every aspect of a child's life: mind, body, and soul. Our programs are designed to be comprehensive, compassionate, and culturally sensitive.
            </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div key={program.title} className={`group relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:-translate-y-2 ${program.className}`}>
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    {program.image && (
                        <Image
                            src={program.image.imageUrl}
                            alt={program.image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={program.image.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50"></div>
                </div>

                <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 grid place-items-center rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                      {program.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-manrope font-semibold tracking-tight">{program.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-base text-muted-foreground mb-6 flex-grow">{program.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                    {program.features.map(feature => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary/70 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                     <Button variant="outline" className="w-full md:w-auto bg-secondary hover:bg-muted group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                        Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight text-foreground">
            Ready to Make a Difference?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your support, whether through donations, volunteering, or partnership, directly fuels these programs and changes lives.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/get-involved#donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/get-involved#volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
