
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Heart, BookOpen, ShieldCheck, Handshake, Users, Eye, TrendingUp, Group } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Learn about the mission, vision, and values of the Al-Ansor Orphan Care Foundation, a project by the umuhat of Dawah Front of Nigeria (DFN) in Ibadan.',
};

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'about-us-hero');
  const missionImage = PlaceHolderImages.find(img => img.id === 'about-us-mission');
  const visionImage = PlaceHolderImages.find(img => img.id === 'about-us-vision');

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: 'Compassion (Ihsan)',
      description: 'We approach our work with empathy, kindness, and a deep sense of care for every child, striving for excellence in all our actions.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: 'Trust (Amanah)',
      description: 'We are committed to being faithful custodians of the trust placed in us by our donors, community, and the children we serve.'
    },
    {
      icon: <Handshake className="w-6 h-6 text-primary" />,
      title: 'Community (Ummah)',
      description: 'We believe in the strength of community and work to create a supportive network that uplifts everyone involved.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: 'Knowledge (Ilm)',
      description: 'We prioritize education and continuous learning as the foundation for growth, empowerment, and a brighter future.'
    }
  ];

  return (
    <div className="relative z-10 pt-28">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="inline-flex border-border bg-card/50 rounded-full mb-6 px-4 py-2 backdrop-blur-sm gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm text-muted-foreground">A Sisterhood United for a Cause</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-3xl mx-auto drop-shadow-xl font-manrope font-semibold tracking-tighter">
            Nurturing the Future of Muslim Orphans with{' '}
            <span className="text-primary">Love, Faith, and Opportunity</span>
          </h1>
          <p className="md:text-lg text-base text-muted-foreground max-w-2xl mt-6 mx-auto">
            Dedicated to providing comprehensive care that focuses on spiritual, educational, and emotional well-being, ensuring every child can reach their full potential.
          </p>
        </div>
      </section>

      {/* Main Content Section - Two Column Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: Mission & Vision Text */}
                <div className="lg:col-span-5 space-y-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <Eye className="w-6 h-6" />
                            <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight">Our Mission</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            To provide comprehensive care for Muslim orphans, focusing on their spiritual, educational, and emotional well-being. We create a nurturing Islamic environment that fosters growth, resilience, and a strong sense of identity, ensuring every child has the opportunity to reach their full potential.
                        </p>
                    </div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <TrendingUp className="w-6 h-6" />
                            <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight">Our Vision</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We envision a community where every Muslim orphan is empowered to become a pious, educated, and self-reliant individual who contributes positively to the Ummah and the wider society, breaking the cycle of poverty and disadvantage.
                        </p>
                    </div>
                </div>

                {/* Right Column: Image Grid */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative h-72 overflow-hidden rounded-2xl bg-card/50 backdrop-blur border">
                        {missionImage && (
                            <Image
                                src={missionImage.imageUrl}
                                alt={missionImage.description}
                                fill
                                className="object-cover opacity-80"
                                data-ai-hint={missionImage.imageHint}
                            />
                        )}
                    </div>
                     <div className="relative h-72 overflow-hidden rounded-2xl bg-card/50 backdrop-blur border">
                        {visionImage && (
                            <Image
                                src={visionImage.imageUrl}
                                alt={visionImage.description}
                                fill
                                className="object-cover opacity-80"
                                data-ai-hint={visionImage.imageHint}
                            />
                        )}
                    </div>
                    <div className="relative col-span-2 h-56 overflow-hidden rounded-2xl bg-card/50 backdrop-blur border">
                         {heroImage && (
                            <Image
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                fill
                                className="object-cover opacity-80"
                                data-ai-hint={heroImage.imageHint}
                            />
                        )}
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
             <div className="flex items-center justify-center gap-3 text-primary mb-4">
                <Group className="w-8 h-8" />
                <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight">Our Core Values</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Our work is guided by fundamental Islamic principles that shape every aspect of our foundation.
            </p>
          </div>
          <div className="rounded-2xl border bg-card/50 backdrop-blur-sm">
              <ul className="divide-y divide-border/50">
                  {values.map((value, index) => (
                      <li key={value.title} className="grid md:grid-cols-12 gap-4 p-6">
                          <div className="md:col-span-5 flex items-center gap-4">
                              <span className="text-xs text-muted-foreground">{`0${index + 1}`}</span>
                              <div className="h-10 w-10 grid place-items-center rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                                {value.icon}
                              </div>
                              <p className="text-base font-medium text-foreground">{value.title}</p>
                          </div>
                          <p className="md:col-span-7 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                      </li>
                  ))}
              </ul>
          </div>
        </div>
      </section>

      {/* History/Founders Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight mb-4">Our Foundation Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Al-Ansor Orphan Care was born from the collective passion and dedication of the umuhat of the Dawah Front of Nigeria (DFN) in Ibadan. Witnessing the struggles faced by Muslim orphans in our community, we felt a deep-seated responsibility, rooted in our faith, to take action.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What started as a small, informal effort to provide meals and basic necessities has, by the grace of Allah, grown into a structured foundation committed to providing holistic care. We are driven by the Islamic imperative to care for the orphan and empowered by the unity and resilience of our sisterhood. Every success story is a testament to what is possible when faith is combined with determined action.
          </p>
        </div>
      </section>
    </div>
  );
}
