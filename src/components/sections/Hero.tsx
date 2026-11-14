import { buttonVariants } from "@/components/ui/button";
import { Terminal, ArrowRight, CreditCard, Smartphone } from "lucide-react";

const highlights = [
  "6x faster search (1200ms to 200ms)",
  "iOS + Android + Web",
  "Zero release rollbacks",
  "5 years experience",
];

export function Hero() {
  return (
    <section id="home" tabIndex={-1} className="min-h-[90vh] flex flex-col justify-center relative isolate overflow-hidden pt-28 pb-12 lg:py-20">
      {/* Subtle radial gradients for background */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] opacity-70 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] opacity-70 -translate-x-1/3 translate-y-1/3"></div>

      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-700 to-pink-700 dark:via-purple-400 dark:to-pink-400 pb-2">
              Hi, I&apos;m Krishna
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Software Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              I specialize in React Native, React, TypeScript, and full-stack development. I build mobile and web applications and the services that support them.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className={buttonVariants({ size: "lg", className: "bg-foreground text-background hover:bg-foreground/90 font-medium rounded-full px-8" })}>
              Contact Me <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </a>
            <a href="#expertise" className={buttonVariants({ size: "lg", variant: "outline", className: "font-medium rounded-full px-8" })}>
              Explore Expertise
            </a>
          </div>
        </div>

        <div
          className="relative grid gap-3 sm:grid-cols-2 lg:h-[600px] lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-6"
        >
          {/* Decorative cards representing skills */}
          <div
            className="bg-card p-6 rounded-2xl shadow-xl shadow-primary/5 border border-border lg:w-72 lg:-rotate-6 lg:translate-x-12 z-20 dark:bg-slate-900 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Smartphone aria-hidden="true" className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Mobile Apps</p>
                <p className="text-xs text-muted-foreground">React Native & Expo</p>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-6 rounded-2xl shadow-xl shadow-purple-500/5 border border-border lg:w-72 lg:rotate-3 lg:-translate-x-12 z-10 dark:bg-slate-900 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Terminal aria-hidden="true" className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Frontend Architecture</p>
                <p className="text-xs text-muted-foreground">React & TypeScript</p>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-6 rounded-2xl shadow-xl shadow-primary/5 border border-border lg:w-72 lg:-rotate-2 lg:translate-x-8 z-30 dark:bg-slate-900 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-foreground">Full-Stack</p>
                <p className="text-xs text-muted-foreground">Laravel, Node.js & REST APIs</p>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 rounded-2xl shadow-xl shadow-primary/5 border border-border lg:w-72 lg:rotate-3 lg:-translate-x-8 dark:bg-slate-900 dark:border-slate-700">
            <div className="flex items-center gap-4">
              <div className="size-12 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center">
                <CreditCard aria-hidden="true" className="size-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Payments &amp; Fintech</p>
                <p className="text-xs text-muted-foreground">Razorpay, invoicing &amp; booking flows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto mt-8 max-w-6xl">
        <ul aria-label="Engineering highlights" role="list" className="grid grid-cols-2 lg:grid-cols-4 gap-1 rounded-2xl border border-border bg-card p-2 shadow-sm">
          {highlights.map((highlight) => (
            <li key={highlight} className="px-2 py-3 text-center text-sm font-semibold text-foreground">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
