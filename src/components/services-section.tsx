import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, PlugZap, Snowflake, Droplet, Home, Settings } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: "Mechanical Repairs",
    description: "Engine diagnostics, brake service, transmission checks, suspension work, and more.",
  },
  {
    icon: PlugZap,
    title: 'Electrical Systems',
    description: 'Wiring issues, generator service, battery checks, solar panel installation, inverter problems.',
  },
  {
    icon: Snowflake,
    title: 'Appliance Repair',
    description: 'Refrigerator, AC unit, furnace, water heater, stove, and microwave troubleshooting and repair.',
  },
  {
    icon: Droplet,
    title: 'Plumbing & Water Systems',
    description: 'Leak detection, pipe repair, water pump service, tank cleaning, and winterization.',
  },
  {
    icon: Home,
    title: 'Body & Structural Work',
    description: 'Roof repairs, slide-out maintenance, window replacement, fiberglass repair, and sealant application.',
  },
  {
    icon: Settings,
    title: 'Preventative Maintenance',
    description: 'Regular check-ups, fluid changes, tire inspections, and system inspections to prevent future issues.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm">Our Services</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive RV Care</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From routine maintenance to complex repairs, our certified technicians handle all aspects of RV service to keep you safe and comfortable on your travels.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center justify-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                  <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}