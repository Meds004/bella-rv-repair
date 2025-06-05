import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const galleryImages = [
  { src: "https://picsum.photos/seed/rvjob1/600/400", alt: "RV Repair Job - Before"},
  { src: "https://picsum.photos/seed/rvjob1after/600/400", alt: "RV Repair Job - After" },
  { src: "https://picsum.photos/seed/rvshop1/600/400", alt: "Bella RV Repair Shop Interior" },
  { src: "https://picsum.photos/seed/rvjob2/600/400", alt: "Another RV Repair" },
  { src: "https://picsum.photos/seed/rvshop2/600/400", alt: "RV Repair Bay" },
  { src: "https://picsum.photos/seed/rvjob3/600/400", alt: "Completed RV Roof Sealant" },
]

export function GallerySection() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Work</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See the Difference</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Browse photos of our facility and examples of the quality repair work we perform for our valued customers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw)"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}