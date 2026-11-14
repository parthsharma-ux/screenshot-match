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
  { id: "restaurant", label: "Restaurant & Café" },
] as const;

export type BusinessCategoryId = (typeof BUSINESS_CATEGORIES)[number]["id"];

/**
 * WhatsApp contact in international format, digits only.
 */
export const WHATSAPP_NUMBER = "919366117901";

export function whatsappHref(message: string): string | null {
  if (!WHATSAPP_NUMBER) return null;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
