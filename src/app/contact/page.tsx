import ContactForm from "@/components/forms/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-accent/30 rounded-xl shadow-md">
        <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">Get In Touch</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
          We&apos;d love to hear from you! Whether you have a question, feedback, or want to book an appointment, feel free to reach out.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Our Address</h3>
                  <p className="text-muted-foreground">123 Beauty Lane, Glamour City, ST 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground">contact@luxeandpolish.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
             <CardHeader>
                <CardTitle className="text-2xl font-headline">Find Us</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                    <Image 
                        src="https://placehold.co/600x350.png" 
                        alt="Map to Luxe & Polish"
                        width={600}
                        height={350}
                        className="object-cover w-full h-full"
                        data-ai-hint="map location"
                    />
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
