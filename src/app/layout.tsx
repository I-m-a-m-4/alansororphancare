import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/ThemeProvider';
import { TopLoader } from '@/components/TopLoader';
import { Suspense } from 'react';

const siteConfig = {
  name: 'Al-Ansor Orphan Care Foundation',
  description: 'A Nigerian faith-based non-profit dedicated to uplifting Muslim orphans through compassionate care, quality education, and community support. Join us to make a difference.',
  url: 'https://alansororphancare.com',
  ogImage: 'https://alansororphancare.com/og-image.png', // You should create this image
  keywords: ['Muslim orphan care Nigeria', 'Islamic charity for orphans', 'sponsor an orphan Nigeria', 'Al-Ansor Foundation', 'orphanage in Ibadan', 'Muslim NGO Nigeria', 'Zakat for orphans', 'Sadaqa for orphans'],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background antialiased", "font-inter")}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <TopLoader />
          </Suspense>
          <div className="relative min-h-screen overflow-hidden">
              <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[140vmax] h-[140vmax] rounded-full bg-primary/5 blur-[120px]"></div>
                  <div className="absolute bottom-0 right-0 w-[60vmin] h-[60vmin] rounded-full bg-primary-dark/10 blur-[120px]"></div>
              </div>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmin] h-[120vmin] rounded-full border border-border/10"></div>
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vmin] h-[90vmin] rounded-full border border-border/10"></div>
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vmin] h-[60vmin] rounded-full border border-border/10"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border/10"></div>
                  <div className="absolute left-0 right-0 top-1/4 -translate-y-1/2 h-px bg-border/10"></div>
              </div>
              <Header />
              <main className="relative z-10">{children}</main>
              <Footer />
              <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
