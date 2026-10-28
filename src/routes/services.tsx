import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, ShoppingBag, Building2, GraduationCap, Bot, Sparkles } from "lucide-react";

const SERVICES = [
  {
    icon: Dumbbell,
    title: "Gym & Fitness Websites",
    copy: "High-energy, cinematic sites built to turn visitors into paying members. Dramatic visuals, bold typography and friction-free sign-up flows.",
    points: ["Membership & join flows", "Class schedules & bookings", "Trainer profiles", "Lead capture with alerts"],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Fashion Stores",
    copy: "Editorial, luxury storefronts that feel like a flagship boutique — and are engineered to convert, upsell and bring customers back.",
    points: ["Product catalogue & lookbooks", "Cart, checkout & payments", "Discounts & promotions", "Email & abandoned-cart capture"],
  },
  {
    icon: Building2,
    title: "Real Estate Websites",
    copy: "Cinematic property showcases with filterable listings, virtual tours and enquiry routing that turn browsers into booked viewings.",
    points: ["Listings with advanced filters", "Galleries & virtual tours", "Agent profiles & routing", "Mortgage & area tools"],
  },
  {
    icon: GraduationCap,
    title: "Coaching & Education Platforms",
    copy: "Premium learning experiences — course libraries, dashboards and coaching bookings designed to keep students progressing.",
    points: ["Course library & enrollments", "Student dashboards", "1:1 coaching bookings", "Progress & certificates"],
  },
  {
    icon: Bot,
    title: "AI-Powered Business Websites",
    copy: "Intelligent experiences that put you ahead of your category: AI assistants, lead qualification and automation woven into your site.",
    points: ["AI assistant & chat", "Lead qualification flows", "Smart booking & routing", "Business tool integrations"],
  },
  {
    icon: Sparkles,
    title: "Custom Builds & Brand Launch",
    copy: "Something different? We forge bespoke web experiences end to end — from art direction to launch, tuning and ongoing care.",
    points: ["Bespoke design & builds", "Brand identity & art direction", "SEO & performance tuning", "Ongoing support plans"],
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — FORGE MEDIA" },
      {
        name: "description",
        content:
          "Premium website design and development: gym & fitness, e-commerce, real estate, coaching, AI-powered business websites and custom builds.",
      },
      { property: "og:title", content: "Services — FORGE MEDIA" },
      {
        property: "og:description",
        content:
          "Premium website design and development for ambitious businesses — gym, e-commerce, real estate, coaching, AI-powered and custom builds.",
      },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: "Services — FORGE MEDIA" },
      {
        name: "twitter:description",
        content:
          "Premium website design and development for ambitious businesses.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="kicker">Services</p>
        <h1 className="mt-3 font-display text-5xl tracking-wide text-metallic md:text-7xl">
          WHAT WE FORGE
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Every build is designed around one goal: a website that performs — for
          your visitors and for your bottom line.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-primary/15 p-2.5">
                  <s.icon className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <h2 className="font-display text-2xl tracking-wider text-metallic">
                  {s.title.toUpperCase()}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="text-sm text-foreground">
                    <span className="mr-2 text-primary">·</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold uppercase tracking-widest text-primary hover:underline"
              >
                Start this project <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
