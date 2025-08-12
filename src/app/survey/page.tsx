import SurveyForm from "@/components/forms/SurveyForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareHeart } from "lucide-react";

export default function SurveyPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-accent/30 rounded-xl shadow-md">
        <MessageSquareHeart className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary-foreground">Share Your Feedback</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mt-4">
          Your opinion matters to us! Please take a moment to share your experience at Luxe & Polish.
        </p>
      </section>

      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-headline">Feedback Form</CardTitle>
          <CardDescription>
            Help us improve by telling us what you think.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SurveyForm />
        </CardContent>
      </Card>
    </div>
  );
}
