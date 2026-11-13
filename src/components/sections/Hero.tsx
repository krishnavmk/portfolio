import { buttonVariants } from "@/components/ui/button";
import { Terminal, ArrowRight, Smartphone } from "lucide-react";

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
          aria-hidden="true"
          className="relative lg:h-[600px] hidden lg:flex flex-col items-center justify-center gap-6"
        >
          {/* Decorative cards representing skills */}
          <div
            className="bg-card p-6 rounded-2xl shadow-xl shadow-primary/5 border border-border w-72 transform -rotate-6 translate-x-12 z-20 dark:bg-slate-900 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Mobile Apps</p>
                <p className="text-xs text-muted-foreground">React Native & Expo</p>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-6 rounded-2xl shadow-xl shadow-purple-500/5 border border-border w-72 transform rotate-3 -translate-x-12 z-10 dark:bg-slate-900 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Frontend Architecture</p>
                <p className="text-xs text-muted-foreground">React & TypeScript</p>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-6 rounded-2xl shadow-xl shadow-primary/5 border border-border w-72 transform -rotate-2 translate-x-8 z-30 dark:bg-slate-900 dark:border-slate-700"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-foreground">Full-Stack Development</p>
                <p className="text-xs text-muted-foreground">Node.js & REST APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
