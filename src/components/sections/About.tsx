export function About() {
  return (
    <section id="about" tabIndex={-1} className="py-12 bg-card/30">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">About Me</h2>
        <p className="text-sm font-medium text-primary mb-4">Krishna Vittal Malik · Bengaluru, India</p>
        <div className="text-lg text-muted-foreground max-w-3xl leading-relaxed space-y-4">
          <p>
            I&apos;m a software engineer with 5 years of experience building mobile and web applications
            and the APIs behind them.
          </p>
          <p>
            I break complex problems into smaller pieces, define clear boundaries between components
            and services, and weigh trade-offs around performance, reliability, and maintainability.
            I use prototypes and tests to validate decisions and isolate issues across the stack.
          </p>
        </div>
      </div>
    </section>
  );
}
