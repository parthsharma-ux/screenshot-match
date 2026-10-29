import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Dumbbell, ShoppingBag, Building2, GraduationCap, Bot, Hammer, Sparkles, Compass, Flame, Rocket, LifeBuoy } from "lucide-react";

import gymShowcase from "@/assets/showcase-gym.png";
import commerceShowcase from "@/assets/showcase-commerce.png";
import realestateShowcase from "@/assets/showcase-realestate.png";
import coachingShowcase from "@/assets/showcase-coaching.png";
import aiShowcase from "@/assets/showcase-ai.png";
import founderPhoto from "@/assets/founder-parth.jpg.asset.json";
import cofounderPhoto from "@/assets/cofounder-sagar.jpg.asset.json";
import { BRAND } from "@/lib/site";

const SHOWCASE = [
  { to: "/work", img: gymShowcase, label: "Gym & Fitness", alt: "Premium gym website design demo" },
  { to: "/work", img: commerceShowcase, label: "E-Commerce & Fashion", alt: "Luxury fashion e-commerce website demo" },
  { to: "/work", img: realestateShowcase, label: "Real Estate", alt: "Luxury real estate website demo" },
  { to: "/work", img: coachingShowcase, label: "Coaching & Education", alt: "Online coaching platform website demo" },
  { to: "/work", img: aiShowcase, label: "AI-Powered Business", alt: "AI-powered business website demo" },
];

const SERVICES = [
  { icon: Dumbbell, title: "Gym & Fitness Websites", copy: "High-energy sites that turn visitors into members." },
  { icon: ShoppingBag, title: "E-Commerce & Fashion Stores", copy: "Stores built to sell beautifully and convert fast." },
  { icon: Building2, title: "Real Estate Websites", copy: "Listings and experiences that sell the lifestyle." },
  { icon: GraduationCap, title: "Coaching & Education Platforms", copy: "Course platforms that keep students progressing." },
  { icon: Bot, title: "AI-Powered Business Websites", copy: "Intelligent experiences: chat, automation, smart flows." },
  { icon: Hammer, title: "Custom Builds & Care", copy: "Bespoke builds, performance tuning and ongoing support." },
];

const PROCESS = [
  { icon: Compass, step: "01", title: "Discover", copy: "We learn your business, audience and goals." },
  { icon: Sparkles, step: "02", title: "Design", copy: "Art direction, layouts and copy — approved by you." },
  { icon: Flame, step: "03", title: "Forge", copy: "We build, animate and test every flow." },
  { icon: Rocket, step: "04", title: "Launch", copy: "Fast, SEO-ready and live — on your domain." },
  { icon: LifeBuoy, step: "05", title: "Evolve", copy: "Ongoing support, improvements and growth." },
];

const FOUNDERS = [
  {
    name: "Parth Sharma",
    role: "Founder",
    bio: "Leading the vision, digital strategy, creative direction, and development of premium digital experiences.",
    photo: founderPhoto.url,
    alt: "Parth Sharma, Founder of FORGE MEDIA",
  },
  {
    name: "Sagar Saha",
    role: "Co-Founder",
    bio: "Building the vision alongside the team and helping drive the agency's growth and client relationships.",
    photo: cofounderPhoto.url,
    alt: "Sagar Saha, Co-Founder of FORGE MEDIA",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "FORGE MEDIA — Premium Websites. Intelligent Experiences.",
      },
      {
        name: "description",
        content:
          "Premium websites and intelligent digital solutions designed to help ambitious businesses stand out. We forge digital experiences that perform.",
      },
      { property: "og:title", content: "FORGE MEDIA — We Forge Digital Experiences" },
      {
        property: "og:description",
        content:
          "Premium websites and intelligent digital solutions for ambitious businesses. Gym, e-commerce, real estate, coaching and AI-powered websites.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "FORGE MEDIA — We Forge Digital Experiences" },
      {
        name: "twitter:description",
        content:
          "Premium websites and intelligent digital solutions for ambitious businesses.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="forge-glow grain relative overflow-hidden">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-36">
          <p className="kicker animate-in fade-in slide-in-from-bottom-4 duration-700">
            Premium Web Design Agency
          </p>
          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-wide animate-in fade-in slide-in-from-bottom-6 duration-700">
            <span className="block text-metallic">WE DON'T JUST BUILD WEBSITES.</span>
            <span className="block text-metallic">WE FORGE DIGITAL EXPERIENCES.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg animate-in fade-in slide-in-from-bottom-6 duration-700">
            Premium websites and intelligent digital solutions designed to help
            ambitious businesses stand out.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row animate-in fade-in slide-in-from-bottom-6 duration-700">
            <Link
              to="/contact"
              search={{}}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[0_10px_40px_-10px_var(--color-primary)] transition-transform hover:scale-[1.03]"
            >
              Build My Website <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-accent"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Showroom teaser */}
      <section className="border-t border-border/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker">The Showroom</p>
              <h2 className="mt-3 text-4xl text-metallic md:text-6xl">SEE WHAT WE FORGE</h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary hover:underline"
            >
              Open the interactive showroom <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SHOWCASE.map((item, i) => (
              <Link
                key={item.label}
                to={item.to}
                className={
                  "group relative overflow-hidden rounded-xl border border-border bg-card transition-transform hover:scale-[1.02] " +
                  (i === 0 ? "lg:col-span-2" : "")
                }
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background via-background/80 to-transparent px-5 pb-4 pt-12">
                  <span className="font-display text-2xl tracking-wider text-metallic">
                    {item.label.toUpperCase()}
                  </span>
                  <span className="rounded-full bg-primary/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
                    View demo
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="border-t border-border/40 bg-card/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="kicker">Services</p>
          <h2 className="mt-3 text-4xl text-metallic md:text-6xl">BUILT TO PERFORM</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <s.icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-4 text-2xl tracking-wider text-foreground">{s.title.toUpperCase()}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary hover:underline"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="border-t border-border/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="kicker">The Process</p>
          <h2 className="mt-3 text-4xl text-metallic md:text-6xl">FROM VISION TO LIVE</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.step} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-primary/80">{p.step}</span>
                  <p.icon className="h-5 w-5 text-muted-foreground" aria-hidden />
                </div>
                <h3 className="mt-3 text-xl tracking-wider text-foreground">{p.title.toUpperCase()}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary hover:underline"
            >
              How we work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="border-t border-border/40 bg-card/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="kicker">Founders</p>
          <h2 className="mt-3 text-4xl text-metallic md:text-6xl">THE PEOPLE BEHIND THE FORGE.</h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {FOUNDERS.map((f) => (
              <article
                key={f.name}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                  <img
                    src={f.photo}
                    alt={f.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-7">
                  <p className="kicker">{f.role}</p>
                  <h3 className="mt-2 text-3xl tracking-wider text-metallic">{f.name.toUpperCase()}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final brand message */}
      <section className="forge-glow grain border-t border-border/40 py-24 md:py-36">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-tight tracking-wide text-metallic">
            {BRAND.finalMessage}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Ready to forge something exceptional? Tell us about your business and
            we'll bring the fire.
          </p>
          <Link
            to="/contact"
            search={{}}
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[0_10px_40px_-10px_var(--color-primary)] transition-transform hover:scale-[1.03]"
          >
            Build My Website <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
