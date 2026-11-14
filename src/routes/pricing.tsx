import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PRICING_PLANS } from "@/lib/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — FORGE MEDIA" },
      {
        name: "description",
        content:
          "FORGE MEDIA website packages: Starter at ₹12,999, Business at ₹24,999, and custom builds tailored to your business.",
      },
      { property: "og:title", content: "Pricing — FORGE MEDIA" },
      {
        property: "og:description",
        content:
          "Starter website at ₹12,999, Business website at ₹24,999, and tailored custom builds.",
      },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:title", content: "Pricing — FORGE MEDIA" },
      {
        name: "twitter:description",
        content: "Starter ₹12,999, Business ₹24,999, and custom website packages.",
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
          Three clear packages, one standard: premium. Fixed package pricing,
          with custom builds scoped around your project.
        </p>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={
                "card-forge flex flex-col rounded-2xl p-8 " +
                (plan.highlight ? "panel-ember" : "")
              }
            >
              {plan.highlight && (
                <span className="mb-4 self-start rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground shadow-[0_0_20px_-4px_var(--color-primary)]">
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
                search={{ package: plan.name }}
                className={
                  "mt-8 flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-widest " +
                  (plan.highlight
                    ? "btn-forge"
                    : "btn-outline-forge")
                }
              >
                Build with {plan.name.toLowerCase()} <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Starter and Business prices are one-time package prices. Custom builds
          are quoted for the project.
        </p>
      </div>
    </div>
  );
}
