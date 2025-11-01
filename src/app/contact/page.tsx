
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Al-Ansor Orphan Care in Ibadan. We are here to answer your questions and welcome your support.',
};

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'contact-hero');

  const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

  return (
    <div className="relative z-10 pt-28">
      <section className="relative py-20 md:py-32 text-center">
        <div className="container relative z-20 mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-manrope tracking-tighter text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-manrope font-semibold tracking-tight text-foreground mb-4">Send us a Message</h2>
                <p className="text-muted-foreground mb-6">
                  For inquiries, feedback, or to learn more about our work, please fill out the form, and our team will get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-8 border rounded-2xl bg-card/50 backdrop-blur-sm">
                <h3 className="text-2xl font-manrope font-semibold tracking-tight text-foreground mb-6">Our Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 flex-shrink-0 grid place-items-center rounded-lg bg-primary/10 border border-primary/20">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Our Office</h4>
                      <p className="text-muted-foreground">DFN Markaz, Behind Ologuneru Shopping Complex, Ibadan, Nigeria.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="h-12 w-12 flex-shrink-0 grid place-items-center rounded-lg bg-primary/10 border border-primary/20">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email Us</h4>
                      <a href="mailto:alansororphancare@gmail.com" className="text-primary hover:underline">
                        alansororphancare@gmail.com
                      </a>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                     <div className="h-12 w-12 flex-shrink-0 grid place-items-center rounded-lg bg-primary/10 border-primary/20">
                      <WhatsAppIcon />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <a href="https://wa.me/2347016160920" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        +234 701 616 0920
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-video w-full border rounded-2xl overflow-hidden shadow-lg">
                {/* This would be a good place for a Google Maps embed */}
                <div className="w-full h-full bg-muted grid place-items-center">
                   <p className="text-muted-foreground">Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
