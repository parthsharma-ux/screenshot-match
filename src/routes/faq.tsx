import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const FAQS = [
  {
    q: "How long does a website take to build?",
    a: "Most Starter and Business builds launch in 2–6 weeks from kickoff. Larger e-commerce, platform or AI builds are scoped individually — you'll get a clear timeline with your quote.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A short discovery call, your logo and brand assets (if you have them), and details about your services or products. If you don't have copy or photos yet, we can help plan and source them.",
  },
  {
    q: "How many revisions are included?",
    a: "Starter includes 2 revision rounds, Business includes 4, and Premium is scoped with a revision plan. Design is approved before the build starts, so major surprises are rare.",
  },
  {
    q: "Will my website be mobile-friendly and fast?",
    a: "Always. Every build is mobile-first, performance-tuned and tested across devices, with SEO fundamentals set up before launch.",
  },
  {
    q: "Do you build online stores and booking systems?",
    a: "Yes — e-commerce stores, class and appointment booking, memberships, course platforms and more are part of our Business and Premium builds.",
  },
  {
    q: "Can you add AI features to my website?",
    a: "Yes. We build AI assistants, lead-qualification flows, smart booking and automation experiences tailored to how your business actually works.",
  },
  {
    q: "What happens after launch?",
    a: "You own your website. We offer ongoing care plans covering updates, improvements, performance checks and new features whenever you need them.",
  },
  {
    q: "Do you work with small businesses and new brands?",
    a: "Absolutely. Many of our clients are ambitious small businesses launching or levelling up. The Starter package is designed exactly for that.",
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — FORGE MEDIA" },
      {
        name: "description",
        content:
          "Frequently asked questions about working with FORGE MEDIA: timelines, revisions, pricing, e-commerce, AI features and post-launch support.",
      },
      { property: "og:title", content: "FAQ — FORGE MEDIA" },
      {
        property: "og:description",
        content:
          "Timelines, revisions, pricing and support — answers to the questions clients ask most.",
      },
      { property: "og:url", content: "/faq" },
      { name: "twitter:title", content: "FAQ — FORGE MEDIA" },
      {
        name: "twitter:description",
        content: "Answers to the questions clients ask most.",
      },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="kicker">FAQ</p>
        <h1 className="mt-3 font-display text-5xl tracking-wide text-metallic md:text-7xl">
          QUESTIONS, ANSWERED
        </h1>
        <p className="mt-4 text-muted-foreground">
          Everything clients usually ask before we start forging. Anything else?
          Send us an enquiry — we reply fast.
        </p>

        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-body text-base font-semibold text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 text-center">
          <h2 className="font-display text-3xl tracking-wider text-metallic">
            STILL HAVE QUESTIONS?
          </h2>
          <Link
            to="/contact"
            search={{}}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Ask us directly <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
