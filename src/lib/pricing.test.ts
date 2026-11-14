import { describe, expect, it } from "vitest";

import { PRICING_PLANS } from "@/lib/pricing";
import { WHATSAPP_NUMBER, whatsappHref } from "@/lib/site";

describe("FORGE MEDIA package prices", () => {
  it("sets Starter at ₹12,999", () => {
    expect(PRICING_PLANS.find((plan) => plan.id === "starter")?.price).toBe("₹12,999");
  });

  it("sets the second package at ₹24,999", () => {
    expect(PRICING_PLANS.find((plan) => plan.id === "business")?.price).toBe("₹24,999");
  });

  it("sets the most premium package to Custom", () => {
    expect(PRICING_PLANS.at(-1)?.price).toBe("Custom");
  });
});

describe("WhatsApp enquiry link", () => {
  it("opens a prefilled chat with 9366117901 and preserves the enquiry text", () => {
    const message = "Name: Sagar\nProject details: Restaurant website";
    const link = whatsappHref(message);

    expect(WHATSAPP_NUMBER).toBe("919366117901");
    expect(link).not.toBeNull();
    const parsed = new URL(link ?? "");
    expect(parsed.pathname).toBe("/919366117901");
    expect(parsed.searchParams.get("text")).toBe(message);
  });
});