import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

// SEO Based Metadata, We have to Change the Metadata Everytime We Create the Diffrent Project,
// ie. for Diffrent Project Diffrent Metadata and Deployed Url should be there.
export const metadata: Metadata = {
  metadataBase: new URL(
    "https://aditya-portfolio-sigma-nine.vercel.app"
  ),

  title: "Aditya Naikwade | Full Stack & Software Developer",

  description:
    "Aditya Naikwade is a Full Stack and Software Developer specializing in React, Next.js, TypeScript, and MERN stack development. Exploring Generative AI, LLMs, AI Agents, and modern AI technologies.",

  keywords: [
    "Aditya Naikwade",
    "Aditya Naikwade Portfolio",
    "Full Stack Developer",
    "Software Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Generative AI",
    "GenAI",
    "Large Language Models",
    "LLM",
    "AI Agents",
    "Web Development",
    "Software Engineering",
  ],

  authors: [
    {
      name: "Aditya Naikwade",
      url: "https://aditya-portfolio-sigma-nine.vercel.app",
    },
  ],

  creator: "Aditya Naikwade",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Aditya Naikwade | Full Stack & Software Developer",
    description:
      "Explore the portfolio, projects, technical skills, and work of Aditya Naikwade — Full Stack Developer exploring Generative AI and modern software technologies.",
    url: "https://aditya-portfolio-sigma-nine.vercel.app",
    siteName: "Aditya Naikwade Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


// Responsiveness Fixer.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="min-h-screen antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        <ThemeProvider>
          <div className="fixed inset-0 bg-grid pointer-events-none z-0" />

          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
