import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email is too long"),
  phone: z.string().trim().max(20, "Phone number is too long").optional(),
  businessType: z.string().trim().max(80).optional(),
  packageInterest: z.string().trim().max(40).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about your project (at least 10 characters)")
    .max(2000, "Message is too long"),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export type EnquiryResult =
  | { ok: true }
  | { ok: false; error: string };

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => enquirySchema.parse(data))
  .handler(async ({ data }): Promise<EnquiryResult> => {
    try {
      const { supabaseAdmin } = await import(
        "@/integrations/supabase/client.server"
      );
      const { error } = await supabaseAdmin.from("enquiries").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        business_type: data.businessType || null,
        package_interest: data.packageInterest || null,
        message: data.message,
      });

      if (error) {
        console.error("Enquiry insert failed:", error.message);
        return {
          ok: false,
          error: "We couldn't send your enquiry. Please try again in a moment.",
        };
      }
      return { ok: true };
    } catch (err) {
      console.error("Enquiry error:", err);
      return {
        ok: false,
        error: "We couldn't send your enquiry. Please try again in a moment.",
      };
    }
  });
