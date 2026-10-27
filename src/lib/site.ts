export const BRAND = {
  name: "FORGE MEDIA",
  tagline: "Premium Websites. Intelligent Experiences. Built to Perform.",
  finalMessage: "YOUR VISION. OUR CRAFT. BUILT TOGETHER.",
};

export const NAV_LINKS = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/process", label: "Process" },
  { to: "/faq", label: "FAQ" },
] as const;

export const BUSINESS_CATEGORIES = [
  { id: "gym", label: "Gym & Fitness" },
  { id: "ecommerce", label: "E-Commerce & Fashion" },
  { id: "realestate", label: "Real Estate" },
  { id: "coaching", label: "Coaching & Education" },
  { id: "ai", label: "AI-Powered Business" },
] as const;

export type BusinessCategoryId = (typeof BUSINESS_CATEGORIES)[number]["id"];

/**
 * WhatsApp contact. Set to the agency's WhatsApp number in international
 * format, digits only (e.g. "919876543210"). While empty, WhatsApp buttons
 * are hidden across the site.
 */
export const WHATSAPP_NUMBER = "";

export function whatsappHref(message: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
