import { ArrowUpRight } from "lucide-react";
import { githubUrl } from "@/lib/portfolio";

export function OpenSource() {
  return (
    <section id="open-source" tabIndex={-1} className="py-12 md:py-20">
      <div className="container px-4 mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-10">
          GitHub &amp; Open Source
        </h2>
        <article className="p-6 sm:p-8 bg-card rounded-2xl border border-border shadow-sm dark:bg-slate-900">
          <h3 className="text-xl font-bold break-words">react-native-offline-sync</h3>
          <p className="text-muted-foreground mt-3 mb-5">
            An MIT-licensed library for React Native and Expo that queues data changes offline and
            syncs them when connectivity returns. It supports configurable conflict resolution.
          </p>
          <a
            href={`${githubUrl}/react-native-offline-sync`}
            aria-label="View react-native-offline-sync on GitHub"
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline underline-offset-4"
          >
            View repository <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}
