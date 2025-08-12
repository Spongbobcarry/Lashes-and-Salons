import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-accent/30 rounded-xl shadow-md">
        <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">About Luxe & Polish</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
          Crafting beauty, one client at a time.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="https://placehold.co/800x600.png"
            alt="Elegant salon interior"
            width={800}
            height={600}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="salon aesthetic"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-headline font-semibold text-foreground">Our Story</h2>
          <p className="text-muted-foreground text-lg">
            Luxe & Polish was founded with a simple vision: to create a haven where clients can escape the everyday hustle and indulge in high-quality beauty treatments. Our journey began with a passion for artistry and a commitment to excellence in lash and nail care.
          </p>
          <p className="text-muted-foreground text-lg">
            We believe that beauty services are more than just treatments; they are an experience. From the moment you step into our salon, you'll be greeted by a warm, inviting atmosphere designed for your comfort and relaxation.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                <Target className="h-8 w-8 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our mission is to empower individuals by enhancing their natural beauty through exceptional lash and nail services. We strive to provide personalized treatments in a luxurious and tranquil environment, ensuring every client leaves feeling confident and refreshed. We are committed to using top-tier products and innovative techniques to deliver outstanding results.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-headline">
                <Users className="h-8 w-8 text-primary" />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The Luxe & Polish team consists of highly skilled and certified beauty technicians who are passionate about their craft. Each member is dedicated to continuous learning and staying abreast of the latest trends and safety standards in the beauty industry. We pride ourselves on our meticulous attention to detail and our ability to create custom looks that perfectly suit each client's style and preferences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

       <section className="text-center py-12">
        <h2 className="text-3xl font-headline font-semibold text-foreground mb-4">Visit Us</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We invite you to experience the Luxe & Polish difference. Book an appointment today and let us pamper you with the finest beauty treatments in town.
        </p>
        <Image 
            src="https://placehold.co/1200x400.png" 
            alt="Salon exterior or inviting entrance"
            width={1200}
            height={400}
            className="rounded-lg shadow-lg mt-8 object-cover mx-auto"
            data-ai-hint="salon entrance"
        />
      </section>
    </div>
  );
}
