import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Construction } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center py-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
      <div className="relative flex items-center justify-center h-24 w-24 rounded-full bg-primary/10 border border-primary/20">
        <Construction className="h-12 w-12 text-primary" />
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
      </div>
      <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        Page Under Construction
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-md">
        We're working hard to bring this page to you soon. Thank you for your patience!
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button asChild>
            <Link href="/">
                Go back home
            </Link>
        </Button>
        <Button variant="ghost" asChild>
            <Link href="/contact">
                Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
        </Button>
      </div>
    </div>
  )
}

