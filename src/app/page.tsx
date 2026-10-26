import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { KeyAchievements } from "@/components/sections/KeyAchievements";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Krishna Vittal Malik",
    jobTitle: "Software Engineer",
    url: "https://krishnavm.in",
    sameAs: [
      "https://www.linkedin.com/in/krishnavmk/",
      "https://github.com/krishnavmk"
    ],
    description: "Software engineer with 5 years building fintech products across mobile, backend, and GenAI.",
  };

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-background focus:p-4">Skip to content</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <SkillsMatrix />
        <KeyAchievements />
      </main>
      <ContactFooter />
    </div>
  );
}
