import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  phone: z.string().trim().max(20, "Phone number is too long").optional(),
  businessType: z.string().trim().max(80).optional(),
  packageInterest: z.string().trim().max(40).optional(),
  message: z.string().trim().min(1, "Please tell us a little about your project").max(2000, "Message is too long"),
});