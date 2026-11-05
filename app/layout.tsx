import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

// SEO Based Metadata
export const metadata: Metadata = {
  title: "Aditya Naikwade — Full-Stack Developer & Cloud Systems Engineer",
  description: "Portfolio of Aditya Naikwade. Full-Stack Developer & Software Development Intern at ThinkBuild. Experienced in React, Next.js, Node.js, MERN stack, Docker, Kubernetes, and Cloud Resilience.",
  keywords: [
    "Aditya Naikwade",
    "Aditya Naikwade Portfolio",
    "ThinkBuild Intern",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "MERN Stack",
    "Self-Healing Cloud Cluster",
    "MasteryHub",
    "Pune Developer"
  ],
  authors: [{ name: "Aditya Naikwade", url: "https://github.com/AdityaNaikwade" }],
  openGraph: {
    title: "Aditya Naikwade — Full-Stack Developer & Cloud Systems Engineer",
    description: "Explore production full-stack web applications, cloud dashboards, and engineering experience.",
    type: "website",
    locale: "en_US",
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
