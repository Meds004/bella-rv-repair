'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Wrench } from 'lucide-react';
import { useToast } from '@/hooks/use-toast'
import { submitContactForm } from '@/app/actions'

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long."),
})

export function ContactSection() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await submitContactForm(values)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. We'll be in touch soon.",
        })
        form.reset()
      } else {
        throw new Error(result.error || "An unexpected error occurred.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was an error sending your message. Please try again later or contact us directly.",
      })
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="mx-auto container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions about our services or need a quote? Fill out the form or use the contact details below. We&#39;re here to help!
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">700 Major Street, Welland, Ontario</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">905-708-7264</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">bellarvrentals@yahoo.ca</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Wrench className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Sat: 9:00 AM - 1:00 PM</p>
                  <p className="text-muted-foreground">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 555-5555" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us how we can help..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}