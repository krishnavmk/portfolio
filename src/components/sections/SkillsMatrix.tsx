import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { title: "Mobile", items: ["React Native", "Expo", "Expo Router"] },
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "REST APIs"] },
  { title: "Data/Cloud", items: ["SQLite", "Firebase", "Cloudflare"] },
  { title: "Testing", items: ["Jest", "Playwright"] },
  { title: "AI Tools", items: ["OpenAI API", "OpenAI Codex"] },
];

export function SkillsMatrix() {
  return (
    <section id="skills" tabIndex={-1} className="py-12 md:py-20 bg-card/30">
      <div className="container px-4 mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-10">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map(({ title, items }) => (
            <article key={title} className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm dark:bg-slate-900">
              <h3 className="text-xl font-bold mb-4">{title}</h3>
              <ul className="flex flex-wrap gap-2.5" role="list">
                {items.map((skill) => (
                  <li key={skill}>
                    <Badge variant="secondary" className="text-sm py-1.5 px-4 bg-muted text-muted-foreground border border-border">
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
