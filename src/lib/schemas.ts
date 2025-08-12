import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;

export const BookingFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional(),
  service: z.enum(['lashes', 'nails', 'both'], { required_error: "Please select a service." }),
  preferredDate: z.string().min(1, { message: "Please select a preferred date." }), // Using string for date input
  preferredTime: z.string().min(1, { message: "Please select a preferred time." }),
  message: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof BookingFormSchema>;

export const SurveyFormSchema = z.object({
  rating: z.coerce.number().min(1, { message: "Please select a rating." }).max(5, { message: "Rating cannot exceed 5." }),
  comments: z.string().optional(),
  serviceUsed: z.enum(['lashes', 'nails', 'both', 'other', 'not_sure'], { required_error: "Please select the service you used." }),
});

export type SurveyFormValues = z.infer<typeof SurveyFormSchema>;
