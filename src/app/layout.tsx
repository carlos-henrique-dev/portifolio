import type { Metadata } from "next";
import "./globals.css";
import { ScreenshotLoader } from "@/components/screenshot-loader";

export const metadata: Metadata = {
  title: "Carlos Henrique — Senior Full-stack Engineer",
  description: "Engenheiro de software full stack especializado em React, TypeScript e produtos digitais escaláveis.",
  keywords: ["Carlos Henrique", "Full-stack Engineer", "React", "TypeScript", "Next.js", "AWS"],
  openGraph: {
    title: "Carlos Henrique — Senior Full-stack Engineer",
    description: "Produtos digitais simples por fora, sólidos por dentro.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:`try{const t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}`}} /></head><body>{children}<ScreenshotLoader /></body></html>;
}
