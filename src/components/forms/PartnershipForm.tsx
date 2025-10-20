"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { partnershipFormSchema } from "@/lib/schemas";
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

export function PartnershipForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof partnershipFormSchema>>({
    resolver: zodResolver(partnershipFormSchema),
    defaultValues: {
      organizationName: "",
      contactPerson: "",
      email: "",
      proposal: "",
    },
  });

  async function onSubmit(values: z.infer<typeof partnershipFormSchema>) {
    const result = await handleFormSubmission("partnership_proposals", values);

    if (result.success) {
      toast({
        title: "Proposal Submitted!",
        description: "Thank you for your interest in partnering with us. We will review your proposal and get in touch.",
      });
      
       try {
        if(formRef.current) {
          await emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_PARTNER || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formRef.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
          );
        }
      } catch (error) {
        console.error("Failed to send partnership email", error);
      }
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.error || "Could not process your proposal. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="organizationName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization / Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Your organization's name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactPerson"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Person</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
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
                <Input placeholder="work.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="proposal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Partnership Proposal</FormLabel>
              <FormControl>
                <Textarea placeholder="Briefly describe how you'd like to partner with us..." {...field} rows={6}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Submit Proposal"}
        </Button>
      </form>
    </Form>
  );
}
