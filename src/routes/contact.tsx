import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { ArrowRight, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";

import { submitEnquiry } from "@/lib/enquiries.functions";
import { BUSINESS_CATEGORIES, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => {
    const params: { business?: string; package?: string } = {};
    if (typeof search["business"] === "string") params.business = search["business"];
    if (typeof search["package"] === "string") params.package = search["package"];
    return params;
  },
  head: () => ({
    meta: [
      { title: "Build My Website — FORGE MEDIA" },
      {
        name: "description",
        content:
          "Start your project with FORGE MEDIA. Send a project enquiry and we'll get back to you fast — premium websites for ambitious businesses.",
      },
      { property: "og:title", content: "Build My Website — FORGE MEDIA" },
      {
        property: "og:description",
        content:
          "Send a project enquiry — premium websites and intelligent digital solutions for ambitious businesses.",
      },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: "Build My Website — FORGE MEDIA" },
      {
        name: "twitter:description",
        content: "Send a project enquiry and we'll get back to you fast.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Status = "idle" | "submitting" | "success" | "error";

function ContactPage() {
  const { business, package: packageParam } = Route.useSearch();
  const submitFn = useServerFn(submitEnquiry);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState(
    BUSINESS_CATEGORIES.some((c) => c.id === business) ? (business as string) : "",
  );
  const [packageInterest, setPackageInterest] = useState(packageParam ?? "");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const waLink = whatsappHref(
    `Hi FORGE MEDIA! I'd like to enquire about a new website.${
      businessType ? ` (Interest: ${businessType})` : ""
    }`,
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const result = await submitFn({
        data: {
          name,
          email,
          phone: phone || undefined,
          businessType: businessType || undefined,
          packageInterest: packageInterest || undefined,
          message,
        },
      });
      if (result.ok) {
        setStatus("success");
      } else {
        setErrorMessage(result.error);
        setStatus("error");
      }
    } catch (err) {
      const detail =
        err && typeof err === "object" && "message" in err
          ? String((err as { message: unknown }).message)
          : "";
      setErrorMessage(
        detail || "Please check the form and try again.",
      );
      setStatus("error");
    }
  }

  const inputClass =
    "input-forge w-full rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70";
  const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground";

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="kicker">Project Enquiry</p>
        <h1 className="mt-3 font-display text-5xl tracking-wide text-metallic md:text-7xl">
          LET'S FORGE IT
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Tell us about your business and what you're building. We reply fast —
          usually within one working day.
        </p>

        {status === "success" ? (
          <div className="panel-ember mt-12 rounded-2xl bg-card p-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden />
            <h2 className="mt-4 font-display text-3xl tracking-wider text-metallic">
              ENQUIRY RECEIVED
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              Thank you — your enquiry is in. We'll review it and get back to you
              within one working day.
            </p>
            <Link
              to="/"
              className="mt-7 inline-flex items-center gap-2 rounded-md border border-border px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-accent"
            >
              Back to home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-forge mt-12 space-y-6 rounded-2xl p-7 sm:p-10" noValidate={false}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Full name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={20}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                  placeholder="+91 …"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label htmlFor="package" className={labelClass}>
                  Package interest
                </label>
                <select
                  id="package"
                  name="package"
                  value={packageInterest}
                  onChange={(e) => setPackageInterest(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Not sure yet</option>
                  <option value="STARTER">Starter</option>
                  <option value="BUSINESS">Business</option>
                  <option value="PREMIUM">Premium</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="businessType" className={labelClass}>
                What kind of business is it for?
              </label>
              <select
                id="businessType"
                name="businessType"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className={inputClass}
              >
                <option value="">Something else / not sure yet</option>
                {BUSINESS_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Tell us about your project *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={2000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={inputClass}
                placeholder="What does your business do, and what should the website achieve?"
              />
            </div>

            {status === "error" && errorMessage && (
              <p role="alert" className="rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
                {errorMessage}
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-forge inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-sm font-semibold uppercase tracking-widest disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send enquiry <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              {waLink && (
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-forge inline-flex items-center justify-center gap-2 rounded-md px-8 py-3.5 text-sm font-semibold uppercase tracking-widest"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
