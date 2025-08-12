import React, { Suspense } from "react";
import BookingForm from "@/components/forms/BookingForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Info } from "lucide-react";
import Image from "next/image";

export default function BookingPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-accent/30 rounded-xl shadow-md">
        <CalendarDays className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">Book Your Appointment</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
          Ready to indulge? Fill out the form below to request your preferred service and time. We&apos;ll get back to you shortly to confirm.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Appointment Request</CardTitle>
              <CardDescription>
                Please provide your details and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div>Loading form...</div>}>
                <BookingForm />
              </Suspense>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <Card className="shadow-lg bg-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline">
                <Info className="h-6 w-6 text-primary" />
                Please Note
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Submitting this form is a request for an appointment and does not guarantee your booking.
                Our team will contact you within 24 hours to confirm availability and finalize your appointment details.
                For urgent bookings, please call us directly.
              </p>
            </CardContent>
          </Card>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://placehold.co/600x800.png" 
              alt="Relaxing salon detail" 
              width={600} 
              height={800}
              className="object-cover w-full h-full"
              data-ai-hint="beauty tools"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
