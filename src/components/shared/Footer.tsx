import Link from 'next/link';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-primary-foreground mb-4">
              <Sparkles className="h-7 w-7 text-primary" />
              Luxe & Polish
            </Link>
            <p className="text-muted-foreground text-sm">
              Experience elegance and perfection in every detail. Your beauty is our passion.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/booking" className="text-muted-foreground hover:text-primary transition-colors">Book Now</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/survey" className="text-muted-foreground hover:text-primary transition-colors">Feedback</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                123 Beauty Lane, Glamour City, ST 12345
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                (123) 456-7890
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                contact@luxeandpolish.com
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-muted-foreground text-sm mt-8 pt-8 border-t border-border">
          © {new Date().getFullYear()} Luxe & Polish. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
