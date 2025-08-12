"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SurveyFormSchema, type SurveyFormValues } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { handleSurveySubmission } from "@/app/actions";
import { useTransition } from "react";
import { Star } from "lucide-react";

export default function SurveyForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<SurveyFormValues>({
    resolver: zodResolver(SurveyFormSchema),
    defaultValues: {
      rating: undefined,
      comments: "",
      serviceUsed: undefined,
    },
  });

  async function onSubmit(values: SurveyFormValues) {
    startTransition(async () => {
      // Server action will handle redirect or errors
      const result = await handleSurveySubmission(values);
      if (result?.errors) {
        // Handle errors if not redirecting, e.g., show toast
        console.error("Survey submission error:", result.errors);
        // Potentially set form errors here if needed
        // form.setError('root', { message: result.message });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="serviceUsed"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Which service did you use?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="lashes">Lash Extensions</SelectItem>
                  <SelectItem value="nails">Nail Art & Care</SelectItem>
                  <SelectItem value="both">Lashes & Nails Package</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                  <SelectItem value="not_sure">Not Sure / First Time Inquiry</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="text-lg">How would you rate your experience? (1-5 Stars)</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => field.onChange(parseInt(value))}
                  defaultValue={field.value?.toString()}
                  className="flex space-x-2 md:space-x-4 pt-2"
                >
                  {[1, 2, 3, 4, 5].map((rate) => (
                    <FormItem key={rate} className="flex flex-col items-center space-y-1">
                      <FormControl>
                        <RadioGroupItem value={rate.toString()} id={`rating-${rate}`} className="sr-only" />
                      </FormControl>
                      <FormLabel htmlFor={`rating-${rate}`} className="cursor-pointer">
                        <Star 
                          className={`h-8 w-8 md:h-10 md:w-10 transition-colors ${ (field.value || 0) >= rate ? 'text-primary fill-primary' : 'text-muted-foreground hover:text-primary/70'}`}
                        />
                      </FormLabel>
                       <span className="text-xs text-muted-foreground">{rate}</span>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Additional Comments (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about your experience or any suggestions you have."
                  {...field}
                  rows={5}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full md:w-auto text-lg py-6 px-8" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
    </Form>
  );
}
