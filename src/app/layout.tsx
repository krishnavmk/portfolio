import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/provider/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnavm.in"),
  title: {
    default: "Krishna Vittal Malik | Software Engineer, Mobile & GenAI",
    template: "%s | Krishna's Portfolio",
  },
  description: "Krishna Vittal Malik is a software engineer with 5 years of experience building fintech products with React Native, Laravel, Firebase, and GenAI.",
  keywords: ["Krishna Vittal Malik", "krishna malik", "krishna", "Software Engineer", "React Native Developer", "Full-Stack Developer"],
  openGraph: {
    title: "Krishna Vittal Malik | Software Engineer, Mobile & GenAI",
    description: "Krishna Vittal Malik is a software engineer with 5 years of experience building fintech products with React Native, Laravel, Firebase, and GenAI.",
    url: "/",
    siteName: "Krishna's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Vittal Malik | Software Engineer, Mobile & GenAI",
    description: "Krishna Vittal Malik is a software engineer with 5 years of experience building fintech products with React Native, Laravel, Firebase, and GenAI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} antialiased h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
