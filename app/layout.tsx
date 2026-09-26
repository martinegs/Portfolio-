import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Gonzalez | Desarrollador Backend PHP & Full Stack",
  description: "Portafolio profesional de Martin Gonzalez, Desarrollador Backend PHP especializado en Laravel & CodeIgniter, Vue.js y arquitectura de sistemas. Mendoza, Argentina.",
  keywords: ["Desarrollador Backend", "PHP", "Laravel", "CodeIgniter", "Vue.js", "MySQL", "PostgreSQL", "Martin Gonzalez", "Mendoza", "Portfolio"],
  authors: [{ name: "Martin Gonzalez", url: "https://github.com/martinegs" }],
  openGraph: {
    title: "Martin Gonzalez - Desarrollador Backend PHP",
    description: "Desarrollo soluciones backend eficientes, escalables y mantenibles con PHP (Laravel, CodeIgniter) y Vue.js.",
    type: "website",
    locale: "es_AR",
    url: "https://github.com/martinegs",
    siteName: "Martin Gonzalez Portfolio"
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090d16] text-gray-100 selection:bg-purple-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}

