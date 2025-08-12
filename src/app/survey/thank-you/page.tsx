import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SurveyThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Card className="max-w-lg w-full text-center shadow-xl">
        <CardHeader>
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <CardTitle className="text-3xl md:text-4xl font-headline text-primary-foreground">Thank You!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <CardDescription className="text-lg text-muted-foreground">
            Your feedback has been successfully submitted. We appreciate you taking the time to help us improve our services.
          </CardDescription>
          <p className="text-muted-foreground">
            We value your input and will use it to make Luxe & Polish even better.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">Return to Home Page</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
