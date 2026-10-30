import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Maximize2, ArrowRight, Check } from "lucide-react";

import gymShowcase from "@/assets/showcase-gym.png";
import commerceShowcase from "@/assets/showcase-commerce.png";
import realestateShowcase from "@/assets/showcase-realestate.png";
import coachingShowcase from "@/assets/showcase-coaching.png";
import aiShowcase from "@/assets/showcase-ai.png";
import { BUSINESS_CATEGORIES } from "@/lib/site";

const PROJECTS = [
  {
    id: "gym",
    img: gymShowcase,
    title: "Gym & Fitness",
    demo: "IRONCLAD — Strength Club",
    blurb:
      "A dark, high-energy membership site: dramatic hero photography, class schedules, trainer profiles and online join flows that convert visitors into members.",
    features: [
      "Membership plans with online join & payment",
      "Class schedules and booking",
      "Trainer profiles and programs",
      "Lead-capture forms with instant alerts",
    ],
  },
  {
    id: "ecommerce",
    img: commerceShowcase,
    title: "E-Commerce & Fashion",
    demo: "AVELINE — Fashion House",
    blurb:
      "An editorial, luxury store: refined typography, lookbook layouts and a product experience that feels like a flagship boutique — built to sell.",
    features: [
      "Product catalogue with collections & lookbooks",
      "Cart, checkout and order flows",
      "Size guides and rich product pages",
      "Promotions, discount and email capture",
    ],
  },
  {
    id: "realestate",
    img: realestateShowcase,
    title: "Real Estate",
    demo: "VÉRITAS — Property Portfolio",
    blurb:
      "A cinematic property showcase: dusk photography, filterable listings, virtual-tour embeds and enquiry flows that turn browsers into viewings.",
    features: [
      "Property listings with advanced filters",
      "Gallery, floor plans and virtual tours",
      "Agent profiles and enquiry routing",
      "Location and lifestyle storytelling",
    ],
  },
  {
    id: "coaching",
    img: coachingShowcase,
    title: "Coaching & Education",
    demo: "SUMMIT — Learning Platform",
    blurb:
      "A premium learning experience: course library, student dashboards, progress tracking and payments — designed to keep students moving forward.",
    features: [
      "Course library with enrollments",
      "Student dashboard and progress tracking",
      "1:1 coaching bookings",
      "Testimonials, ratings and social proof",
    ],
  },
  {
    id: "ai",
    img: aiShowcase,
    title: "AI-Powered Business",
    demo: "NEXUS — Intelligent Automation",
    blurb:
      "An intelligent business site: AI assistant panels, automation showcases and data-driven visuals that position you at the front of your category.",
    features: [
      "AI assistant and chat experiences",
      "Lead qualification flows",
      "Live dashboards and data visuals",
      "Integrations with your business tools",
    ],
  },
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — FORGE MEDIA" },
      {
        name: "description",
        content:
          "Explore the FORGE MEDIA interactive showroom: premium website demos for gyms, e-commerce, real estate, coaching and AI-powered businesses.",
      },
      { property: "og:title", content: "Our Work — FORGE MEDIA" },
      {
        property: "og:description",
        content:
          "Interactive website showroom: gym, e-commerce, real estate, coaching and AI-powered business demos.",
      },
      { property: "og:url", content: "/work" },
      { name: "twitter:title", content: "Our Work — FORGE MEDIA" },
      {
        name: "twitter:description",
        content:
          "Interactive website showroom: gym, e-commerce, real estate, coaching and AI-powered business demos.",
      },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0]!.id);
  const active = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0]!;

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="kicker">Interactive Showroom</p>
        <h1 className="mt-3 font-display text-5xl tracking-wide text-metallic md:text-7xl">
          PICK YOUR BUSINESS.
          <br />
          SEE IT BUILT.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Choose your industry below for an immersive preview of the kind of
          website we forge for it — then make it yours.
        </p>

        {/* Business selector */}
        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Business type selector"
        >
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={activeId === p.id}
              onClick={() => setActiveId(p.id)}
              className={
                "rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition-all " +
                (activeId === p.id
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_0_28px_-6px_var(--color-primary)]"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground")
              }
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Immersive preview */}
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="card-forge overflow-hidden rounded-2xl">
            <div className="relative">
              <img
                key={active.id}
                src={active.img}
                alt={`${active.title} website design demo`}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[16/10] w-full animate-in fade-in duration-500 object-cover object-top"
              />
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-foreground backdrop-blur transition-colors hover:bg-accent"
                  >
                    <Maximize2 className="h-3.5 w-3.5" /> Full preview
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl bg-card">
                  <DialogHeader>
                    <DialogTitle className="font-display text-3xl tracking-wider text-metallic">
                      {active.demo}
                    </DialogTitle>
                    <DialogDescription>
                      {active.title} website concept demo by FORGE MEDIA.
                    </DialogDescription>
                  </DialogHeader>
                  <img
                    src={active.img}
                    alt={`${active.title} website design demo, enlarged`}
                    width={1024}
                    height={1024}
                    className="w-full rounded-lg border border-border object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
            <div className="border-t border-border p-6">
              <p className="kicker">Concept Demo</p>
              <h2 className="mt-2 font-display text-3xl tracking-wider text-metallic">
                {active.demo.toUpperCase()}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {active.blurb}
              </p>
            </div>
          </div>

          <aside className="card-forge rounded-2xl p-7">
            <p className="kicker">Included in this build</p>
            <ul className="mt-5 space-y-3.5">
              {active.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <Link
                to="/contact"
                search={{ business: active.id }}
                className="btn-forge flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-widest"
              >
                Build This for My Business <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/pricing"
                className="btn-outline-forge flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-widest"
              >
                See packages
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
