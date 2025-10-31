"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { volunteerFormSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleFormSubmission } from "@/app/actions";
import { useRef } from "react";

export function VolunteerForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof volunteerFormSchema>>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interests: "",
    },
  });

  async function onSubmit(values: z.infer<typeof volunteerFormSchema>) {
    const result = await handleFormSubmission("volunteer_applications", values);

    if (result.success) {
      toast({
        title: "Application Received!",
        description: "Thank you for your interest in volunteering. We will be in touch soon.",
      });

      try {
        if(formRef.current && process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
          await emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_VOLUNTEER!,
            formRef.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
          );
        }
      } catch (error) {
        console.error("Failed to send volunteer email", error);
      }
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.error || "Could not process your application. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Your contact number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Why do you want to volunteer?</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your skills and interests..." {...field} rows={5}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}
