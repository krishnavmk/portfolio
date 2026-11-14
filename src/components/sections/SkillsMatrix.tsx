import { Badge } from "@/components/ui/badge";

const dailyDrivers = ["React Native", "Expo", "TypeScript", "React", "Laravel", "Firebase", "Razorpay"];

const skillCategories = [
  { title: "Mobile", items: ["Expo Router"] },
  { title: "Frontend", items: ["Next.js", "Tailwind CSS", "Redux Toolkit", "Zustand"] },
  { title: "Backend", items: ["Node.js", "REST APIs", "PHP", "Sanctum", "OAuth 2.0 / JWT", "WebSockets", "GraphQL"] },
  { title: "Data/Cloud", items: ["SQLite", "Cloudflare", "MySQL", "Redis", "Meilisearch", "Cloud Firestore", "AWS S3", "Firebase (Auth, FCM)", "PostgreSQL"] },
  { title: "Monitoring & Tools", items: ["Sentry", "GlitchTip", "Laravel Pulse", "GitHub Actions", "App Store Connect", "Google Play Console"] },
  { title: "Testing", items: ["Jest", "Playwright"] },
  { title: "AI Tools", items: ["OpenAI API", "OpenAI Codex", "Gemini Vision", "Qwen-VL", "RAG", "LLM prompt engineering", "Claude"] },
];

export function SkillsMatrix() {
  return (
    <section id="skills" tabIndex={-1} className="py-12 md:py-20 bg-card/30">
      <div className="container px-4 mx-auto max-w-5xl">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-10">
          Technical Skills
        </h2>
        <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm dark:bg-slate-900 mb-8">
          <h3 className="text-xl font-bold mb-4">Daily drivers</h3>
          <ul className="flex flex-wrap gap-2.5" role="list">
            {dailyDrivers.map((skill) => (
              <li key={skill}>
                <Badge className="text-sm py-1.5 px-4 bg-primary text-primary-foreground">
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="text-xl font-bold mb-4">Also worked with</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map(({ title, items }) => (
            <article key={title} className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-sm dark:bg-slate-900">
              <h4 className="text-xl font-bold mb-4">{title}</h4>
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
