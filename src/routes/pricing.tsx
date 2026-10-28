import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site";

const PLANS = [
  {
    id: "starter",
    name: "STARTER",
    price: "₹24,999",
    priceNote: "from, one-time",
    tagline: "A sharp, premium presence to launch or refresh your business.",
    features: [
      "Up to 5 pages, custom design",
      "Mobile-first responsive build",
      "Contact & enquiry forms",
      "Basic SEO setup",
      "2 revision rounds",
      "Launch in 2–3 weeks",
    ],
    highlight: false,
  },
  {
    id: "business",
    name: "BUSINESS",
    price: "₹59,999",
    priceNote: "from, one-time",
    tagline: "Our most popular package: a full conversion-focused website.",
    features: [
      "Up to 10 pages, premium art direction",
      "Animations & interactive showroom-ready polish",
      "Booking, menu or catalogue flows",
      "WhatsApp & lead integrations",
      "SEO, analytics & performance tuning",
      "4 revision rounds",
      "Launch in 3–6 weeks",
    ],
    highlight: true,
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: "Custom",
    priceNote: "tailored quote",
    tagline: "E-commerce, AI experiences and platforms built around your business.",
    features: [
      "Everything in Business",
      "E-commerce / store functionality",
      "AI assistant & automation flows",
      "Member, student or CRM areas",
      "Copywriting & art direction",
      "Priority support & care plan",
      "Timeline scoped to the build",
    ],
    highlight: false,
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — FORGE MEDIA" },
      {
        name: "description",
        content:
          "FORGE MEDIA packages: Starter, Business and Premium website builds for ambitious businesses. Transparent, conversion-focused website design.",
      },
      { property: "og:title", content: "Pricing — FORGE MEDIA" },
      {
        property: "og:description",
        content:
          "Starter, Business and Premium website packages — premium design built to perform.",
      },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:title", content: "Pricing — FORGE MEDIA" },
      {
        name: "twitter:description",
        content: "Starter, Business and Premium website packages.",
      },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="kicker">Packages</p>
        <h1 className="mt-3 font-display text-5xl tracking-wide text-metallic md:text-7xl">
          CHOOSE YOUR FORGE
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Three clear packages, one standard: premium. Every project starts with
          a short discovery call and a tailored quote.
        </p>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={
                "flex flex-col rounded-2xl border p-8 " +
                (plan.highlight
                  ? "border-primary bg-card shadow-[0_0_60px_-20px_var(--color-primary)]"
                  : "border-border bg-card")
              }
            >
              {plan.highlight && (
                <span className="mb-4 self-start rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
                  Most popular
                </span>
              )}
              <h2 className="font-display text-3xl tracking-widest text-metallic">{plan.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl text-foreground">{plan.price}</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {plan.priceNote}
                </span>
              </div>
              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                search={{ package: plan.name, business: undefined }}
                className={
                  "mt-8 flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-widest transition-transform hover:scale-[1.02] " +
                  (plan.highlight
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:bg-accent")
                }
              >
                Build with {plan.name.toLowerCase()} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Prices shown are indicative starting points in INR and are confirmed
          with a tailored quote after discovery.
          {WHATSAPP_NUMBER
            ? " Prefer to chat first? Message us on WhatsApp from the contact page."
            : ""}
        </p>
      </div>
    </div>
  );
}
