import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact"},
  ];

  return (
    <header className="sticky top-0 px-4 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex justify-between h-14">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* Add logo here! */}
            <span className="hidden font-bold sm:inline-block text-lg text-primary">
              Bella RV Repair Center
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.label}
                </Link>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-md text-primary">
              Bella RV Repair
            </span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <nav className="flex flex-col gap-6 mt-8 text-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/80 p-2 rounded-md hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Right side content */}
        <div className="hidden items-center md:flex">
          <Button asChild variant="outline">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}