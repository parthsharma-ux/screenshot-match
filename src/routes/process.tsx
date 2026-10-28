import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Sparkles, Flame, Rocket, LifeBuoy, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: Compass,
    step: "01",
    title: "DISCOVER",
    copy: "We start with your business, audience and goals. A short discovery call plus a focused brief tells us exactly what the site must achieve.",
    duration: "Week 1",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "DESIGN",
    copy: "Art direction, page layouts and copy are crafted around your brand — premium, cinematic and conversion-focused. You approve before anything is built.",
    duration: "Week 1–2",
  },
  {
    icon: Flame,
    step: "03",
    title: "FORGE",
    copy: "We build the site: animations, interactions, forms and integrations — then test every flow on every screen size until it's flawless.",
    duration: "Week 2–4",
  },
  {
    icon: Rocket,
    step: "04",
    title: "LAUNCH",
    copy: "Fast, SEO-ready and fully responsive, your site goes live on your domain with analytics, search submission and a walkthrough from our team.",
    duration: "Week 4+",
  },
  {
    icon: LifeBuoy,
    step: "05",
    title: "EVOLVE",
    copy: "After launch we stay close: content updates, improvements, performance checks and new features as your business grows.",
    duration: "Ongoing",
  },
];

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — FORGE MEDIA" },
      {
        name: "description",
        content:
          "How FORGE MEDIA works: discover, design, forge, launch and evolve. A premium, transparent process from first call to launch and beyond.",
      },
      { property: "og:title", content: "Our Process — FORGE MEDIA" },
      {
        property: "og:description",
        content:
          "Discover, design, forge, launch, evolve — a premium, transparent build process.",
      },
      { property: "og:url", content: "/process" },
      { name: "twitter:title", content: "Our Process — FORGE MEDIA" },
      {
        name: "twitter:description",
        content: "Discover, design, forge, launch, evolve.",
      },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="kicker">The Process</p>
        <h1 className="mt-3 font-display text-5xl tracking-wide text-metallic md:text-7xl">
          HOW WE FORGE
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Five steps, zero surprises. You always know what's happening, what's
          next, and what we need from you.
        </p>

        <ol className="mt-14 space-y-0">
          {STEPS.map((s, i) => (
            <li
              key={s.step}
              className={
                "relative flex gap-6 pb-12 " +
                (i < STEPS.length - 1
                  ? "after:absolute after:left-7 after:top-16 after:h-[calc(100%-4rem)] after:w-px after:bg-border"
                  : "")
              }
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/50 bg-card">
                <s.icon className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div className="flex-1 rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-3xl text-primary/70">{s.step}</span>
                    <h2 className="font-display text-2xl tracking-wider text-metallic">{s.title}</h2>
                  </div>
                  <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {s.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="rounded-2xl border border-primary/40 bg-card p-8 text-center">
          <h2 className="font-display text-3xl tracking-wider text-metallic">
            READY TO START STEP 01?
          </h2>
          <Link
            to="/contact"
            search={{}}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book your discovery call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
