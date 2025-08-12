import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Eye, HandIcon as Hand, Sparkles } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Lash Extensions',
    description: 'Enhance your natural beauty with our premium lash extensions, meticulously applied by expert technicians for a stunning, long-lasting look.',
    icon: Eye,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'eyelash extensions',
    link: '/booking?service=lashes',
  },
  {
    title: 'Nail Art & Care',
    description: 'Indulge in luxurious manicures and pedicures. From classic styles to intricate nail art, we use high-quality products for healthy, beautiful nails.',
    icon: Hand,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'manicure nails',
    link: '/booking?service=nails',
  },
];

const galleryImages = [
  { src: 'https://placehold.co/400x300.png', alt: 'Elegant lash design', hint: 'lash design' },
  { src: 'https://placehold.co/400x300.png', alt: 'Artistic nail art', hint: 'nail art' },
  { src: 'https://placehold.co/400x300.png', alt: 'Relaxing salon atmosphere', hint: 'salon interior' },
  { src: 'https://placehold.co/400x300.png', alt: 'Happy client with new lashes', hint: 'client lashes' },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-primary/20 via-background to-accent/20 rounded-xl shadow-lg">
        <div className="container mx-auto px-4">
          <Sparkles className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary-foreground mb-6">
            Welcome to Luxe & Polish
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover the art of beauty with our expert lash and nail services. We are dedicated to providing you with a luxurious experience and flawless results.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
            <Link href="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4">
        <Card className="shadow-lg overflow-hidden">
            <div className="md:flex">
                <div className="md:w-1/2">
                    <Image
                        src="https://placehold.co/800x600.png"
                        alt="Beautiful salon interior"
                        width={800}
                        height={600}
                        className="object-cover h-full w-full"
                        data-ai-hint="salon interior"
                    />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-4xl font-headline font-semibold text-foreground mb-4">Your Sanctuary for Beauty</h2>
                    <p className="text-muted-foreground mb-4 text-lg">
                        At Luxe & Polish, we believe that beauty treatments should be a relaxing and rejuvenating escape. Our salon provides a serene and elegant atmosphere where you can unwind while our skilled technicians work their magic. 
                    </p>
                    <p className="text-muted-foreground text-lg">
                        We use only the highest quality products and stay updated with the latest techniques to ensure you receive the best care possible.
                    </p>
                    <Button asChild variant="link" className="text-primary p-0 mt-4 self-start text-lg">
                        <Link href="/about">Learn More About Us</Link>
                    </Button>
                </div>
            </div>
        </Card>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-headline font-semibold text-center text-foreground mb-12">Our Signature Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center text-center">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
                  <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" data-ai-hint={service.imageHint} />
                </div>
                <CardDescription className="text-muted-foreground text-center mb-6 flex-grow">
                  {service.description}
                </CardDescription>
                <Button asChild variant="outline" className="mt-auto border-primary text-primary hover:bg-primary/10 w-full">
                  <Link href={service.link}>Explore {service.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-headline font-semibold text-center text-foreground mb-12">Glimpses of Glamour</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1 hover:scale-105 transition-transform duration-300">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={400} 
                height={300} 
                className="object-cover w-full h-full"
                data-ai-hint={image.hint} 
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
