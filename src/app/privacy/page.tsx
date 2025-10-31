import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PrivacyPage() {
  return (
    <div className="relative z-10 pt-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-manrope font-semibold tracking-tight mb-6">Privacy Policy</h1>
        <div className="prose prose-lg prose-invert max-w-none text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <p>
            This is a placeholder for your Privacy Policy. It's essential to provide a clear and comprehensive
            privacy policy for your users. This document should inform them about what data you collect, why you
            collect it, and how you use and protect it.
          </p>

          <h2 className="text-foreground">1. Introduction</h2>
          <p>
            Welcome to Al-Ansor Orphan Care ("we," "our," or "us"). We are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website. Please read this privacy policy carefully. If you do not agree with the terms of
            this privacy policy, please do not access the site.
          </p>

          <h2 className="text-foreground">2. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address,
              email address, and telephone number, and demographic information, such as your age, gender, hometown,
              and interests, that you voluntarily give to us when you register with the Site or when you choose
              to participate in various activities related to the Site, such as online chat and message boards.
            </li>
            <li>
              <strong>Donation Information:</strong> Financial information, such as data related to your payment
              method (e.g., valid credit card number, card brand, expiration date) that we may collect when you
              donate, purchase, order, return, exchange, or request information about our services from the Site.
            </li>
          </ul>

          <h2 className="text-foreground">3. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and
            customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Process donations and transactions.</li>
            <li>Send you a newsletter.</li>
            <li>Request feedback and contact you about your use of the Site.</li>
            <li>Notify you of updates to our services.</li>
          </ul>

          <h2 className="text-foreground">4. Legal Disclaimer</h2>
          <p>
            <strong>This is a template and not a legal document.</strong> We strongly advise you to consult with
            a legal professional to draft a privacy policy that is tailored to your specific data practices and
            complies with all applicable laws and regulations, such as GDPR, CCPA, etc.
          </p>

           <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild>
                    <Link href="/">
                        Go back home
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}
