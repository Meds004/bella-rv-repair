'use server'

import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

export async function submitContactForm(formData: z.infer<typeof formSchema>): Promise<{ success: boolean; error?: string}> {
  const validation = formSchema.safeParse(formData)

  if (!validation.success) {
    console.error("Form validation failed:", validation.error.errors)
    return { success: false, error: "Invalid form data."}
  }

  const { name, email, phone, message } = validation.data

  console.log("Recieved contact form submission:")
  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Phone:", phone || "Not provided")
  console.log("Message:", message)

  try {
    console.log("Simulating email sending...")
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log("Email simulation successful.")

    return { success: true }

  } catch (error) {
    console.log("Error processing contact form:", error)
    return { success: false, error: "Failed to process the form submission." }
  }

}