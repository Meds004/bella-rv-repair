import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Bella RV Repair Center. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}