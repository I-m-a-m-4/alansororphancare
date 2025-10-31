import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TermsPage() {
  return (
    <div className="relative z-10 pt-28">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-manrope font-semibold tracking-tight mb-6">Terms of Service</h1>
        <div className="prose prose-lg prose-invert max-w-none text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <p>
            This is a placeholder for your Terms of Service. A Terms of Service agreement is a legal document that
            outlines the rules and regulations for users and your responsibilities as the website owner.
          </p>

          <h2 className="text-foreground">1. Agreement to Terms</h2>
          <p>
            By using our website, you agree to be bound by these Terms of Service. If you do not agree to these
            Terms, you are not authorized to use this site. We may modify these Terms at any time, and such
            modifications will be effective immediately upon posting.
          </p>
          
          <h2 className="text-foreground">2. Use of the Site</h2>
          <p>
            You agree to use the website only for lawful purposes. You are prohibited from posting on or transmitting
            through the site any material that is unlawful, harmful, threatening, abusive, harassing, defamatory,
            vulgar, obscene, sexually explicit, profane, hateful, or otherwise objectionable.
          </p>

          <h2 className="text-foreground">3. Intellectual Property</h2>
          <p>
            All content included on this site, such as text, graphics, logos, images, as well as the compilation
            thereof, is the property of Al-Ansor Orphan Care or its content suppliers and protected by international
            copyright laws.
          </p>
          
          <h2 className="text-foreground">4. Donations</h2>
          <p>
            If you wish to make a donation, you may be asked to supply certain information relevant to your
            Donation including, without limitation, your credit card number, the expiration date of your credit card,
            your billing address, and your shipping information.
          </p>

          <h2 className="text-foreground">5. Legal Disclaimer</h2>
          <p>
            <strong>This is a template and not a legal document.</strong> You should consult with a legal professional
            to ensure your Terms of Service are complete, accurate, and compliant with all applicable laws. This
            template does not constitute legal advice.
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
