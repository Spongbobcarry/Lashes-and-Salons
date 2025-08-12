"use server";

import { redirect } from 'next/navigation';
import type { ContactFormValues, BookingFormValues, SurveyFormValues } from '@/lib/schemas';
import { ContactFormSchema, BookingFormSchema, SurveyFormSchema } from '@/lib/schemas';

export async function handleContactForm(data: ContactFormValues) {
  const validatedFields = ContactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to send message. Please check your input.",
    };
  }

  // Simulate API call
  console.log("Contact Form Data:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Your message has been sent successfully! We'll get back to you soon.",
    success: true,
  };
}

export async function handleBookingRequest(data: BookingFormValues) {
  const validatedFields = BookingFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Booking request failed. Please check your input.",
    };
  }

  // Simulate API call
  console.log("Booking Request Data:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    message: "Your booking request has been submitted! We will contact you shortly to confirm.",
    success: true,
  };
}

export async function handleSurveySubmission(data: SurveyFormValues) {
  const validatedFields = SurveyFormSchema.safeParse(data);

  if (!validatedFields.success) {
    // This should ideally not happen if client-side validation is working,
    // but good to have server-side check.
    // Redirecting to thank you anyway or showing error on survey page is an option.
    // For now, let's assume client validation catches this. If not, an error page or toast would be needed.
    console.error("Survey validation failed:", validatedFields.error.flatten().fieldErrors);
    // In a real app, you might return an error state to the form.
    // Since we redirect, this path is less likely to be hit by user directly.
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Survey submission failed. Please check your input.",
    }
  }
  
  // Simulate API call
  console.log("Survey Data:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  redirect('/survey/thank-you');
}
