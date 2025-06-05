import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container mx-auto space-y-10 xl:space-y-16 px-4 md:px-6">
        <div className="grid gap-4 mb-10 lg:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start space-y-4">
            <div className="inline-block mx-auto rounded-lg bg-muted px-3 py-1 text-sm">Expert RV Repair</div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text- 2xl:text- text-primary">
              Keep Your Adventures Rolling
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Bella RV Repair Center provides comprehensive repair and maintenance services to ensure your RV is always ready for the road. Trustworthy, reliable, and experienced.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto flex-1 min-h-[3rem] justify-center bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="#contact">Request Service</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto flex-1 min-h-[3rem] justify-center"
              >
                <Link href="#services">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-self-end items-center">
            <Image
              src="https://picsum.photos/600/400" // Placeholder RV image
              width={600}
              height={400}
              alt="Happy couple with their RV"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
              priority // Load hero image quickly
            />
          </div>
        </div>
      </div>
    </section>
  )
}