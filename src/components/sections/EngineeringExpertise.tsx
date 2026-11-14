import { Braces, Cloud, CreditCard, Layout, Server, Smartphone } from "lucide-react";

const expertise = [
  {
    icon: Smartphone,
    title: "Mobile Engineering",
    description: "Build cross-platform iOS and Android apps with React Native and Expo, with attention to navigation, offline behavior, and platform-specific interactions.",
  },
  {
    icon: Layout,
    title: "Frontend Architecture",
    description: "Design responsive React interfaces around reusable components, typed boundaries, and explicit loading, empty, and error states.",
  },
  {
    icon: Server,
    title: "Backend/API Engineering",
    description: "Design APIs and data models with clear contracts, input validation, and predictable behavior when requests fail or retry.",
  },
  {
    icon: CreditCard,
    title: "Payments & Fintech",
    description: "Integrate Razorpay payment gateways, verify webhooks, automate invoicing, and handle transaction failures with rollback safeguards.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Configure cloud services and delivery workflows, including environment settings, automated checks, and repeatable builds.",
  },
  {
    icon: Braces,
    title: "AI Integration",
    description: "Build AI features using the OpenAI API and Claude, integrate Gemini Vision and Qwen-VL for multimodal tasks, and use retrieval-augmented generation (RAG). Handle timeouts and unusable responses, and route cases to human review when needed.",
  },
];

export function EngineeringExpertise() {
  return (
    <section id="expertise" tabIndex={-1} className="py-12 md:py-20">
      <div className="container px-4 mx-auto max-w-6xl">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight mb-10">
          Engineering Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map(({ icon: Icon, title, description }) => (
            <article key={title} className="p-6 sm:p-8 bg-card rounded-2xl border border-border shadow-sm dark:bg-slate-900">
              <div className="flex items-center gap-4 mb-4">
                <div className="size-12 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
